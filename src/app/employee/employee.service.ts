import { Injectable } from '@angular/core';
import { IEmployee } from './employee-interface';

@Injectable({
    providedIn : 'root'
})

export class EmployeeService{
    listEmployees : IEmployee[] = 
        [
          {
            employeeID: 1,
            employeeFirstName: 'Aaron',
            employeeLastName: 'Orozco',
            employeeAge: 24,
            employeeGender: 'Female',
            designation: 'Associate',
            employeePhoneNumber: 12345678,
          },
          {
            employeeID: 2,
            employeeFirstName: 'Kirk',
            employeeLastName: 'Jones',
            employeeAge: 22,
            employeeGender: 'Male',
            designation: 'Trainee',
            employeePhoneNumber: 12345678,
          },
          {
            employeeID: 3,
            employeeFirstName: 'Martin',
            employeeAge: 28,
            employeeGender: 'Male',
            designation: 'Lead',
            employeePhoneNumber: 12345678,
          },
          {
            employeeID: 4,
            employeeFirstName: 'Rob',
            employeeLastName: 'Heaston',
            employeeAge: 32,
            employeeGender: 'Female',
            designation: 'Manager',
          },
        ];

    getEmployees() : IEmployee[]{
      return this.listEmployees;
    } 
    
    getEmp(id : number) : IEmployee{
      return this.listEmployees.find(item => item.employeeID === id);
    } 

    saveEmployee(saveEmp: IEmployee){
      if(saveEmp.employeeID === null){
        const maxid = this.listEmployees.reduce(function(e1,e2){
          return (e1.employeeID > e2.employeeID) ? e1 : e2;
        }).employeeID;
        saveEmp.employeeID = maxid + 1;
        console.log(saveEmp);
        this.listEmployees.push(Object.assign({}, saveEmp));
      }else{
       const foundIndex =  this.listEmployees.findIndex(e => e.employeeID === saveEmp.employeeID);
       this.listEmployees[foundIndex] = Object.assign({}, saveEmp);
      }
      
    }
}