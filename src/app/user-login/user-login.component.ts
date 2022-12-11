import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private api: ApiService, private route: Router) { }
  username = ""
  password = ""
  readValues = () => {
    let values: any = {
      "username": this.username,
      "password": this.password
    }
    this.api.userLogin(values).subscribe(
      (response:any) => {
        if (response.status == "success") {
          localStorage.setItem('userInfo', response.userId)
          this.username = ""
          this.password = ""
          alert("Login Success ")
          this.route.navigate(["/userLogin"])
        } else {
          alert("check your user name and password again")
        }

      }
    )
  }

}
