import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIDFromRoute = +routeParams.get("productID");

    this.product = products.find(
      (product) => product.id === productIDFromRoute
    );
  }
}
