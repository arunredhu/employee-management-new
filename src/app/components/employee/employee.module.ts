import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path : 'employee-form', component : EmployeeFormComponent},
      {path : 'employee-form/:id', component : EmployeeFormComponent},
    ])
  ]
})
export class EmployeeModule { }
