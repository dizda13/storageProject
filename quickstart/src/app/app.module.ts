import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent }  from './app.component';
import { Sidebar } from './components/sidebar/sidebar.component';
import { WareHouseComponent } from './components/warehouse-card/warehouse-card.component';
import { StorageService } from './services/storage.service';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { Routing } from "./app.routing";
import { AddProduct } from "./components/addProduct/addProduct.component";
import { MainComponent } from "./main.component";
import { ListProductComponent }  from "./components/listProducts/listProducts.component"
import { ProductService } from "./services/product.service"
import {EditStorage} from "./components/editStorage/editStorage.component";
import {AddStorage} from "./components/addStorage/addStorage.component";
import {EditProduct} from "./components/editProduct/editProduct.component";
import {ListProductFromStorageComponent} from "./components/listProducts/listProductsFromStorage.component";
import {AddProductStorage} from "./components/addProductToStorage/addProdutToStorage.component";


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    Sidebar,
    WareHouseComponent,
    MainComponent, AddProduct,
    ListProductComponent,
    EditStorage,
    AddStorage,
    EditProduct,
    ListProductFromStorageComponent,
    AddProductStorage,
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    StorageService,
    ProductService,
  ]
})
export class AppModule { }
