import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../_models/user';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-election-management',
  templateUrl: './election-management.component.html',
  styleUrls: ['./election-management.component.css']
})
export class ElectionManagementComponent implements OnInit {
  displayMode: 'create' | 'edit';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  users: User[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    console.log('getting all');
    this.userService.getAll().subscribe(
      (data) => {
        console.log('got: ');
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

