import { Component, OnInit,Inject } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class IntroOneComponent implements OnInit {

  constructor(private _router: Router,public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  bookEvent()  {
    this._router.navigate(['/booking']);
    console.log("This is being called")
  }
  getNGLanding() {
    window.open('');
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class DialogOverviewExample implements OnInit {

  ngOnInit() {
  }

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

 

}

@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls: ['./intro-one.component.scss']
})
export class DialogOverviewExampleDialog implements OnInit {

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


// export class DialogOverviewExampleDialog {
//   constructor (
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData){}

//     onNoClick(): void {
//       this.dialogRef.close();
//     }
// }
