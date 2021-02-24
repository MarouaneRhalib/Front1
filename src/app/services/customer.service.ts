import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public host:String="http://localhost:8888/CUSTOMER-SERVICE";


  constructor(private http:HttpClient) {}
  public getCustomers(){
    return this.http.get(this.host+"/customers")
    }
}
