import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostquestionComponent } from './postquestion/postquestion.component';
import { DisplayquestionComponent } from './displayquestion/displayquestion.component';

@NgModule({
  declarations: [
    AppComponent,
    PostquestionComponent,
    DisplayquestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
