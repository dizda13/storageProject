/**
 * Created by admin on 30/04/2017.
 */
import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent  {

  constructor(private router: Router){
  }

  navHome(){
    this.router.navigate(['/home'])
  }

  navAbout(){
    this.router.navigate(['/about'])
  }

  navList(){
    this.router.navigate(['/listProduct'])
  }
}
