/**
 * Created by admin on 05/05/2017.
 */
import { Injectable } from '@angular/core';
import { Storage } from "../modules/storage";
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class StorageService {

  constructor(private http: Http) { }

  getStorages(): Observable<Storage[]>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8761/storages').map(response=><Storage[]>response.json()._embedded.storages);

  }

  getStorage(id: number): Observable<Storage>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8761/storages/' + id, options).map(response=><Storage>response.json());

  }

  addStorage(storage: Storage): Observable<Storage>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8761/storages', JSON.stringify(storage), options).map(response=><Storage>response.json());
  }

  editStorage(storage: Storage): Observable<Storage>{
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:8761/storages/' + storage.id, JSON.stringify(storage), options).map(response=><Storage>response.json());
  }

  deleteStorage(id: number){
    let headers = new Headers({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:8761/storages/' + id, options).map(response=>console.log(response.status));

  }
}
