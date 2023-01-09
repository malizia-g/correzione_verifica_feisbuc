import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GenereAnimeComponent } from '../genere-anime/genere-anime.component';

@Component({
  selector: 'app-risultato-anime',
  templateUrl: './risultato-anime.component.html',
  styleUrls: ['./risultato-anime.component.css']
})
export class RisultatoAnimeComponent implements OnInit{
  url: string = "https://3000-navarette-otakupeak-bld71qfg52t.ws-eu81.gitpod.io/RisultatoAnime";
  genere!: any;
  vettoreScelte! : any
  constructor(private route: ActivatedRoute, public http : HttpClient){
    this.get(this.url);
  }
  

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 

      this.vettoreScelte =  params['scelta'];
      })
      for (let i = 0; i < this.vettoreScelte.length; i++) {
        this.url = this.url + '?scelta=' + this.vettoreScelte[i]
      }}
      
  
 
  get(url: string): void {
    this.http.get(url).subscribe(data => {
      this.genere = data;
      console.log(data);
    });
  }

}
