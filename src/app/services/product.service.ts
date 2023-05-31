import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  dataUrl: string = 'http://localhost:3000/Products'
  constructor(private http:HttpClient) {}

  getAllProducts(){
    return this.http.get(this.dataUrl);
  }

  getProductByID(productId:any){
    return this.http.get(`${this.dataUrl}/${productId}`);
  }

  deleteProduct(productId: any){
    return this.http.delete(`${this.dataUrl}/${productId}`)
  }

  addProduct(product: any){
    return this.http.post(this.dataUrl, product);
  }

  editProduct(productId:any, product:any){
    return this.http.put(`${this.dataUrl}/${productId}`,product);
  }

}
