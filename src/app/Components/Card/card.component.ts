import { Component, Input } from '@angular/core';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: any
}
