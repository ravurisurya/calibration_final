import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Instrument } from 'src/app/classes/instrument';
import { InstrumentService } from 'src/app/services/instrument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {

  instrument:Observable<Instrument[]>;


  constructor(private instService:InstrumentService,
    private router:Router) { }

  ngOnInit() {
    this.reLoadData();
  }
  reLoadData() {
   this.instrument = this.instService.getEmployeesinstrumentList();
  }

}
