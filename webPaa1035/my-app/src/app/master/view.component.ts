import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestSourceData } from 'src/app/model/rest.datasource';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  position = 'my-app'; 
  masterData; 

  constructor(private route:ActivatedRoute,private data: RestSourceData){
    this.data.getMessage();
    this.masterData = {"author":"5ae1a7105a926e0f84230d61","date":"8/11/2018 6:06:23 AM","description":"test",
      "position":"1533981983874"};
    console.log(this.data.messages);
  }

  ngOnInit(){
    if(this.data.messages.length>0){

      this.position = this.route.snapshot.params['id'];
      let filteredData = this.data.messages.filter(
        (master) => master.position.indexOf(this.position) !== -1
      );
      this.masterData = filteredData[0];
      console.log(this.position);
    }
  }

  
}