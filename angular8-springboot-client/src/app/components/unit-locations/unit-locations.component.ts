import { Component, OnInit } from '@angular/core';
import { UnitLocations } from 'src/app/classes/unit-locations';
import { UnitLocationsService } from 'src/app/services/unit-locations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-locations',
  templateUrl: './unit-locations.component.html',
  styleUrls: ['./unit-locations.component.css']
})
export class UnitLocationsComponent implements OnInit {

  unitLocation : UnitLocations = new UnitLocations();
  submitted = false;



  constructor(
    private unitLocationService : UnitLocationsService,
    private router : Router
  ) { }

  ngOnInit() {
  }
  
  newUnitLocation() : void{
    this.submitted = false;
    this.unitLocation = new UnitLocations();
  }

  onSubmit(){

    this.submitted = true;
    this.save();

  }
  save() {
    this.unitLocationService.createNewUnit(this.unitLocation)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.unitLocation = new UnitLocations();
    this.goToList();
  }
  goToList() {
    this.router.navigate(['/unitList']);
  }

  

}
