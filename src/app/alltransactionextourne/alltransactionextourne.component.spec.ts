import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltransactionextourneComponent } from './alltransactionextourne.component';

describe('AlltransactionextourneComponent', () => {
  let component: AlltransactionextourneComponent;
  let fixture: ComponentFixture<AlltransactionextourneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltransactionextourneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltransactionextourneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
