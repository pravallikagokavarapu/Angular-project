import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string='http://localhost:3000/form/';
  
  constructor(private http:HttpClient) { }

  getForm(){
    return this.http.get(this.url);
  }

  submitForm(req:any){
    return this.http.post(this.url,req,  {responseType: 'text'})
  }
}
