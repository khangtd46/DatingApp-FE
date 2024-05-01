import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css'
})
export class TestErrorComponent {
  baseUrl = "https://localhost:5001/api/";
  validatonErrors = [];

  constructor(private http:HttpClient){}

  Auth(){
    this.http.get(this.baseUrl+"Buggy/auth").subscribe({
      error:error => console.log(error)
    })
  }
  NotFound(){
    this.http.get(this.baseUrl+"Buggy/not-found").subscribe({
      error:error => console.log(error)
    })
  }
  ServerError(){
    this.http.get(this.baseUrl+"Buggy/server-error").subscribe({
      error:error => console.log(error)
    })
  }
  BadRequest(){
    this.http.get(this.baseUrl+"Buggy/bad-request").subscribe({
      error:error => console.log(error)
    })
  }
  ValidationError(){
    this.http.post(this.baseUrl+"Account/register",{}).subscribe({
      error:error => {
        console.log(error);
        this.validatonErrors = error;

      }
    })
  }
}
