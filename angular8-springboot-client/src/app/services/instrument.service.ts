import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  private baseUrl = "http://localhost:8080/springboot-crud-rest/api/v1/instruments";
  constructor(private http:HttpClient,
    private router:Router) { }

    createInstrument(instrument:object): Observable<Object>{
      return this.http.post(`${this.baseUrl}/newInstrument`, instrument);
    }
  
    getEmployeesinstrumentList(): Observable<any> {
      return this.http.get(`${this.baseUrl}/instrumentList`);
    }  


}
