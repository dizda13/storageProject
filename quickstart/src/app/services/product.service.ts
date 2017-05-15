import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Product} from "../modules/product";
/**
 * Created by admin on 07/05/2017.
 */

@Injectable()
export class ProductService {

  product: Product;

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8761/products').map(response=><Product[]>response.json()._embedded.products);

  }

  getProduct(id: number): Observable<Product>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8761/products/'+id).map(response=><Product>response.json());

  }

  getProductFromStorage(id: number): Observable<Product[]>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8761/storage/'+id+"/products").map(response=><Product[]>response.json()._embedded.storages);

  }

  addProduct(product: Product): Observable<Product>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8761/products', JSON.stringify(product), options).map(response=><Product>response.json());
  }

  addProductToStorage(product: Product, storageId: number): Observable<Product>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8761/addProductToStorage/'+storageId, JSON.stringify(product), options).map(response=><Product>response.json());
  }

  editProduct(product: Product): Observable<Product>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:8761/products/'+ product.id, JSON.stringify(product), options).map(response=><Product>response.json());
  }

  deleteProduct(id: number){
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:8761/products/'+ id, options).map(response=>console.log(response.status));
  }

  deleteProductFromStorage(id: number){
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:8761/productStorageBridges/'+ id, options).map(response=>console.log(response.status));
  }
}
