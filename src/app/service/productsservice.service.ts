import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsserviceService {

  constructor(private http : HttpClient) { }


  getproducts(){
    return this.http.get('http://34.16.130.20:5000/products')
  }

  addNewProduct(data:any){
   return this.http.post('http://34.16.130.20:5000/products',data)
  }

  deleteProduct(id : any){
    return this.http.delete('http://34.16.130.20:5000/products/'+id)
  }

  prefillUpdate(id:any){
    return this.http.get('http://34.16.130.20:5000/products/'+id)
  }
}
