import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  userLogin=(data:any)=>
  {
    return this.http.post("http://localhost:8080/userLogin",data)
  }
  addEmployee = (data:any) =>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }
  getEmployee = ()=>{
    return this.http.get("http://localhost:8080/getEmployee")
  }

  searchEmployee = (data:any)=>{
    console.log(data)
    return this.http.post("http://localhost:8080/searchEmployee", data)
  }

  addTask = (data:any)=>{
    return this.http.post("http://localhost:8080/addTask", data)
  }
  viewTask = ()=>{
    return this.http.get("http://localhost:8080/viewAllTask")
  }

  searchTask = (data:any)=>{
    return this.http.post("http://localhost:8080/searchTask",data)
  }

  viewEmpTask = (data:any)=>{
    return this.http.post("http://localhost:8080/viewTask", data)
  }

  updateStatus = (data:any)=>{
    return this.http.post("http://localhost:8080/updateStatus", data)
  }
}
