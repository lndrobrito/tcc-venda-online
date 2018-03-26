import { Component } from '@angular/core';
import { ClienteProvider } from './../../providers/cliente/cliente'
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the EditaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-cliente',
  templateUrl: 'edita-cliente.html',
})
export class EditaClientePage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: ClienteProvider ) {
    if (this.navParams.data.user) {
      this.model = this.navParams.data.user;
    } else {
      this.model = new User();
    }
  }

  save() {
    this.saveUser()
      .then(() => {
        this.toast.create({ message: 'Usuário salvo com sucesso.', position: 'botton', duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      })
  }

  private saveUser() {
    if (this.model.id) {
      return this.userProvider.update(this.model);
    } else {
      return this.userProvider.insert(this.model);
    }
  }

}

export class User {
  id: number;
  first_name: string;
  last_name: string;
}
