/**
 * Created by admin on 07/05/2017.
 */
import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../modules/product";
import {Router} from "@angular/router";

@Component({
  selector: 'list-products',
  templateUrl: './listProducts.component.html',
})
export class ListProductComponent  {
  name = 'ListProduct';

  products: Product[];

  search: String;
  constructor(private productsService: ProductService, private router: Router){
    productsService.getProducts().subscribe(response=>this.products=response);
    this.search="";
  }

  addProduct(){
    this.router.navigate(['/addProduct']);
  }

  deleteProduct(id: number){
    this.productsService.deleteProduct(id).subscribe(response=>console.log("deleted"));
  }

  isSub(name: String){
    if(name.indexOf(this.search.toLowerCase())>=0)
      return false;
    return true;
  }

}
