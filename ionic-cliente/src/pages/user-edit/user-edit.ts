import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from './../../app/user';


/**
 * Classe resposavel em tratar a alteracao de um cliente
 */
@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  MySingleCliente: User= {};

  /**
   * Ao entrar na dela de alteracao
   * o app ja pega o id do cliente e carrega os dados no ojb mySingleCliente
   * @param navCtrl
   * @param navParams
   * @param toast
   * @param userProvider
   */
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {

    this.MySingleCliente = navParams.get('MySingleCliente');

  }

  /**
   * atualiza o cliente na base dados via servico (userprovider)
   * @returns boolean e tratamos o retorno
   */
  updateClient() {
    this.userProvider.update(
      this.MySingleCliente.cpf,this.MySingleCliente.nome, this.MySingleCliente.endereco,
      this.MySingleCliente.estado,this.MySingleCliente.municipio,this.MySingleCliente.telefone,
      this.MySingleCliente.email, this.MySingleCliente.password)
      .subscribe(data =>{

          if (data == true) {
            this.toast.create({message:"Cliente atualizado com sucesso", position: 'botton',duration: 3000}).present();
            this.navCtrl.push('UserListPage');
          }else {
            this.toast.create({message:"Não foi possivel atualizar tente novamente", position: 'botton',duration: 3000}).present();
          }
        },
        err =>{
          console.log(err);
          this.toast.create({message:"Erro ao atualizar cliente .Erro: " + err, position: 'botton',duration: 3000}).present();
        });
  }

}

