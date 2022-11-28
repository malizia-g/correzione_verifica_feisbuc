import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereMangaComponent } from './genere-manga.component';

describe('GenereMangaComponent', () => {
  let component: GenereMangaComponent;
  let fixture: ComponentFixture<GenereMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenereMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenereMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
