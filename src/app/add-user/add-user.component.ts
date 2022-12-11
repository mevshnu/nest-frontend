import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private api:ApiService){}
  empCode=""
  empName=""
  empEmail=""
  empPhone=""
  empDesignation=""
  username=""
  password=""

  readValues = ()=>{
    let data:any = {
      "empCode": this.empCode,
      "empName": this.empName,
      "empEmail": this.empEmail,
      "empPhone": this.empPhone,
      "empDesignation": this.empDesignation,
      "username": this.username,
      "password": this.password
   }
   this.api.addEmployee(data).subscribe(
    (response:any)=>{
      if(response.status=="success"){
        alert("Employee Added Successfully")
      }else{
        alert("Error in adding employee")
      }
    }
   )
  }

}
