import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'DatingApp';
  Users: any;
  baseUrl: string = "https://localhost:5001/api/";
  constructor(private http:HttpClient,private accountService:AccountService){

  }
  ngOnInit(): void {
    //this.GetUsersList();
    this.SetCurrentUser();
  }

  GetUsersList(): void {
    this.http.get(this.baseUrl + "Users").subscribe({
      next:value => {
        this.Users = value;
      },
      error:err => {
        console.log(err);
      },
      complete:() => {
        console.log("Complete");
      },
    })
  }
  SetCurrentUser(){
    const userString = localStorage.getItem('User');
    if (!userString) return;
    this.accountService.setCurrentUser(JSON.parse(userString)); //cài current user vào subject behaviour
    //các component con không cần phải truy cập vào localstorage mà sẽ thông qua subject
  }
  


}
