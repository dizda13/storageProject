/**
 * Created by admin on 07/05/2017.
 */
import { Component } from '@angular/core'
import {Storage} from "../../modules/storage";
import {StorageService} from "../../services/storage.service";
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'edit-storage',
  templateUrl: './editStorage.component.html'
})

export class EditStorage {
  storage: Storage;
  constructor(private storageService: StorageService, private route: ActivatedRoute){
    this.storage= new Storage();
    this.route.params.switchMap((params: Params)=>storageService.getStorage(+params['id'])).subscribe(response=>this.storage=response);
  }

  editStorage(){
    this.storageService.editStorage(this.storage).subscribe(response=>console.log(response.name));
  }
}
