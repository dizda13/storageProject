/**
 * Created by admin on 07/05/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { AddProduct } from "./components/addProduct/addProduct.component";
import { MainComponent } from "./main.component";
import { ListProductComponent }  from "./components/listProducts/listProducts.component"
import {EditStorage} from "./components/editStorage/editStorage.component";
import {AddStorage} from "./components/addStorage/addStorage.component";
import {EditProduct} from "./components/editProduct/editProduct.component";
import {ListProductFromStorageComponent} from "./components/listProducts/listProductsFromStorage.component";
import {AddProductStorage} from "./components/addProductToStorage/addProdutToStorage.component";

const appRoutes: Routes = [
  { path: 'addProduct', component: AddProduct },
  { path: 'addProductToStorage/:id', component: AddProductStorage },
  { path: 'home', component: MainComponent },
  { path: 'listProduct', component: ListProductComponent },
  { path: 'listProductFromStorage/:id', component: ListProductFromStorageComponent },
  { path: 'editStorage/:id', component: EditStorage },
  { path: 'addStorage', component: AddStorage },
  { path: 'editProduct/:id', component: EditProduct },
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const Routing = RouterModule.forRoot(appRoutes);
