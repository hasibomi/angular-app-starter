import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class UserService {

  private apiUrl: string = 'http://localhost:8000/api/v1';
  private auth: UserInterface;

  constructor(private http: HttpClient) { }

  /**
   * User sign up.
   *
   * @param UserInterface data
   */
  public signup(data: UserInterface): Observable<any> {
    const headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/register`, data, headers);
  }

  /**
   * User sign in.
   *
   * @param data
   */
  public signin(data: {
    email: string,
    password: string
  }): Observable<any> {
    const headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/login`, data, headers);
  }

  /**
   * Handle signin.
   *
   * @param response
   */
  handleSignin(response): void {
    localStorage.setItem('token', response.token);
  }

  /**
   * Update refresh token.
   *
   * @param token
   */
  updateToken(token): void {
    localStorage.setItem('token', token.split('Bearer ')[1]);
  }

  /**
   * User logout.
   *
   * @returns {Observable<any>}
   */
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  /**
   * Handle user logout.
   */
  handleLogout() {
    localStorage.removeItem('token');
  }

  /**
   * Decode url base 64.
   *
   * @param str
   * @returns {string}
   */
  urlBase64Decode(str): string {
    let output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }

    return window.atob(output);
  }

  /**
   * Get claims from token.
   *
   * @returns {AuthUser}
   */
  getClaimsFromToken(): UserInterface {
    const token = localStorage.getItem('token');
    let user: UserInterface;

    if (typeof token !== undefined) {
      const encoded = token.split('.')[1];
      user = JSON.parse(this.urlBase64Decode(encoded));
    }
    return user;
  }

  /**
   * Check a user is logged in.
   */
  isLoggedin(): boolean {
    if (localStorage.getItem('token')) {
      this.auth = this.getClaimsFromToken();
      return true;
    }

    return false;
  }

}
