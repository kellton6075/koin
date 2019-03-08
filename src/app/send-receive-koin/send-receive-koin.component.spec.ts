import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReceiveKoinComponent } from './send-receive-koin.component';

describe('SendReceiveKoinComponent', () => {
  let component: SendReceiveKoinComponent;
  let fixture: ComponentFixture<SendReceiveKoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendReceiveKoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendReceiveKoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
