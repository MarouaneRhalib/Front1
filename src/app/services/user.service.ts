import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public host:String="http://localhost:8080"

  constructor(private http:HttpClient,private tokenService:TokenService) { }

  getAllRules(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.tokenService.getToken()
    })
    return this.http.get(this.host+"/roles",{ headers: headers });
    }

  getAllUsers(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.tokenService.getToken()
    })
    return this.http.get(this.host+"/users",{ headers: headers });
  }
}

