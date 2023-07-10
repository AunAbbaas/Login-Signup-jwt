import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private api : UserService, private router : Router) { }

  ngOnInit(): void {
    this.api.reloadUser()
  }

  AddNewUser(data:any){
    this.api.registernew(data).subscribe((res)=>{
     if(res){
      alert("New User Registerd")
      this.router.navigate(['/'])
     }
    })
  }
}
