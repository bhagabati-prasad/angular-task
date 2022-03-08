import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['profile']);
    }

    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    this.http
      .post(
        'http://localhost:4000/api/user/login',
        this.loginForm.getRawValue()
      )
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('access-token', res.token);
        this.router.navigate(['profile']);
      });
  }
}
