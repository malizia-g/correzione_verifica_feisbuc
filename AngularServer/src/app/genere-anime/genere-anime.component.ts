import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-genere-anime',
  templateUrl: './genere-anime.component.html',
  styleUrls: ['./genere-anime.component.css']
})
export class GenereAnimeComponent {
  nome! : any;
  loading!: Boolean;
  url: string = "https://3000-navarette-otakupeak-5osswp70dyu.ws-eu77.gitpod.io/genereAnime";
  constructor(public http : HttpClient){
    this.get(this.url);
  }
  get(url: string): void {
    this.loading = true;
    this.http.get(url).subscribe(data => {
      this.nome = data;
      this.loading = false;
    });
  }
}
