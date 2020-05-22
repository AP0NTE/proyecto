import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEComponent } from './tabla-e.component';

describe('TablaEComponent', () => {
  let component: TablaEComponent;
  let fixture: ComponentFixture<TablaEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
