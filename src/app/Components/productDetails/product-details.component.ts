import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit{
  productId: number = 0
  product: any
  api: any
  constructor(private activatedRoute: ActivatedRoute,private service:ProductService){}

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.api = this.service.getProductByID(this.productId).subscribe({
      next: (response)=>{
        this.product = response;
        console.log(response)
      },
      error: (err) => {
        console.error(err)
      }});
  }

}
