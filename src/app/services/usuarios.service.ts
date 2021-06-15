import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {

  }
  async getusers() {
    let users = await this.http.get("./assets/mydata.json");
    return users;
  }
}
