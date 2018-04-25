import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  @Output() onAllow: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeny: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onDenyUser() {
    this.onDeny.emit();
  }

  onAllowUser() {
    this.onAllow.emit();
  }
}
