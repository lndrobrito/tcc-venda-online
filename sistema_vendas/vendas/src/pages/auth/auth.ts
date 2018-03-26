/**
 * Created by user-note on 16/03/2018.
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})

export class AuthPage {

  authForm: FormGroup;

  constructor(public nav: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.nav = nav;

    this.authForm = formBuilder.group({
      username: ['', Validators.email],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onSubmit(value: any): void {
    if(this.authForm.valid) {
      window.localStorage.setItem('username', value.username);
      window.localStorage.setItem('password', value.password);

      this.nav.push(HomePage);
    }
  }
}
