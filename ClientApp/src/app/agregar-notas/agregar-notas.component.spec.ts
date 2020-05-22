import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNotasComponent } from './agregar-notas.component';

describe('AgregarNotasComponent', () => {
  let component: AgregarNotasComponent;
  let fixture: ComponentFixture<AgregarNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
