import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private menu: MenuItem[] = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Pasta', price: 8 },
  ];

  private cart: MenuItem[] = [];

  getMenu() {
    return this.menu;
  }

  addToCart(item: MenuItem) {
    this.cart.push(item);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
