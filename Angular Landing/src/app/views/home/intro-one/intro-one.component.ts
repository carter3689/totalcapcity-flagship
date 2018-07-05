import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class IntroOneComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  bookEvent()  {
    this._router.navigate(['booking']);
    console.log("This is being called")
  }
  getNGLanding() {
    window.open('');
  }
}
