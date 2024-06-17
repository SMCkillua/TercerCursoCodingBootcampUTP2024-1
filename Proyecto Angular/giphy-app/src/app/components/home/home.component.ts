import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  estadoHistorial: string = '';
  gifsAgrupados: string[] = [];
  desplegarHistorial() {
    this.estadoHistorial = 'noHidden'
  }
  ocultarHistorial(){
    this.estadoHistorial = 'hidden'
  }
}
