import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './shared/employee.service';
import { Employee } from 'src/app/models/employee-interface';

@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees : Employee[];

  filteredEmployee : Employee[];

  _listFilter : string;
  get listFilter() : string{
      return this._listFilter;
  }
  set listFilter(value : string){
      this._listFilter = value;
      this.filteredEmployee = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.filteredEmployee = this.employees;
  }

  onDeleteClick(empId : number){
    if(confirm('Are you sure to delete')){
      console.log(empId);
      this.employees.splice(this.employees.findIndex(item => item.employeeId === empId ), 1);
    }
  }

  performFilter(filterBy : string) : Employee[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.employees.filter((employee : Employee) =>
              employee.employeeFirstName.toLocaleLowerCase().indexOf(filterBy) !== -1 || 
              (employee.employeeLastName !== undefined && 
                employee.employeeLastName.toLocaleLowerCase().indexOf(filterBy) !== -1));
  }

}
