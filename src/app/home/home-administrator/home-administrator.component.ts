import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-home-administrator',
  templateUrl: './home-administrator.component.html',
  styleUrls: ['./home-administrator.component.css']
})
export class HomeAdministratorComponent implements OnInit {
  @Input() currentUser: User;
  unregisteredUsers: User[] = [];
  adminMode: 'verification' | 'editing' | 'auditing';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAllUnregistered().subscribe(users => {
      this.unregisteredUsers = users;
    });
  }

}
