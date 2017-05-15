/**
 * Created by admin on 03/05/2017.
 */
import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Storage } from "../../modules/storage";

@Component({
  selector: 'sidebar',
  templateUrl: `./sidebar.component.html`,
})
export class Sidebar  {
  name = 'Sidebar';
  storages: Storage[];

  constructor(private storageService: StorageService){
    storageService.getStorages().subscribe(response=>this.storages=response);
  }


}
