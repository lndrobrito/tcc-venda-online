import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from './../../app/user';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  MyCliente: User = { email: "", password: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.MyCliente.email = '';
    this.MyCliente.password = '';
  }

  /**
   * Ao cliente no primeiro acesso
   * app redireciona para tela de cadastro
   */
  openCreateUser(){
    this.navCtrl.push('CreateAccountPage');
  }

  /**
   * Valida dados de acesso
   * @returns boolean e tratamos as mensagens
   */
  login() {
    this.userProvider.login(this.MyCliente.email, this.MyCliente.password)
      .subscribe(data =>{
          console.log(data)
          if (data == true) {
            this.toast.create({message:"Usuário logado com sucesso", position: 'botton',duration: 3000}).present();
            this.navCtrl.push('UserListPage');
          }else {
            this.toast.create({message:"Usuário Invalido tente novamente", position: 'botton',duration: 3000}).present();
          }
        },
        err =>{
          console.log(err);
          this.toast.create({message:"Erro ao efetuar login. Erro: " + err, position: 'botton',duration: 3000}).present();
        });

  }
}

