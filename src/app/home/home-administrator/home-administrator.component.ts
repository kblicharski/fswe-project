import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-administrator',
  templateUrl: './home-administrator.component.html',
  styleUrls: ['./home-administrator.component.css']
})
export class HomeAdministratorComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  onNavigateTo(path: string) {
    this.router.navigate([path], {relativeTo: this.route});
  }

}
