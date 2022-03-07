import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  fname: String = 'John';
  lname: String = 'Doe';
  email: String = 'john@abc.com';
  phone: String = '1234567890';
  age: Number = 24;

  constructor() {}

  ngOnInit(): void {}
}
