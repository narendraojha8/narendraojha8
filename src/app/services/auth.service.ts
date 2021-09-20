import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/users';

export const ANONYMOUS_USER:User={
  id:undefined,
  email:''
}
@Injectable({
  providedIn: 'root'
})
export class AuthService  {
   private subject = new BehaviorSubject<User>(ANONYMOUS_USER);
   user$:Observable<User> = this.subject.asObservable();
   isLoggedIn$:Observable<boolean> = this.user$.map(user=>!!user.id);
   isLoggedOut$:Observable<boolean> = this.isLoggedIn$.map(user=>!user);

  constructor(private http:HttpClient) { }
  signUp(email:string,password:string){
  //  return this.http.post<User>('/api/test',{email,password});
   return this.http.post<User>('/api/signup',{email,password});
   
  }
}
