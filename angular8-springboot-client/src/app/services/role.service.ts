import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/role';

  constructor(private http:HttpClient) { }

  createRole(role:object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/employeeroles`, role);
  }

  getEmployeesRoleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/emproles`);
  }

}
