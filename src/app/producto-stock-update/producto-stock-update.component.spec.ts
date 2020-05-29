import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoStockUpdateComponent } from './producto-stock-update.component';

describe('ProductoStockUpdateComponent', () => {
  let component: ProductoStockUpdateComponent;
  let fixture: ComponentFixture<ProductoStockUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoStockUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoStockUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
