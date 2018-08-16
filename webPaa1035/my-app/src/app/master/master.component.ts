import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogOverviewExampleDialog } from "./dialog-overview-example-dialog";
import { RestSourceData } from 'src/app/model/rest.datasource';
import { DataSource } from '@angular/cdk/collections';
import {Sort} from '@angular/material';
import { MatSpinner } from '@angular/material';
import {MatSort,MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  title = 'my-app';  
  displayedColumns: string[] = ['position', 'date','name', 'weight', 'symbol','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  animal: string;
  name: string;
  totalCredit;
  totalDebit;
  spinner: boolean = true;
  dataSource;
    
  constructor(public dialog: MatDialog, private data: RestSourceData,private route:Router,) {}
      
    ngOnInit(){ 
    
    this.data.getMessage();
    this.data.getDashboard();
    
    setTimeout(() => {
      this.totalCredit = this.data.dashboard[0].total;
      this.totalDebit = this.data.dashboard[1].total;
      this.dataSource = new MatTableDataSource<any>(this.data.messages);
      this.dataSource.sort = this.sort;  
      this.dataSource.paginator = this.paginator;
    }, 2000);

    setTimeout(() => {
      this.spinner = false;
    }, 2000);


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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}