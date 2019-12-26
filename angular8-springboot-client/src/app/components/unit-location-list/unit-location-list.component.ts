import { Component, OnInit } from '@angular/core';
import { UnitLocations } from 'src/app/classes/unit-locations';
import { Observable } from 'rxjs';
import { UnitLocationsService } from 'src/app/services/unit-locations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-location-list',
  templateUrl: './unit-location-list.component.html',
  styleUrls: ['./unit-location-list.component.css']
})
export class UnitLocationListComponent implements OnInit {

  unitList:Observable<UnitLocations[]>;
  constructor(

    private unitService : UnitLocationsService,
    private router : Router

  ) { }

  ngOnInit() {

    this.reLoadUnits();
  }
  reLoadUnits() {
    this.unitList = this.unitService.getAlUnitsList();
  }

}
