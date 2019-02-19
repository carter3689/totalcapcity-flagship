import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInputModule,MatFormFieldModule } from '@angular/material';
// 


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    NgbModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [{ provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },],
  bootstrap: [AppComponent]
})
export class AppModule { }