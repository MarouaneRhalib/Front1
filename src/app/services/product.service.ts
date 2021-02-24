import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public host:String="http://localhost:8888/INVENTORY-SERVICE";

  constructor(private http:HttpClient) { }

  public getProducts(){
    return this.http.get(this.host+"/products")
  }

}


