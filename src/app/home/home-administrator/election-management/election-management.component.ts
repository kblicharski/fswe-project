import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-election-management',
  templateUrl: './election-management.component.html',
  styleUrls: ['./election-management.component.css']
})
export class ElectionManagementComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onNavigateTo(path: string) {
    this.router.navigate([path], {relativeTo: this.route});
  }

}
