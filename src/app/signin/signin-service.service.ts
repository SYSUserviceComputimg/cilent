import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../all';
import {  throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Token } from '@angular/compiler/src/ml_parser/lexer';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};
@Injectable({
  providedIn: 'root',
})
export class SigninServiceService {
  usersUrl = 'http://localhost:4200/v3/signIn';
  user: User;
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  login(u: User): Observable<User> {
    console.warn(u);
    return this.http.post<User>(this.usersUrl, u, httpOptions)
    .pipe(
      catchError(this.handleError)
    );

  }

}

