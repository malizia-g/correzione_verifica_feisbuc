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
  url: string = "https://3000-ghebr0us-otakupeak-4a2vsftxhxu.ws-eu82.gitpod.io/RisultatoAnime";
  genere!: any;
  vettoreScelte! : any
  constructor(private route: ActivatedRoute, public http : HttpClient){
    
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 

      this.vettoreScelte =  params['scelta'];
      console.log(this.vettoreScelte)
      this.url = this.url + "?scelta=" + this.vettoreScelte
      this.get(this.url);
      })
      // for (let i = 0; i < this.vettoreScelte.length; i++) {
      //   let s = i == 0 ? "?" : "&";
      //   this.url = this.url + s +'scelta=' + this.vettoreScelte[i]
      // }
    }
      
  
 
  get(url: string): void {
    this.http.get(url).subscribe(data => {
      this.genere = data;
      console.log(data);
    });
  }

}
