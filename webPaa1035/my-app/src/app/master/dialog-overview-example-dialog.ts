import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/app/model/rest.datasource';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'modal',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  nextDay: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataRef : RestSourceData) {
      this.nextDay = new Date();
    }
    
  masterData = {}; 

  onNoClick(): void {
    this.masterData["position"] = this.nextDay.getTime();
    this.masterData["date"] = this.nextDay.toLocaleDateString() + " " + this.nextDay.toLocaleTimeString();
    this.dataRef.postMessage(this.masterData);
    this.dialogRef.close();
  }


}