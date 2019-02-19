import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home-one',
  template: `<app-header></app-header>
  <app-intro></app-intro>
  <dialog-overview-example></dialog-overview-example>
  <app-portfolio></app-portfolio>
  <app-services [backgroundGray]="true"></app-services>
  <app-testimonials-carousel></app-testimonials-carousel>
  <app-cta></app-cta>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`

  /*<app-pricings></app-pricings> -- -- This may be used later -- */
})
export class HomeOneComponent implements OnInit, OnDestroy {
  constructor(
    private fix: LandingFixService
  ) { }

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }
  

}
