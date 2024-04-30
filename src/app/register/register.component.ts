import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model:any = {};
  @Output() CancelRegisterEmitter = new EventEmitter();

  constructor(private accountSerice:AccountService,private toastr: ToastrService){}

  register(){
    this.accountSerice.register(this.model).subscribe({
      next: () => {
        this.CancelRegisterMode();
      },
      error:error => this.toastr.warning(error.error),
      complete: () => {}
    })
  }
  CancelRegisterMode(){
    this.CancelRegisterEmitter.emit(false);
  }


}
