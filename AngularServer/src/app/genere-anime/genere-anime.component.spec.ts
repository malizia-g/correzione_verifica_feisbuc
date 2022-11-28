import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereAnimeComponent } from './genere-anime.component';

describe('GenereAnimeComponent', () => {
  let component: GenereAnimeComponent;
  let fixture: ComponentFixture<GenereAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenereAnimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenereAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
