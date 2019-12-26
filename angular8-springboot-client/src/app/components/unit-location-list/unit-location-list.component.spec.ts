import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitLocationListComponent } from './unit-location-list.component';

describe('UnitLocationListComponent', () => {
  let component: UnitLocationListComponent;
  let fixture: ComponentFixture<UnitLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
