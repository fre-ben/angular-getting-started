import { Injectable } from "@angular/core";
import type { Product, ShippingPrice } from "./products";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<ShippingPrice[]>("assets/shipping.json");
  }

  constructor(private http: HttpClient) {}
}
