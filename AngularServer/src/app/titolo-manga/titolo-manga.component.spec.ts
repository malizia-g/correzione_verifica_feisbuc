import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoloMangaComponent } from './titolo-manga.component';

describe('TitoloMangaComponent', () => {
  let component: TitoloMangaComponent;
  let fixture: ComponentFixture<TitoloMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitoloMangaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitoloMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
