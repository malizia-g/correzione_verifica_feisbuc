import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitoloAnimeComponent } from './titolo-anime/titolo-anime.component';
import { SceltaComponent } from './scelta/scelta.component';
import { TipoRicercaAnimeComponent } from './tipo-ricerca-anime/tipo-ricerca-anime.component';
import { TipoRicercaMangaComponent } from './tipo-ricerca-manga/tipo-ricerca-manga.component';
import { GenereAnimeComponent } from './genere-anime/genere-anime.component';
import { GenereMangaComponent } from './genere-manga/genere-manga.component';
import { RisultatoAnimeComponent } from './risultato-anime/risultato-anime.component';
import { RisultatoMangaComponent } from './risultato-manga/risultato-manga.component';
import { AppRoutingModule } from './app-routing.module';
import { TitoloMangaComponent } from './titolo-manga/titolo-manga.component';

@NgModule({
  declarations: [
    AppComponent,
    TitoloAnimeComponent,
    SceltaComponent,
    TipoRicercaAnimeComponent,
    TipoRicercaMangaComponent,
    GenereAnimeComponent,
    GenereMangaComponent,
    RisultatoAnimeComponent,
    RisultatoMangaComponent,
    TitoloMangaComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
