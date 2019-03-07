import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee-interface';
import { EmployeeService } from '../../shared/employee.service';



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

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
      this._router.navigate(['employee'])
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
