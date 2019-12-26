import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitLocationsService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/office';

  constructor(private http:HttpClient) { }

  createNewUnit(unitLocations:object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/newUnit`, unitLocations);
  }

  getAlUnitsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/unitList`);
  }
}
