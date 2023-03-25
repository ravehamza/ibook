import { User } from '../../_shared/model/model';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  user$: Observable<any>;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = this.store.pipe(select('user'));
  }

  ngOnInit(): void {}
}
