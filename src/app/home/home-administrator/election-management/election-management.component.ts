import { Component, OnInit, NgModule } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-election-management',
  templateUrl: './election-management.component.html',
  styleUrls: ['./election-management.component.css']
})
export class ElectionManagementComponent implements OnInit {
  constructor(private _fb: FormBuilder) { }

  electionFormGroup: FormGroup;
  officeFormGroup: FormGroup;

  ngOnInit() {
    this.electionFormGroup = this._fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.officeFormGroup = this._fb.group({
      secondCtrl: ['', Validators.required]
    });
  }

  initRace() {
    // initialize our address
    return this._fb.group({
      office: ['', Validators.required],
      description: ['', Validators.required],
      // add list of candidates
      // candidates: this._fb.array([
      //  this.initCandidate()
      // ])
    });
  }

  addRace() {
    // add address to the list
    const control = <FormArray>this.officeFormGroup.controls['races'];
    control.push(this.initRace());
  }

  removeRace(i: number) {
    // remove address from the list
    const control = <FormArray>this.officeFormGroup.controls['races'];
    control.removeAt(i);
  }

  /* initCandidate() {
    return this._fb.group({
      name: ['', Validators.required],
      party: ['', Validators.required]
    });
  }

  addCandidate() {
    const control = <FormArray>this.myForm.controls['candidates'];
    control.push(this.initCandidate());
  }

  removeCandidate(i: number) {
    const control = <FormArray>this.myForm.controls['candidates'];
    control.removeAt(i);
  }*/

}
