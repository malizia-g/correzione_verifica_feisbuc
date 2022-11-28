import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisultatoMangaComponent } from './risultato-manga.component';

describe('RisultatoMangaComponent', () => {
  let component: RisultatoMangaComponent;
  let fixture: ComponentFixture<RisultatoMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisultatoMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisultatoMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
