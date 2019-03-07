import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {path : 'add-employee', component : AddEmployeeComponent},
      {path : 'add-employee/:id', component : AddEmployeeComponent},
    ])
  ]
})
export class EmployeeModule { }
