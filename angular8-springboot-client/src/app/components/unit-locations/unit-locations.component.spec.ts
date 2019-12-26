import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitLocationsComponent } from './unit-locations.component';

describe('UnitLocationsComponent', () => {
  let component: UnitLocationsComponent;
  let fixture: ComponentFixture<UnitLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
