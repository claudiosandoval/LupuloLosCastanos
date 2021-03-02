import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient) { 

    // console.log('Servicio de info pagina listo')
    this.cargarInfo();
  }

  private cargarInfo() {
    //LEER ARCHIVO JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        // console.log(resp);
        this.cargada = true;
        this.info = resp;
        // console.log(resp['instagram']);
      })
  }

  
}