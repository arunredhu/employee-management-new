import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path : 'add-employee', component : AddEmployeeComponent},
  {path : 'add-employee/:id', component : AddEmployeeComponent},
  {path : 'home' , component : EmployeeComponent},
  {path : '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
