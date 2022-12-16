import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { user } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private userLogggedSubject$: BehaviorSubject<user | null> = new BehaviorSubject<user | null>(null);

  login(loginForm: user):Observable<user>{
    console.log(loginForm)
    return of ({username: loginForm.username, token: "123456"})
  }

  setUserLogged(user: user | null){
    this.userLogggedSubject$.next(user);
  }

  getUserLogged(): Observable<user | null>{
    return this.userLogggedSubject$.asObservable();
  }

  isLoggedin(): boolean{
    return this.userLogggedSubject$.value ? !!this.userLogggedSubject$.value.token : false;
  }

  getUserToken(): string | null{
    return this.userLogggedSubject$.value ? this.userLogggedSubject$.value.token : null;
  }

  logout(){
    this.setUserLogged(null);
  }
}
