import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { LupuloService } from './services/lupulo.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LupuloLosCastanos';

  
  constructor( public InfoPaginaService: InfoPaginaService,
               public LupuloService: LupuloService,
               public ProductosService: ProductosService) {

  }
}
