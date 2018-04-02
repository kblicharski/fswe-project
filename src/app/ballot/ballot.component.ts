import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {
  @Input() ballot: any;

  constructor() { }

  ngOnInit() {
  }

  vote() {
    console.log('voted');
  }
}
