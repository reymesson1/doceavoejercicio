import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/app/model/rest.datasource';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private dataRef : RestSourceData) {}
    
  masterData = {};

  onNoClick(): void {
    this.dataRef.postMessage(this.masterData);
    this.dialogRef.close();
  }


}