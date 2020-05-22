import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDComponent } from './tabla-d.component';

describe('TablaDComponent', () => {
  let component: TablaDComponent;
  let fixture: ComponentFixture<TablaDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
