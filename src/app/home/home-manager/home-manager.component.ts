import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {
  @Input() currentUser: User;
  @Input() users: User[];

  constructor() {
  }

  ngOnInit() {
  }

}
