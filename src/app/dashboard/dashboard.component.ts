import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { UserService } from '../service/user.service';
import { ProductsserviceService } from '../service/productsservice.service';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  prods : any
  prodToUpdt :undefined | any
  fileName = 'Products.xlsx';

  constructor( private router : Router,private api : UserService,private apiPrd : ProductsserviceService) {}

  ngOnInit(): void {
    this.api.reloadUser()
    this.getProds()
  }

  logout(){
    localStorage.removeItem('user')
    this.router.navigate([''])
  }

  getProds(){
    this.apiPrd.getproducts().subscribe((res)=>{
      console.log(res)
      this.prods = res
    })
  }

  PostNewProd(data:any){
    this.apiPrd.addNewProduct(data).subscribe((res)=>{
      if(res){
        this.getProds()
      }
    })
 }

 DelProd(id:any){
    this.apiPrd.deleteProduct(id).subscribe((res)=>{
      if(res){
        this.getProds()
      }
    })
 }

 PrefillUpd(id:any){
  this.apiPrd.prefillUpdate(id).subscribe((res)=>{
    this.prodToUpdt = res
  })
 }

 ExportToExel():void{
  const ws : XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.prods)
  const wb : XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'Sheet1')
  XLSX.writeFile(wb,this.fileName)
 }

}
