import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificaAnimeComponent } from './specifica-anime.component';

describe('SpecificaAnimeComponent', () => {
  let component: SpecificaAnimeComponent;
  let fixture: ComponentFixture<SpecificaAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificaAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificaAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
