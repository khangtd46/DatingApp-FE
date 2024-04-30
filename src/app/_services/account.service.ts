import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string = 'https://localhost:5001/api/';
  currentUserSource = new BehaviorSubject<User | null>(null);
  currentuser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  login(model:any){
   return this.http.post<User>(this.baseUrl + 'Account/login',model).pipe(
    map( (response : User) => {
      const user = response;
      if (user){
        console.log(user);
        localStorage.setItem('User',JSON.stringify(user));
        this.currentUserSource.next(user);
      }
    })
   );
  }

  logout(){
    localStorage.removeItem('User');
    this.currentUserSource.next(null);
  }

  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }

  register(model:User){
    return this.http.post<User>(this.baseUrl + 'Account/register',model).pipe(
     map( (response : User) => {
       const user = response;
       if (user){
         localStorage.setItem('User',JSON.stringify(user));
         this.currentUserSource.next(user);
       }
     })
    );
   }
}
