import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificaMangaComponent } from './specifica-manga.component';

describe('SpecificaMangaComponent', () => {
  let component: SpecificaMangaComponent;
  let fixture: ComponentFixture<SpecificaMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificaMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificaMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
