import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home-administrator',
  templateUrl: './home-administrator.component.html',
  styleUrls: ['./home-administrator.component.css']
})
export class HomeAdministratorComponent implements OnInit {
  currentUser: User;

  adminMode: 'verification' | 'editing' | 'auditing';

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }


}
