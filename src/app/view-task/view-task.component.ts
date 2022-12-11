import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  name=""
  constructor(private api:ApiService){
    api.viewTask().subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.taskData = response
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
      this.api.searchTask(data).subscribe(
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

  taskData:any = []
  searchData:any = []
  loading:boolean = true
}
