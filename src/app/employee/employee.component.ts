import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee-interface';
import { EmployeeService } from './employee.service';

@Component({
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : IEmployee[];

  filteredEmployee : IEmployee[];

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
      this.employees.splice(this.employees.findIndex(item => item.employeeID === empId ), 1);
    }
  }

  performFilter(filterBy : string) : IEmployee[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.employees.filter((employee : IEmployee) =>
              employee.employeeFirstName.toLocaleLowerCase().indexOf(filterBy) !== -1 || 
              (employee.employeeLastName !== undefined && 
                employee.employeeLastName.toLocaleLowerCase().indexOf(filterBy) !== -1));
  }

}
