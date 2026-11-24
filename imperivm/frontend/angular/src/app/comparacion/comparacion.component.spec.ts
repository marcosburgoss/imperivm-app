import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionComponent } from './comparacion.component';

describe('ComparacionComponent', () => {
  let component: ComparacionComponent;
  let fixture: ComponentFixture<ComparacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparacionComponent]
    });
    fixture = TestBed.createComponent(ComparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
