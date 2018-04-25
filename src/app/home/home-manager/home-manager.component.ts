import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {
  @Input() currentUser: User;
  requestingUsers: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAllUnregistered().subscribe(users => {
      this.requestingUsers = users;
    });
  }

}
