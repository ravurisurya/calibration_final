import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { UnitLocationsComponent } from './components/unit-locations/unit-locations.component';
import { UnitLocationListComponent } from './components/unit-location-list/unit-location-list.component';
import { AddInstrumentComponent } from './components/add-instrument/add-instrument.component';
import { InstrumentListComponent } from './components/instrument-list/instrument-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'addRole', component:CreateRoleComponent},
  { path: 'roles', component:RoleListComponent},
  { path: 'addNewUnit', component:UnitLocationsComponent},
  { path: 'unitList', component:UnitLocationListComponent},
  { path: 'addNewInstrument', component:AddInstrumentComponent},
  { path: 'instrumentList', component:InstrumentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
