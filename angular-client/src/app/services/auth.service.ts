import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  proxy = 'http://localhost:4000';

  constructor(private router: Router, private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    this.http
      .get(this.proxy + '/api/user/isLoggedIn', {
        headers: new HttpHeaders({
          'access-token': this.getToken() || '',
        }),
      })
      .subscribe(
        (data) => {
          console.log({ data });
        },
        (err) => console.log('Error: ', err)
      );
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  signup({ fname, lname, age, phone, email, password }: any): Observable<any> {
    if (
      fname !== '' ||
      lname !== '' ||
      age !== '' ||
      email !== '' ||
      password !== ''
    ) {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
