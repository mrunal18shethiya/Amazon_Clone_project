import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartprodcutComponent } from './cartprodcut.component';

describe('CartprodcutComponent', () => {
  let component: CartprodcutComponent;
  let fixture: ComponentFixture<CartprodcutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartprodcutComponent]
    });
    fixture = TestBed.createComponent(CartprodcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
