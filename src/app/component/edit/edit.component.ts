import { Observable, map, catchError, of, EMPTY } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectionChange } from 'ngx-quill';
import * as Quill from 'quill';
import { Model, User } from 'src/app/_shared/model/model';
import { submitUser } from 'src/app/store/user.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_shared/service/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  form!: FormGroup;
  editor!: Quill.Quill;
  selectedText!: string;
  data$!: Observable<any>;
  errorMsg!: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private store: Store<{ user: User }>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      textEditor: this.fb.control(''),
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      email: this.fb.control(''),
      phoneNumber: this.fb.control(''),
      city: this.fb.control(''),
      state: this.fb.control(''),
      country: this.fb.control(''),
      zipCode: this.fb.control(''),
    });
  }

  onSelectionChanged(event: SelectionChange) {
    const range: Quill.RangeStatic = event.range!;
    if (range) {
      if (range.length == 0) {
        console.log('User cursor is at index', range.index);
      } else {
        this.selectedText = event?.editor?.getText(range.index, range.length);
        this.getWordDefinition(this.selectedText);
      }
    } else {
      this.data$ = of([]);
    }
  }

  getWordDefinition(selectedText: string) {
    this.data$ = this.api.getDefinitions(selectedText).pipe(
      map((data: Model) =>
        data?.definitions?.map((res) => ({
          definition: res?.definition,
          partOfSpeech: res?.partOfSpeech,
        }))
      ),
      catchError((error) => {
        this.errorMsg = error.error.message;
        return of([]);
      })
    );
  }

  onSubmit() {
    this.store.dispatch(submitUser({ user: this.form.value }));
    this.router.navigateByUrl('/home/view');
  }
}
