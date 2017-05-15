/**
 * Created by admin on 08/05/2017.
 */
/**
 * Created by admin on 07/05/2017.
 */
import { Component } from '@angular/core';
import { ProductService } from "../../services/product.service";
import {Product} from "../../modules/product";
import 'rxjs/add/operator/switchMap';
import {Params, ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'edit-product',
  templateUrl: './editProduct.component.html',
})
export class EditProduct  {

  newProduct: Product;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router){
    this.newProduct=new Product();
    this.route.params.switchMap((params: Params)=>productService.getProduct(+params['id'])).subscribe(response=>this.newProduct=response);
  }

  addProduct(){
    this.productService.editProduct(this.newProduct).subscribe(response=>{console.log(response.name); this.router.navigate(['/listProduct'])});
  }
}
