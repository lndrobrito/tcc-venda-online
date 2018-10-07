import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from './../../app/user';


@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  myCliente: User= {};

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider:UsersProvider ) {


  }

  /**
   * enviamos ao endpoint os dados para insercao
   * @returns boolean e tratamos
   */
  createUser(){
    this.userProvider.insert(
      this.myCliente.cpf,this.myCliente.nome,this.myCliente.endereco,
      this.myCliente.estado,this.myCliente.municipio,this.myCliente.telefone,this.myCliente.email,
      this.myCliente.password
    )
      .subscribe(data =>{


          if (data == true) {
            this.toast.create({message:"Cliente inserido com sucesso", position: 'botton',duration: 3000}).present();
            this.navCtrl.push('UserListPage');
          }else {
            this.toast.create({message:"Não foi possivel inserir  tente novamente", position: 'botton',duration: 3000}).present();
          }
        },
        err =>{
          console.log(err);
          this.toast.create({message:"Erro ao inserir cliente .Erro: " + err, position: 'botton',duration: 3000}).present();
        });
  }
}

