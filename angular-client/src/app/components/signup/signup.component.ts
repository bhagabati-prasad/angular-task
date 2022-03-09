import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['profile']);
    }

    this.signupForm = this.formBuilder.group({
      fname: '',
      lname: '',
      age: '',
      phone: '',
      email: '',
      password: '',
    });
  }

  onSubmit(): void {
    this.auth.signup(this.signupForm.getRawValue()).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('access-token', res.token);
      this.router.navigate(['profile']);
    });
  }
}
