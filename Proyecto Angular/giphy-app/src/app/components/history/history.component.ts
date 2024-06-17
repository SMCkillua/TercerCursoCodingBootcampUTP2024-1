import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  constructor(private gifsService: ApiService, private sanitizer: DomSanitizer){}
  get historiales (){
    return this.gifsService.listaHistorial;
  }
  
  search(busqueda:string){
    this.gifsService.searchGifs(busqueda)
  }
}
