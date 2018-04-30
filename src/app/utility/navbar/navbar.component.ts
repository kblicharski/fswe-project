import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  homeLink: string;
  private currentUrl;

  constructor(
    private router: Router,
    private authService: AuthenticationService
    ) {
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.homeLink = '/' + user.role;

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

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
