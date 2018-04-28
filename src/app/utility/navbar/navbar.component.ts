import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  homeLink: string;
  private currentUrl;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.homeLink = '/' + user.role;
      console.log('user found');
      console.log(this.homeLink);

    } else {
      this.homeLink = '/login';
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  onLandingPage(): boolean {
    return this.currentUrl === '/login' || this.currentUrl === '/forgot-password' || this.currentUrl === '/register';
  }

}
