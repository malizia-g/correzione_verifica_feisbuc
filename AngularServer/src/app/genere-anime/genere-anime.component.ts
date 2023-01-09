import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { genAnime } from './genere-anime.mode';

@Component({
  selector: 'app-genere-anime',
  templateUrl: './genere-anime.component.html',
  styleUrls: ['./genere-anime.component.css']
})
export class GenereAnimeComponent {
  nome! : any;
  url: string = "https://3000-navarette-otakupeak-ij84fp77y4j.ws-eu81.gitpod.io/genereAnime";
  
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
