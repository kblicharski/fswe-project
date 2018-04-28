import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-verify-voters',
  templateUrl: './verify-voters.component.html',
  styleUrls: ['./verify-voters.component.css']
})
export class VerifyVotersComponent implements OnInit {
  unregisteredUsers: User[] = [];
  queryString: string;
  loading = true;
  loadedInitially = false;

  constructor(private userService: UserService, private cdf: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  verifyUser(user) {
    user.registrationStatus = 'registered';
    this.userService.update(user).subscribe(
      (data) => {
        this.loadAllUsers();

      },
      (error) => {
        console.log(error);
      }
    );
  }

  denyUser(user) {
    user.registrationStatus = 'denied';
    this.userService.update(user).subscribe(
      (data) => {
        this.loadAllUsers();

      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshUsers() {
    // Add delay to allow refresh icon to appear
    this.loading = true;
    setTimeout(() => {
      this.loadAllUsers();
    }, 600);
  }

  private loadAllUsers() {
    this.userService.getAllUnregistered().subscribe(users => {
      this.unregisteredUsers = users;
      this.loadedInitially = true;
      this.loading = false;
      this.cdf.detectChanges();
    });
  }

}
