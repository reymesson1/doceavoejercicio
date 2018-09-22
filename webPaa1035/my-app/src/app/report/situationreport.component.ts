import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { RestSourceData } from 'src/app/model/rest.datasource';


@Component({
  selector: 'situationreport',
  templateUrl: './situationreport.component.html',
  styleUrls: ['./situationreport.component.scss']
})
export class SituationReportComponent {
  title = 'my-app';
  toggle : boolean = false;

  @ViewChild('content') content:ElementRef;

  constructor(private data:RestSourceData) { }

  ngOnInit() {
    this.data.getReportSituation();
    console.log(this.data.reportsituation);
  }

  public captureScreen()
  {
    this.toggle = !this.toggle;
    var data = document.getElementById('convert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf')
    });

  }

}