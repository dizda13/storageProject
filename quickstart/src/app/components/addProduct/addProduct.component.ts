/**
 * Created by admin on 07/05/2017.
 */
import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";
import {Product} from "../../modules/product";
import {Router} from "@angular/router";

@Component({
  selector: 'addProduct',
  templateUrl: './addProduct.component.html',
})
export class AddProduct  {
  name = 'Navbar';
  newProduct: Product;
  constructor(private productService: ProductService,private router: Router){
    this.newProduct=new Product();
  }

  addProduct(){
    this.productService.addProduct(this.newProduct).subscribe(response=>{console.log(response.name), this.router.navigate(['/listProduct'])});
  }
}
