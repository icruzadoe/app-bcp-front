import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateAmountComponent } from './exchange-rate-amount.component';

describe('ExchangeRateAmountComponent', () => {
  let component: ExchangeRateAmountComponent;
  let fixture: ComponentFixture<ExchangeRateAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRateAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
