import { Injectable } from '@angular/core';
import { Http , Headers  } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from './../../app/user';



@Injectable()
export class UsersProvider {
  private API_URL ='http://localhost:8080/rest/cliente';
  private header: Headers;
  private headers: Headers = new Headers ({'Content-Type' : 'application/json',
    'Accept': 'application/json'})

  constructor(public http: Http) {
    this.header = this.prepareHeader();
  }

  /**
   * metodo envia os parametros ao endpoint via POST
   * @param email
   * @param senha
   * @returns e tradado no obj interceptador
   */
  login(email: string, password: string) {
    console.log("login")

    var data = {
      email: email,
      password: password
    };

    return this.http.post(this.API_URL + '/login', data, {headers:this.headers}).map(response => {
        let token = response.json();
      console.log("token: "+token)
        if (token) {
          return true;
        } else {
          return false;
        }
      }
    )
  }

  /**
   * metodo solicita todos os clientes da base ao endpoint via GET
   * @returns lista de clientes tradado no obj interceptador
   */
  getAll() {
    console.log("getAll");

    let url = this.API_URL + '/todos';

    return this.http.get(url)
      .map(data => {
        data.json();
        return data.json();
      });

  }

  /**
   * metodo solicita um  cliente da base ao endpoint via GET
   * @param nome do cliente
   * @returns o cliente e tratado no obj interceptador
   */
  get(id: any): Observable<User>  {
    console.log("get")

    let url = this.API_URL  + '/search/' + id;

    return this.http.get(url).map(response => {
        let token = response.json();
        console.log("token: "+token)
        if (token) {
          return token;
        } else {
          return false;
        }
      }
    )
  }


  /**
   * metodo cria um usuario e envia o endpoint
   * via POST
   * @returns e tradado no obj interceptador
   */
  createAccount(nome: string,    endereco: string,
                estado: string,    municipio: string,    telefone: string,    email: string,
                senha: string) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL;

      var data ={
        nome: nome,  endereco: endereco,
        estado: estado,  municipio: municipio,  telefone: telefone,  email: email,
        senha: senha
      };

      this.http.post(url, data)
        .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }

  /**
   * Insere um cliente via POST
   * @param cpf
   * @param nome
   * @param endereco
   * @param estado
   * @param municipio
   * @param telefone
   * @param email
   * @param password
   * @returns boolean e tratado no obj interceptador
   */
  insert(cpf: string,  nome: string,    endereco: string,
         estado: string,    municipio: string,    telefone: string,    email: string,
         password: string): Observable<Boolean> {

    let url = this.API_URL;

    return this.http.post(url,{cpf,nome,endereco,estado,municipio,telefone,email,password}).map(response => {
        let token = response.json();
        if (token) {
          return true;
        } else {
          return false;
        }
      }
    )
  }

  /**
   * Atualiza um cliente via PUT
   * o endpoint tratara quais os campos que serao atualizado
   * @param cpf
   * @param nome
   * @param endereco
   * @param estado
   * @param municipio
   * @param telefone
   * @param email
   * @param senha
   * @returns boolean e tratrado no obj interceptador
   */
  update(cpf: string,  nome: string,    endereco: string,
         estado: string,    municipio: string,    telefone: string,    email: string,
         senha: string) {

    let url = this.API_URL;

    return  this.http.put(url,{cpf,nome,endereco,estado,municipio,telefone,email,senha }).map(response => {
        let token = response.json();
        if (token) {
          return true;
        } else {
          return false;
        }
      }
    )
  }

  /**
   * delete um cliente
   * @param cliente
   * @returns boolean e tratrado no obj interceptador
   */
  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL  + '/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }

  /**
   * Prepares a header with the API KEY
   */
  private prepareHeader(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return headers;
  }
}
