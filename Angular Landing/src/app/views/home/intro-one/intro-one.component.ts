import { Component, OnInit,Inject } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
// import {BookingComponent,DialogOverviewExampleDialog} from '../../../booking/booking.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData{
  animal: string;
  name: string;
}

// @Component({
//   selector:'dialog-overview-example',
//   templateUrl: './intro-one.component.html',
//   styleUrls:['./intro-one.component.scss'],
// })
// export class DialogOverviewExample {







// ;
//   }

// }
@Component({
  selector: 'app-intro',
  templateUrl: './intro-one.component.html',
  styleUrls:['./intro-one.component.scss'],
})
export class IntroOneComponent {

<<<<<<< HEAD
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
=======
  constructor(private router: Router) { }

  ngOnInit() {
  }
  bookEvent()  {
    this.router.navigate(['/booking']);
    console.log("This is being called");
>>>>>>> 0d45142bfad42be39ffb3666c82b3809bd8d4adb
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
