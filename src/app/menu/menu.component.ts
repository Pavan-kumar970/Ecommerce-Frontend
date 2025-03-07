import { Component, OnInit } from '@angular/core';
import { RestaurantService,MenuItem } from '../restaurant/restaurant.service';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.menu = this.restaurantService.getMenu();
  }

  addToCart(item: MenuItem) {
    this.restaurantService.addToCart(item);
    alert(`${item.name} added to cart!`);
  }
}
