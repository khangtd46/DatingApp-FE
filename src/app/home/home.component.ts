import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  registerMode = false;

  RegisterToggle(){
    this.registerMode = !this.registerMode;
  }
  CancelRegisterMode(event:boolean){
    this.registerMode = event;
  }
}
