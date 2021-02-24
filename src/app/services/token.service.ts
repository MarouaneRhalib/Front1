import { Injectable } from '@angular/core';

const ACCES_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken(): string {
    return <string> localStorage.getItem(ACCES_TOKEN);
  }

  getRefreshToken(): string {
    return <string> localStorage.getItem(REFRESH_TOKEN);
  }

  saveToken(token:string): void {
    localStorage.setItem(ACCES_TOKEN, token);
  }

  saveRefreshToken(refreshToken:string): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(ACCES_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }


}
