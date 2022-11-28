import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRicercaAnimeComponent } from './tipo-ricerca-anime.component';

describe('TipoRicercaAnimeComponent', () => {
  let component: TipoRicercaAnimeComponent;
  let fixture: ComponentFixture<TipoRicercaAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoRicercaAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoRicercaAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
