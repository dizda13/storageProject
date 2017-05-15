/**
 * Created by admin on 08/05/2017.
 */
import { Component } from '@angular/core'
import {Storage} from "../../modules/storage";
import {StorageService} from "../../services/storage.service";
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'add-storage',
  templateUrl: './addStorage.component.html'
})

export class AddStorage {
  storage: Storage;
  constructor(private storageService: StorageService, private route: ActivatedRoute, private router: Router){
    this.storage= new Storage();
  }

  addStorage(){
    this.storageService.addStorage(this.storage).subscribe(response=>{console.log(response.name);this.router.navigate(['/home']);});
  }
}
