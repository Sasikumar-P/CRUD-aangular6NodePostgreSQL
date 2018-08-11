import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './components/index';



@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = ' http://localhost:8080';

  constructor(private http: HttpClient) { }

  addAdUnit(firtstname, lastname, age) {
    const obj = {
      firtstname: firtstname,
      lastname: lastname,
      age: age
    };

    console.log(obj);
    this.http.post(`${this.uri}/api/customers`, obj)
        .subscribe(res => console.log('Done'));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}/api/customers`);
    }

  editAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/api/customers/${id}`);
    }

  updateAdUnit(firtstname, lastname,age, id) {

      const obj = {
        firtstname: firtstname,
        lastname: lastname,
        age: age,
        id:id
      };
      this
        .http
        .put(`${this.uri}/api/customers/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

  deleteAdUnit(id) {
      return this
                .http
                .delete(`${this.uri}/api/customers/${id}`);
  }

}
