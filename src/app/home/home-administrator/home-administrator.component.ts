import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home-administrator',
  templateUrl: './home-administrator.component.html',
  styleUrls: ['./home-administrator.component.css']
})
export class HomeAdministratorComponent implements OnInit {
  @Input() currentUser: User;

  adminMode: 'verification' | 'editing' | 'auditing';

  constructor() {
  }

  ngOnInit() {
  }


}
