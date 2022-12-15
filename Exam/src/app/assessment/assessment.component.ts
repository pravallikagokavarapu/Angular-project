
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AnswerModel } from '../model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessmentForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private api:ApiService) {
    this.assessmentForm = new FormGroup({
      formArrayName: this.formBuilder.array([])
    })
  }
  indexFlag: boolean = false;
  index: number = 0;
  currentSet: number = 0;
  answerOptions: any = [];
  currentQuestionAnswers: any = [];
  lastFlag: boolean = false;
  main: any = {}
  questions: any[]=[];
  answerObj:AnswerModel = new AnswerModel();

  buildForm() {    
    const controlArray = this.assessmentForm.get('formArrayName') as FormArray;    
    Object.keys(this.currentQuestionAnswers).forEach((i) => {
      controlArray.push(
        this.formBuilder.group({
          answer: new FormControl({ value: this.currentQuestionAnswers[i].answer })
        })
      )
    })
  }
  
 
  setQuestionsAnswers() {
    let a: any[] = [];
    this.questions.forEach((item: any) => {      
        a.push(item)      
    })
    this.currentQuestionAnswers = a; 
    this.buildForm();  
  }

  submit(event: any) {
    var a:any = [];
    this.assessmentForm.value.formArrayName.forEach((item:any)=>{
      a.push(item.answer);
    }) 
    this.answerObj.answer1 = a[0];
    this.answerObj.answer2 = a[1];
    this.answerObj.answer3 = a[2];
    this.answerObj.answer4 = a[3];
    this.answerObj.answer5 = a[4];  
    this.answerObj.answer6 = a[5];
    this.answerObj.answer7 = a[6];
    this.answerObj.answer8 = a[7];
    this.answerObj.answer9 = a[8];
    this.answerObj.answer10 = a[9];
    console.log(this.answerObj);
    this.api.submitForm(this.answerObj).subscribe((res:any)=>{      
      console.log(res);
    })
    this.router.navigate(['completed']);
   
  }

  getInitialData(){
    this.api.getForm().subscribe((res:any)=>{
      this.questions=res;
      this.setQuestionsAnswers();
    })
  }


  ngOnInit(): void {
    this.getInitialData();
    
  }


}

