import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vie-employee-task',
  templateUrl: './vie-employee-task.component.html',
  styleUrls: ['./vie-employee-task.component.css']
})
export class VieEmployeeTaskComponent {
  constructor(private api:ApiService){
    api.viewEmpTask({"empId":localStorage.getItem("userInfo")}).subscribe(
      (response:any)=>{
        this.loading = false
        this.taskData = response
      }
    )
  }

  markAsComplete = (id:any)=>{
    let data:any = {
      "id":id,
      "taskStatus":true
    }
    this.api.updateStatus(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          alert("Marked as Complete")
          window.location.reload()
        }else{
          alert("Error")
        }
      }
    )
  }
  loading:boolean = true;
  taskData:any = []

}
