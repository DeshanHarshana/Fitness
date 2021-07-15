import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bodydetails',
  templateUrl: './bodydetails.page.html',
  styleUrls: ['./bodydetails.page.scss'],
})
export class BodydetailsPage implements OnInit {
height:String;
weight:String;
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
  }
details(){
this.dataService.setBodyDetails(this.height, this.weight);
}
}
