import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  name=""
  constructor(private api:ApiService, private route:Router){
    api.getEmployee().subscribe(
      (response:any)=>{ 
        this.loading = false
        this.employeeData = response
      }
    )
  }

  searchEmployee = ()=>{
    let data:any = {
      "empName":this.name
    }
    if (this.name.length == 0) {
      this.searchData = []
    } else {
      this.api.searchEmployee(data).subscribe(
        (response: any) => {
          if (response.length == 0) {
            this.searchData = []
          } else {
            this.searchData = response
          }
        }
      )
    }
  
  }

  addTask = (id:any)=>{
    this.route.navigate(["/addTask"],{state: {data:{userId:id}}})
  }

  employeeData:any = []
  searchData:any = []
  loading: boolean = true

}
