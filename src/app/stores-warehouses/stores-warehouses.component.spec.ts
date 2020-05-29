import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresWarehousesComponent } from './stores-warehouses.component';

describe('StoresWarehousesComponent', () => {
  let component: StoresWarehousesComponent;
  let fixture: ComponentFixture<StoresWarehousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresWarehousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
