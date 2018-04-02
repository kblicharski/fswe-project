import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  ballots: any = [
    {
      name: 'Ballot1',
      candidates: [
        {
          name: 'Putin',
          party: 'Authoritarian',
          votes: 20
        },
        {
          name: 'Trump',
          party: 'Republican',
          votes: 10
        }
      ]
    },
    {
      name: 'Ballot2',
      candidates: [
        {
          name: 'Clinton',
          party: 'Democrat',
          votes: 30
        },
        {
          name: 'Merkel',
          party: 'German',
          votes: 10
        }
      ]
    }
  ];

  constructor(private userService: UserService,
              private authService: AuthenticationService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
