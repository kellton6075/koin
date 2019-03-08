import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendKoinsComponent } from './send-koins.component';

describe('SendKoinsComponent', () => {
  let component: SendKoinsComponent;
  let fixture: ComponentFixture<SendKoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendKoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendKoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
