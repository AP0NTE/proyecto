import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDComponent } from './editar-d.component';

describe('EditarDComponent', () => {
  let component: EditarDComponent;
  let fixture: ComponentFixture<EditarDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
