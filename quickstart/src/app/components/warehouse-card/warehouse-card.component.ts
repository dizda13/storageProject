/**
 * Created by admin on 05/05/2017.
 */
import { Component } from '@angular/core';
import { StorageService } from "../../services/storage.service";
import { Storage } from "../../modules/storage";
import {Router} from "@angular/router";

@Component({
  selector: 'warehouse-card',
  templateUrl: './warehouse-card.component.html',
})
export class WareHouseComponent  {

  name = 'WareHouse';
  storages: Storage[];
  search: String;
  constructor(private storageService: StorageService, private router: Router){
    storageService.getStorages().subscribe(response=>this.storages=response);
    this.search="";
  }

  addProductRedirect(id: number){
    this.router.navigate(['/addProductToStorage/'+id]);
  }

  listProductRedirect(id: number){
    this.router.navigate(['/listProductFromStorage/'+id]);
  }

  editStorage(id: number){
    this.router.navigate(['/editStorage/'+id]);
  }

  addStorage(){
    this.router.navigate(['/addStorage']);
  }

  deleteStorage(id: number){
    this.storageService.deleteStorage(id).subscribe(response=>this.storageService.getStorages().subscribe(response=>this.storages=response));
  }

  isSub(name: String){
    if(name.indexOf(this.search.toLowerCase())>=0)
      return false;
    return true;
  }

}
