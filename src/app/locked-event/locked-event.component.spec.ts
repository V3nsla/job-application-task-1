import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedEventComponent } from './locked-event.component';

describe('LockedEventComponent', () => {
  let component: LockedEventComponent;
  let fixture: ComponentFixture<LockedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
