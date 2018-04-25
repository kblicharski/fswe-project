import { Component, Input, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  ngOnInit() {
  }

  onDenyUser() {
    console.log(`denied ${this.user.firstName}`);
  }

  onAllowUser() {
    console.log(`allowed ${this.user.firstName}`);
  }
}
