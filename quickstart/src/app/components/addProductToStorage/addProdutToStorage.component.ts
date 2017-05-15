/**
 * Created by admin on 09/05/2017.
 */
import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";
import {Product} from "../../modules/product";
import {Params, ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'addProductToStorage',
  templateUrl: './addProductToStorage.component.html',
})
export class AddProductStorage  {
  name = 'Navbar';
  newProduct: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute){
    this.newProduct=new Product();
  }

  addProductToStorage(){

    this.route.params.switchMap((params: Params)=>this.productService.addProductToStorage(this.newProduct,+params['id']) ).subscribe(response=>this.newProduct=response);
  }
}
