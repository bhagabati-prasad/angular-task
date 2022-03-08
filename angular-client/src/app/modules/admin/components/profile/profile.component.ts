import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  fname!: String;
  lname!: String;
  email!: String;
  phone!: String;
  age!: Number;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http
      .post('http://localhost:4000/api/user/isLoggedIn', {
        'access-token': this.auth.getToken(),
      })
      .subscribe((res: any) => {
        console.log(res);
        if (res?.isLoggedIn) {
          this.fname = res?.user?.fname;
          this.lname = res?.user?.lname;
          this.email = res?.user?.email;
          this.phone = res?.user?.phone;
          this.age = res?.user?.age;
        } else {
          this.router.navigate(['login']);
        }
      });
  }
}
