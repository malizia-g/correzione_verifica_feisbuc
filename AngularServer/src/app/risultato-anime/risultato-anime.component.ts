import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,Input} from '@angular/core';
import { Observable } from 'rxjs';
import { GenereAnimeComponent } from '../genere-anime/genere-anime.component';

@Component({
  selector: 'app-risultato-anime',
  templateUrl: './risultato-anime.component.html',
  styleUrls: ['./risultato-anime.component.css']
})
export class RisultatoAnimeComponent implements OnInit{
//generi : Observable<nome[]> = undefined!

constructor(public http: HttpClient){

}

  ngOnInit(): void {
    //this.generi = this.http.get<nome[]>('https://3000-navarette-otakupeak-359qbn0r6ct.ws-eu78.gitpod.io/genereAnime')
    
  }

}
