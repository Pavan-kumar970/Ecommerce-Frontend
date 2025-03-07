import { Component, OnInit } from '@angular/core';
import { RestaurantService,MenuItem } from '../restaurant/restaurant.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cart: MenuItem[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.cart = this.restaurantService.getCart();
  }

  clearCart() {
    this.restaurantService.clearCart();
    this.cart = [];
  }
}
