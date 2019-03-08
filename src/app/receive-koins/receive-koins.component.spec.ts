import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveKoinsComponent } from './receive-koins.component';

describe('ReceiveKoinsComponent', () => {
  let component: ReceiveKoinsComponent;
  let fixture: ComponentFixture<ReceiveKoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveKoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveKoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
