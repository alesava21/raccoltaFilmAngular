import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { user } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServer = 'http://localhost:8080/api/auth/login';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  private userLogggedSubject$: BehaviorSubject<user | null> = new BehaviorSubject<user | null>(null);

  login(loginForm: user):Observable<user>{
    console.log(loginForm)
   return this.http.post<{'jwt-token': string}>(this.apiServer, JSON .stringify(loginForm), this.httpOptions).pipe(
      switchMap(res => of({ username: loginForm.username, token: res['jwt-token'] }))
    );
    // return of ({username: loginForm.username, token: "123456"})
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
