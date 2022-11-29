import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereRegisterComponent } from './genere-register.component';

describe('GenereRegisterComponent', () => {
  let component: GenereRegisterComponent;
  let fixture: ComponentFixture<GenereRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenereRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenereRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
