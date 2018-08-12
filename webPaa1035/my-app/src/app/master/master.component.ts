import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewExampleDialog } from "./dialog-overview-example-dialog";
import { RestSourceData } from 'src/app/model/rest.datasource';
import { DataSource } from '@angular/cdk/collections';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {
  title = 'my-app';  
  displayedColumns: string[] = ['position', 'date','name', 'weight', 'symbol','actions'];
  animal: string;
  name: string;
  totalCredit;
  totalDebit;

  constructor(public dialog: MatDialog, private data: RestSourceData) {}

  ngOnInit(){    
    this.data.getMessage();
    this.data.getDashboard();
    setTimeout(() => {
      this.totalCredit = this.data.dashboard[0].total;
      this.totalDebit = this.data.dashboard[1].total;
    }, 1000);
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}