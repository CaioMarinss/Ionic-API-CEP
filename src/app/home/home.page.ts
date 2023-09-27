import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  cepUser: any;
  cep: any;


  constructor(private http: HttpClient) {}

  Consultar() {
    this.cep = this.http.get(`https://viacep.com.br/ws/${this.cepUser}/json/`).subscribe(
      (data) =>{
        this.cep = data
      }
    )
  }
}
