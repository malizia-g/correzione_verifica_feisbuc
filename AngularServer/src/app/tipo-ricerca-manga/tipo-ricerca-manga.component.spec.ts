import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRicercaMangaComponent } from './tipo-ricerca-manga.component';

describe('TipoRicercaMangaComponent', () => {
  let component: TipoRicercaMangaComponent;
  let fixture: ComponentFixture<TipoRicercaMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoRicercaMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoRicercaMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
