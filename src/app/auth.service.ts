import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './form-details/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
  @NgModule({
    providers: [HttpClient]
  })
export class AuthService {

  configUrl = 'http://192.168.122.1:3000/person/save';

  getConfig() {
    return this.http.get(this.configUrl);
  }
  constructor(private http: HttpClient) { }

  getUserDetails(sub, descr, fname, lname, email) {
    // post user details to HTTP
    // console.log(email);
    const user = {
      sub,
      descr,
      fname,
      lname,
      email
    };
    console.log(user);

    return this.http.post<User>(this.configUrl, user).subscribe(data => {
      console.log(data, 'is what we get');
    });
  }
}

