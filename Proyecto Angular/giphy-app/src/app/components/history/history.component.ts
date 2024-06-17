import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output() historialActivo = new EventEmitter<string[]>()
  gifs:string[] = []

  search(busqueda:string){
    this.gifsService.searchGifs(busqueda).subscribe((res)=>{
      this.gifs = res.data.map((gif: { embed_url: string; }) => ({
        embed_url: this.sanitizer.bypassSecurityTrustResourceUrl(gif.embed_url)
      }));
      console.log(this.gifs);
      this.historialActivo.emit(this.gifs)
    });
  }

  delete(eleccion:string){
    this.gifsService.deleteHistorial(eleccion);
  }
}
