import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-genere-manga',
  templateUrl: './genere-manga.component.html',
  styleUrls: ['./genere-manga.component.css']
})
export class GenereMangaComponent {
  nome! : any;
  url: string = "https://3000-navarette-otakupeak-qzl8w1pceq9.ws-eu79.gitpod.io/genereManga";
  
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
