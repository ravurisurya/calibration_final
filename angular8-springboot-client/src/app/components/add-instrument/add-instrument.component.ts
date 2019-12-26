import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/classes/instrument';
import { InstrumentService } from 'src/app/services/instrument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.css']
})
export class AddInstrumentComponent implements OnInit {

  instrument:Instrument = new Instrument();
  isSubmitted = false;

  constructor(private instService: InstrumentService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  newInstrument():void{
    this.isSubmitted = false;
    this.instrument = new Instrument();
  }

  onSubmit(){
    this.isSubmitted = true;
    this.save();
  }
  save() {
    this.instService.createInstrument(this.instrument).subscribe(
      data => console.log(data),
      err => console.log(err)
    );

    this.instrument = new Instrument();
    this.goToList();
  }
  goToList() {
    this.router.navigate(['/instrumentList']);
  }






  
}
