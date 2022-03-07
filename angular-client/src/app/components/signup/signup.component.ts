import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['profile']);
    }
  }

  onSubmit(): void {
    console.log('signup component:: ', this.signupForm.value);
    if (this.signupForm.valid) {
      this.auth.signup(this.signupForm.value).subscribe(
        (result) => {
          this.router.navigate(['profile']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
