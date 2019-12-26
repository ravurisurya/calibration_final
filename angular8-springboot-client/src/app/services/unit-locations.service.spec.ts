import { TestBed } from '@angular/core/testing';

import { UnitLocationsService } from './unit-locations.service';

describe('UnitLocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitLocationsService = TestBed.get(UnitLocationsService);
    expect(service).toBeTruthy();
  });
});
