import { Component } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

@Component({
  selector: 'app-carousel-item',
  imports: [TarjetaComponent],
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css'
})
export class CarouselItemComponent {

}
