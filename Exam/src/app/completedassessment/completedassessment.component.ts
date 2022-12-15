import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-completedassessment',
  templateUrl: './completedassessment.component.html',
  styleUrls: ['./completedassessment.component.css']
})
export class CompletedassessmentComponent implements OnInit {
  constructor(private router:Router){}
  ngOnInit(): void {
   setTimeout((interval:any)=>{
    this.router.navigate([''])
   },5000);
  }

}

