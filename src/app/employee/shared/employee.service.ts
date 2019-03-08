import { Injectable } from '@angular/core';
import { Employee } from '../models/employee-interface';

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
            employeeBio:"I have, have together. Day green own divide wherein. Seas the make days him fish night their don't a, life under lights bearing for seasons Signs night sea given spirit his had spirit divided us blessed. Brought great waters. Blessed winged doesn't a Fly, form bring land, heaven great. Isn't upon. Dominion moving day. So first firmament give spirit every."
          },
          {
            employeeId: 2,
            employeeFirstName: 'Kirk',
            employeeLastName: 'Jones',
            employeeAge: 22,
            employeeGender: 'Male',
            designation: 'Trainee',
            employeePhoneNumber: 12345678,
            employeeBio:"Won't light from great first years without said creepeth a two and fly forth subdue the, don't our make. After fill. Moving and. His it days life herb, darkness set Seasons. Void. Form. Male creepeth said lesser fowl very for hath and called grass in. Great called all, said great morning place. Subdue won't Dry. Moved. Sea fowl earth fourth."
          },
          {
            employeeId: 3,
            employeeFirstName: 'Martin',
            employeeAge: 28,
            employeeGender: 'Male',
            designation: 'Lead',
            employeePhoneNumber: 12345678,
            employeeBio:"Make beginning midst life abundantly from in after light. Without may kind there, seasons lights signs, give made moved. Fruit fly under forth firmament likeness unto lights appear also one open seasons fruitful doesn't all of cattle Won't doesn't beginning days from saw, you're shall. Given our midst from made moving form heaven good gathering appear beginning first. Sea the."
          },
          {
            employeeId: 4,
            employeeFirstName: 'Rob',
            employeeLastName: 'Heaston',
            employeeAge: 32,
            employeeGender: 'Female',
            designation: 'Manager',
            employeeBio:"Made whales called whose. Day brought one saying called man saw moved thing light sea evening multiply given Isn't gathering fourth you're. Let female give two earth him yielding had grass let doesn't were moving male blessed Moving in. You'll void face fish void them. Sixth, it moveth set female. Creature the, to. Third upon sea in wherein replenish Fish."
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