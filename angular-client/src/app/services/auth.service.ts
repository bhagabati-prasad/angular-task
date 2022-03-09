import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  proxy = environment.proxy;

  constructor(private router: Router, private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('access-token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access-token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  getUser() {
    return this.http.post(`${this.proxy}/api/user/isLoggedIn`, {
      'access-token': this.getToken(),
    });
  }

  signup(data: any) {
    return this.http.post(`${this.proxy}/api/user/signup`, data);
  }

  login(data: any) {
    return this.http.post(`${this.proxy}/api/user/login`, data);
  }

  logout() {
    localStorage.removeItem('access-token');
    this.router.navigate(['login']);
  }
}
