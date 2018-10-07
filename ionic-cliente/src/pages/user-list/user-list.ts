import { UsersProvider } from './../../providers/users/users';
import 'rxjs/add/operator/retry';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from './../../app/user';


/**
 * Lista os clientes cadastrados
 * Podendo fazer o CRUD dos clientes
 */
@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage implements OnInit {
  users: any[];
  MyCliente: User[] = [];
  MySingleCliente: User = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastController, private userProvider: UsersProvider  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getAllUsers();
  }

  /**retorna todos clientes, utilizando nosso servico
   * no subscribe injetamos o resultado do GET no nosso array interno
   * para popular a lista de cliente
   */
  getAllUsers() {
    console.log("getAllUsers")
    this.userProvider.getAll().subscribe(data =>{
        this.MyCliente = data;
      },
      err =>{
        this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + err, position: 'botton', duration: 3000 }).present();
        console.log(err);
      });
  }

  /**ao clicar no + app redireciona para tela de cadastrado de usuario */
  openCreateAccount(){
    this.navCtrl.push('CreateAccountPage');
  }

  /**
   * com a lista preenchida
   * ao clicar em um cliente
   * o app redireciona para tela de dados
   * exibindo os dados do cliente selecionado anteriormente
   * @param id
   */
  openUser(id: string) {
    console.log("openUser")
    if(id || id.trim() != '') {
      this.userProvider.get(id)
        .subscribe(data => {
            this.MySingleCliente = data;
            this.navCtrl.push('UserDetailPage', {MySingleCliente: this.MySingleCliente});
          },
          err => {
            console.log(err);
            this.toast.create({message: "Erro ao recuperar usuario. Erro: " + err, position: 'botton', duration: 3000})
          });
    }else{
      this.toast.create({message: "Erro ao recuperar usuario. Erro: Campo em Branco", position: 'botton', duration: 3000})
    }
  }

  /**
   * com a lista preenchida
   * ao clicar em um cliente
   * e arrastarmos para direita e clicarmos na opcao EDITAR
   * o app redireciona para a tela de alteracao
   * @param id
   */
  openEditUser(id: string) {
    console.log("openEdit")
    this.userProvider.get(id)
      .subscribe(data =>{
          this.MySingleCliente = data;

          this.navCtrl.push('UserEditPage', {MySingleCliente: this.MySingleCliente});
        },
        err =>{
          console.log(err);
          this.toast.create({message:"Erro ao recuperar usuario. Erro: " + err, position: 'botton',duration: 3000})
        });
  }

  /**
   * com a lista preenchida  ao clicar em um cliente e arrastarmos para direita e clicarmos na opcao EXCLUIR
   * o app deleta o cliente
   * @param id
   */
  deleteUser(user: any) {
    console.log("deleteUser")
    this.userProvider.remove(user.id)
      .then(data =>{
          if (data == true) {
            let index = this.MyCliente.indexOf(user);
            this.MyCliente.splice(index, 1);
            this.toast.create({ message: 'Usuário excluído com sucesso.', position: 'botton', duration: 3000 }).present();
          }
        },
        err =>{
          console.log(err);
          this.toast.create({ message: 'Erro ao excluir o usuário. Erro: ' + err.error, position: 'botton', duration: 3000 }).present();
        });
  }
}
