import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
<header>
    <navbar></navbar>
    <sidebar></sidebar>
  </header>
  <router-outlet></router-outlet>
`,
})
export class AppComponent  { name = 'Angular'; }
