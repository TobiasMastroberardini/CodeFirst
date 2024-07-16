import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingWebComponent } from './pricing-web.component';

describe('PricingWebComponent', () => {
  let component: PricingWebComponent;
  let fixture: ComponentFixture<PricingWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
