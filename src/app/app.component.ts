import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/users';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

      users$:Observable<User>;
      isLoggedIn$:Observable<boolean>;
      isLoggedOut$:Observable<boolean>;
    constructor(private authservie:AuthService){}
  ngOnInit(): void {
    this.users$=this.authservie.user$;
    this.isLoggedIn$ = this.authservie.isLoggedIn$;
    this.isLoggedOut$ = this.authservie.isLoggedOut$;
  }








}
