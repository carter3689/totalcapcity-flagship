import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {BookingComponent} from './booking/booking.component';



@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor( private router: Router ) { }

  booking(){
    this.router.navigate(['booking'])
  }

  ngOnInit() {
    
  }
  
}
