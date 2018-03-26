import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExibeClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exibe-cliente',
  templateUrl: 'exibe-cliente.html',
})
export class ExibeClientePage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.data.user;
  }

}
