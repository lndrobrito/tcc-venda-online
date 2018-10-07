import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './../../app/user';


/**
 * Exibe os dados do cliente
 */
@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  MySingleCliente: User = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.MySingleCliente = navParams.get('MySingleCliente');
  }

}
