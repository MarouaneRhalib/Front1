import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  // @ts-ignore
  public customers;

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers()
      .subscribe(data =>{
        this.customers=data
      },error => {
        console.log(error);
      })
  }

}
