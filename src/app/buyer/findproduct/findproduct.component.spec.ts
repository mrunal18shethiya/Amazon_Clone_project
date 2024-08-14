import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindproductComponent } from './findproduct.component';

describe('FindproductComponent', () => {
  let component: FindproductComponent;
  let fixture: ComponentFixture<FindproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindproductComponent]
    });
    fixture = TestBed.createComponent(FindproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
