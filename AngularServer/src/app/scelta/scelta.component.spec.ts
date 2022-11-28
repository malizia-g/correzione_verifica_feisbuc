import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceltaComponent } from './scelta.component';

describe('SceltaComponent', () => {
  let component: SceltaComponent;
  let fixture: ComponentFixture<SceltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SceltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
