import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CompletedassessmentComponent } from './completedassessment/completedassessment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginuserComponent,
    InstructionsComponent,
    AssessmentComponent,
    CompletedassessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
