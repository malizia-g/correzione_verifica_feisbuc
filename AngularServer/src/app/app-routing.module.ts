import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitoloAnimeComponent } from './titolo-anime/titolo-anime.component';
import { TitoloMangaComponent } from './titolo-manga/titolo-manga.component';
import { SceltaComponent } from './scelta/scelta.component';
import { TipoRicercaAnimeComponent } from './tipo-ricerca-anime/tipo-ricerca-anime.component';
import { TipoRicercaMangaComponent } from './tipo-ricerca-manga/tipo-ricerca-manga.component';
import { RisultatoAnimeComponent } from './risultato-anime/risultato-anime.component';
import { RisultatoMangaComponent } from './risultato-manga/risultato-manga.component';
import { GenereAnimeComponent } from './genere-anime/genere-anime.component';
import { GenereMangaComponent } from './genere-manga/genere-manga.component';
GenereMangaComponent
export const routes: Routes = [
  { path: 'titolo-anime', component: TitoloAnimeComponent },
  { path: 'titolo-manga', component: TitoloMangaComponent },
  { path: 'scelta', component: SceltaComponent },
  { path: 'TipoRicercaAnimeComponent', component: TipoRicercaAnimeComponent },
  { path: 'TipoRicercaMangaComponent', component: TipoRicercaMangaComponent },
  { path: 'RisultatoAnimeComponent', component: RisultatoAnimeComponent },
  { path: 'RisultatoMangaComponent', component: RisultatoMangaComponent },
  { path: 'GenereAnimeComponent', component: GenereAnimeComponent },
  { path: 'GenereMangaComponent', component: GenereMangaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
