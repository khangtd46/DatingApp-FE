import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model:any = {};
  constructor(public accountService:AccountService){}

  ngOnInit(): void {
  }

  login(){
    console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('Login Complete');
      }
    });;
  }
  logout(){
    this.accountService.logout();
    this.accountService.currentuser$
  }

}
