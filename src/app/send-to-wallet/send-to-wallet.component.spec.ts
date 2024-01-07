import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToWalletComponent } from './send-to-wallet.component';

describe('SendToWalletComponent', () => {
  let component: SendToWalletComponent;
  let fixture: ComponentFixture<SendToWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendToWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendToWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
