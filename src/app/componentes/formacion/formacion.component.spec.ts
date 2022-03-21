import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionComponent } from './formacion.component';

describe('FormacionComponent', () => {
  let component: FormacionComponent;
  let fixture: ComponentFixture<FormacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
