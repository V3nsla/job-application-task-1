import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonedEventComponent } from './milestoned-event.component';

describe('MilestonedEventComponent', () => {
  let component: MilestonedEventComponent;
  let fixture: ComponentFixture<MilestonedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MilestonedEventComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
