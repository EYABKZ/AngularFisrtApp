import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementByResidenceComponent } from './appartement-by-residence.component';

describe('AppartementByResidenceComponent', () => {
  let component: AppartementByResidenceComponent;
  let fixture: ComponentFixture<AppartementByResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartementByResidenceComponent]
    });
    fixture = TestBed.createComponent(AppartementByResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
