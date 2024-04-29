import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'DatingApp';
  Users: any;
  baseUrl: string = "https://localhost:5001/api/";
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
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
  


}
