import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  // @ts-ignore
  login(data):Observable<any>{
    console.log("m a server");
    return this.http.post(`${baseUrl}/login`,data);
  }


}
