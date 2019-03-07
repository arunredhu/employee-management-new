import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee-interface';

@Injectable({
    providedIn : 'root'
})

export class EmployeeService{
    listEmployees : Employee[] = 
        [
          {
            employeeId: 1,
            employeeFirstName: 'Aaron',
            employeeLastName: 'Orozco',
            employeeAge: 24,
            employeeGender: 'Female',
            designation: 'Associate',
            employeePhoneNumber: 12345678,
          },
          {
            employeeId: 2,
            employeeFirstName: 'Kirk',
            employeeLastName: 'Jones',
            employeeAge: 22,
            employeeGender: 'Male',
            designation: 'Trainee',
            employeePhoneNumber: 12345678,
          },
          {
            employeeId: 3,
            employeeFirstName: 'Martin',
            employeeAge: 28,
            employeeGender: 'Male',
            designation: 'Lead',
            employeePhoneNumber: 12345678,
          },
          {
            employeeId: 4,
            employeeFirstName: 'Rob',
            employeeLastName: 'Heaston',
            employeeAge: 32,
            employeeGender: 'Female',
            designation: 'Manager',
          },
        ];

    getEmployees() : Employee[]{
      return this.listEmployees;
    } 
    
    getEmployee(id : number) : Employee{
      return this.listEmployees.find(item => item.employeeId === id);
    } 

    saveEmployee(emp: Employee){
      if(emp.employeeId === null){
        const maxid = this.listEmployees.reduce(function(e1,e2){
          return (e1.employeeId > e2.employeeId) ? e1 : e2;
        }).employeeId;
        emp.employeeId = maxid + 1;
        console.log(emp);
        this.listEmployees.push(Object.assign({}, emp));
      }else{
       const foundIndex =  this.listEmployees.findIndex(e => e.employeeId === emp.employeeId);
       this.listEmployees[foundIndex] = Object.assign({}, emp);
      }
      
    }
}