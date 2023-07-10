import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private api :UserService) {}

  ngOnInit(): void {
    this.api.reloadUser()
  }

  LoginUser(data: any) {
    this.api.login(data)
  }


}
