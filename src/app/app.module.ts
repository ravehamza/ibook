import { TextstyleDirective } from './_shared/directive/textstyle.directive';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './component/home/home.component';
import { userReducer } from './store/user.reducer';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';
import { SafehtmlPipe } from './_shared/pipe/safehtml.pipe';
import { HoverCursorDirective } from './_shared/directive/hover-cursor.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafehtmlPipe,
    EditComponent,
    ViewComponent,
    TextstyleDirective,
    HoverCursorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
