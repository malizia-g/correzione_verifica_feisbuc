import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-genere-anime',
  templateUrl: './genere-anime.component.html',
  styleUrls: ['./genere-anime.component.css']
})
export class GenereAnimeComponent {
  nome! : any;
  url: string = "https://3000-navarette-otakupeak-jsb85a2mfbn.ws-eu78.gitpod.io/genereAnime";
  
  constructor(public http : HttpClient){
    this.get(this.url);
  }
  get(url: string): void {
    this.http.get(url).subscribe(data => {
      this.nome = data;
      console.log(data);
    });
  }
  parse(s: string): string {
    return "genere" + s;
  }
}
