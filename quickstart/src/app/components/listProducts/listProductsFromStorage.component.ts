/**
 * Created by admin on 09/05/2017.
 */
/**
 * Created by admin on 07/05/2017.
 */
import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../modules/product";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'list-products-from-storage',
  templateUrl: './listProductsFromStorage.component.html',
})
export class ListProductFromStorageComponent  {
  name = 'ListProduct';

  products: Product[];

  search: String;
  constructor(private productsService: ProductService, private router: Router,  private route: ActivatedRoute){
    this.route.params.switchMap((params: Params)=> productsService.getProductFromStorage(+params['id'])).subscribe(response=>this.products=response);
    this.search="";
  }

  addProduct(){
    this.router.navigate(['/addProduct']);
  }

  deleteProduct(id: number){
    this.productsService.deleteProductFromStorage(id).subscribe(response=>console.log("deleted"));
  }

  isSub(name: String){
    if(name.indexOf(this.search.toLowerCase())>=0)
      return false;
    return true;
  }
}
