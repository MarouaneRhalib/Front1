import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  public host:String="http://localhost:8888/BILLING-SERVICE";


  constructor(private http:HttpClient) { }

  public getBills(){
    return this.http.get(this.host+"/bills")
  }

}
