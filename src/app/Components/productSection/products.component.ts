import { ProductService } from 'src/app/services/product.service';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private service: ProductService){}
  products: any
  title: string = 'Our Shope'
  ngOnInit(): void {
    this.service.getAllProducts().subscribe({
      next: (response) => {
        this.products = response
      },
      error:(err) => console.error(err.statusText)
    })
  }
}
