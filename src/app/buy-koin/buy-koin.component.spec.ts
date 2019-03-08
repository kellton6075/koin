import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyKoinComponent } from './buy-koin.component';

describe('BuyKoinComponent', () => {
  let component: BuyKoinComponent;
  let fixture: ComponentFixture<BuyKoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyKoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyKoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
