import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-genere-manga',
  templateUrl: './genere-manga.component.html',
  styleUrls: ['./genere-manga.component.css']
})
export class GenereMangaComponent {
  nome! : any;
  url: string = "https://3000-navarette-otakupeak-aj90371zsrg.ws-eu82.gitpod.io/GenereManga";
  
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
  click(event: any) {
    event.preventDefault();
    let scelta = this.nome.filter((g: { checked: boolean; }) => g.checked == true)
    window.location.href = "/RisultatoManga?scelta=" + scelta.map((g: {nome: String}) => g.nome).join(",")
  }
  update(n: any, event: any) {
    this.nome[this.nome.indexOf(n)].checked = event.target.checked;
  }
}
