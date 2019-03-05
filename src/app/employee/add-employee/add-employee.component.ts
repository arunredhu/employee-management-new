import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee-interface';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  addEmployee : boolean = false;
  emp: Employee = {
    employeeId: null,
    employeeFirstName: null,
    employeeLastName: null,
    employeeAge: null,
    employeeGender: null,
    designation: null,
    employeePhoneNumber: null
  }

  constructor(private route : ActivatedRoute,
              private employeeService : EmployeeService,
              private _router : Router  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id !== 0 ){
        this.addEmployee = !this.addEmployee;
        this.editEmployee(id);
    }
  }

  saveEmployee(){
      // console.log(this.emp);
      this.employeeService.saveEmployee(this.emp);
      this._router.navigate(['home'])
  }

  resetForm(form :any){
      form.reset();
  }

  editEmployee(id : number){
    if(id !== 0 ){
      this.emp = this.employeeService.getEmployee(id);
    }
  }



  

}
