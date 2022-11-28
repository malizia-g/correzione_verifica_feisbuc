import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisultatoAnimeComponent } from './risultato-anime.component';

describe('RisultatoAnimeComponent', () => {
  let component: RisultatoAnimeComponent;
  let fixture: ComponentFixture<RisultatoAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisultatoAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisultatoAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
