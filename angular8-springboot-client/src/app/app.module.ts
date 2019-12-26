import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatBadgeModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,  
  MatCardModule,
  MatPaginatorModule, 
  MatProgressSpinnerModule,
  MatSortModule} from '@angular/material';

import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { UnitLocationsComponent } from './components/unit-locations/unit-locations.component';
import { UnitLocationListComponent } from './components/unit-location-list/unit-location-list.component';
import { InstrumentComponent } from './components/instrument/instrument.component';
import { AddInstrumentComponent } from './components/add-instrument/add-instrument.component';
import { InstrumentListComponent } from './components/instrument-list/instrument-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CreateRoleComponent,
    RoleListComponent,
    UnitLocationsComponent,
    UnitLocationListComponent,
    InstrumentComponent,
    AddInstrumentComponent,
    InstrumentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    DatePickerModule,
    MatDatepickerModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    DatePickerModule,
    MatDatepickerModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
