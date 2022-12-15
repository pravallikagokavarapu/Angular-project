import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { CompletedassessmentComponent } from './completedassessment/completedassessment.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LoginuserComponent } from './loginuser/loginuser.component';


const routes: Routes = [
  {path:'login', component:LoginuserComponent},
  {path:'instructions', component:InstructionsComponent},
  {path:'assessment', component:AssessmentComponent},
  {path:'completed', component:CompletedassessmentComponent},
  {path: '',   redirectTo: '/login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
