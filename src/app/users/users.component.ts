import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService) { }
// @ts-ignore
  users;
  // @ts-ignore
  roles;
  ngOnInit(): void {

    this.userService.getAllUsers()
      .subscribe(data =>{
        this.users=data
      },error => {
        console.log(error);
      })
  }
  onGetRoles(u: any) {
    console.log(u.appRoles);
    this.roles=u;
  }
}
