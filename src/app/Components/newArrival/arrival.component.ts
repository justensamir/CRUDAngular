import { Iproduct } from '../iproduct';
import { newProducts } from './../modules/products';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent {
  title: string = 'New Arrival'
  products: Iproduct[] = newProducts
}
