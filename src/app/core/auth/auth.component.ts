import { NgForOf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { user } from 'src/app/model/user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  user?: user;

  destroy$: Subject<boolean> = new Subject();

  constructor(private router: Router, private authService: AuthService) { }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

  onClick(loginForm: NgForm): void {
    if (!loginForm.invalid) {
      this.authService.login(loginForm.value).pipe(
        takeUntil(this.destroy$)).subscribe(res => {
        this.authService.setUserLogged(res);
        this.router.navigateByUrl("welcome")
      })
    }
  }
  

}
