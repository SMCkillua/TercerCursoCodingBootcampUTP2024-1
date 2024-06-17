import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-grid-gifs',
  templateUrl: './grid-gifs.component.html',
  styleUrls: ['./grid-gifs.component.css']
})
export class GridGifsComponent implements OnInit{
  @Input() gifs?: any[];
  

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer){
  }
  ngOnInit(): void {
      this.gifs = this.apiService.gifs;
  }

  search(){
    const info : any = document.querySelector("#infoInput") as HTMLInputElement;
    const infoText = info.value;
    this.apiService.searchGifs(infoText).subscribe(
      (res) => {
        if(res.data.length == 0){
          return alert("No se encontraron resultados");
        }
        this.apiService.agregarHistorial(infoText)
        this.gifs = res.data.map((gif: { embed_url: string; }) => ({
          embed_url: this.sanitizer.bypassSecurityTrustResourceUrl(gif.embed_url)
        }));
        console.log(this.gifs);
      },
      (error) => {
        console.error('Error fetching gifs:', error);
      }
    );
    
  }

}
