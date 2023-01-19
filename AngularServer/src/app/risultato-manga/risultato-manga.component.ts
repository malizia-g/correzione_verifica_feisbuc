import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-risultato-manga',
  templateUrl: './risultato-manga.component.html',
  styleUrls: ['./risultato-manga.component.css']
})
export class RisultatoMangaComponent {
  url: string = "https://3000-ghebr0us-otakupeak-029z2in9ttu.ws-eu83.gitpod.io/RisultatoManga";
  generim!: any;
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
    
    }
      
  get(url: string): void {
    this.http.get(url).subscribe(data => {
      this.generim = data;
      console.log(data);
    });
  }

}
