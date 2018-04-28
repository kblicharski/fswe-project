import {Component, OnInit} from '@angular/core';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private _fb: FormBuilder
  ) {
  }
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

  resetPassword() {
    // this.emailService.resetPassword(this.model.username)
    // TODO: Create an emailService which takes a username as input,
    // extracts the email associated with that username, and sends them an email.
    // This email should have a link to reset the user's password.
    // They then click this dynamically generated link, enter their new password, and it
    // edits their entry in the DB. These should be secure, random links.
    this.loading = true;
    setTimeout(
      () => {
        this.loading = false;
        this.alertService.success('We have sent an email to the address associated with that username.', true);
        this.router.navigate(['/login']);
      }, 500
    );
  }

}
