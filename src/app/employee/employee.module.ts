import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path : 'add-employee', component : AddEmployeeComponent},
      {path : 'add-employee/:id', component : AddEmployeeComponent},
    ])
  ]
})
export class EmployeeModule { }
