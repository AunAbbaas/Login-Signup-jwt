import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http : HttpClient,private router : Router) { }

  login(data:any){
    this.http.post('http://34.16.130.20:5000/user/signup',data,{observe:'response'}).subscribe((res)=>{
      if(res){
        this.isSellerLoggedIn.next(true)
        localStorage.setItem('user',JSON.stringify(res.body))
        this.router.navigate(['dashboard'])
      }
    })
  }

  registernew(data:any):Observable<any>{
    return this.http.post('http://34.16.130.20:5000/user/signup',data)
  }

  reloadUser(){
    if(localStorage.getItem('user')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['dashboard'])
    }
    else{
      this.isSellerLoggedIn.next(false)
    }
  }
}
