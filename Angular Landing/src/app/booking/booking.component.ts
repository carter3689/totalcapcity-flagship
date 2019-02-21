// import { Component, OnInit,Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// @Component({
//   selector: 'app-booking',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.scss']
// })
// export class BookingComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
// }

// export interface DialogData {
//   animal: string;
//   name: string;
// }

// @Component({
//   selector: 'app-intro',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.scss']
// })
// export class DialogOverviewExample implements OnInit {

//   ngOnInit() {
//   }

//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

 

// }

// @Component({
//   selector: 'app-intro',
//   templateUrl: './booking.component.html',
//   styleUrls: ['./booking.component.scss']
// })
// export class DialogOverviewExampleDialog implements OnInit {

//   ngOnInit() {
//   }

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

