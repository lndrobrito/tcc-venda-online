import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
 Generated class for the ClienteProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class ClienteProvider {

  private API_URL = 'https://fast-tor-38780.herokuapp.com/'

  constructor(public http: HttpClient) {
    console.log('Hello ClienteProvider Provider');
  }
  getAll(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'cliente/?per_page=10&page=' + page;

      this.http.get(url)
        .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'greeting/';

      this.http.get(url)
        .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }

  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'cliente/';

      this.http.post(url, user)
        .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }

  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'cliente/' + user.id;
      let data = {
        "first_name": user.first_name,
        "last_name": user.last_name
      }

      this.http.put(url, user)
        .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'cliente/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }
}
