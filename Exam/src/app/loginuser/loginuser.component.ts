import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommondataService } from '../commondata.service';


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  username:any;
  password:any;
  isLoginClicked:boolean = false;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(public service:CommondataService, private router:Router) { }

  loginUser(event:any){
    this.isLoginClicked = true;
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    if(this.username === 'test' && this.password === 'password'){
      this.service.loggedIn = true;
    }else{
      this.service.loggedIn = false;
    }
    if(this.service.loggedIn)
    {
      this.router.navigate(['instructions'])
    }
  }

  signUpUser(event:any){
    console.log("Sign Up screen to be done as well.")
  }
  ngOnInit(): void {
    
  }

}
