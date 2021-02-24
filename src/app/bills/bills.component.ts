import { Component, OnInit } from '@angular/core';
import {BillService} from '../services/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  // @ts-ignore
  public bills;
  constructor(private billService:BillService) { }

  ngOnInit(): void {
    this.billService.getBills()
      .subscribe(data =>{
        this.bills=data
      },error => {
        console.log(error);
      })
  }

}
