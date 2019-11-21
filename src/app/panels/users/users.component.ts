import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'panel-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[] = []
  constructor(public svc:UserService, private loc:LocationService) { }

  ngOnInit() {
    this.svc.getUsers()
      .subscribe(data => this.users = data)
  }

  
  selectUser(u:User){
    this.svc.selection = u
    this.loc.location = 'userOptions'
  }

}
