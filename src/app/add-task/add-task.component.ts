import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskTitle=""
  taskDescription=""
  empId=""
  constructor(private api:ApiService,private route:Router){
    this.empId = history.state.data.userId
  }

  readValues = ()=>{
    let data:any = {
      "taskTitle":this.taskTitle,
      "taskDescription":this.taskDescription,
      "empId":this.empId
    }

    this.api.addTask(data).subscribe(
      (response:any)=>{
        if(response.status =="success") {
          alert("Successfull")
          this.route.navigate(["/viewEmployee"])
        }else{
          alert("Error")
        }
      }
    )
  }
}
