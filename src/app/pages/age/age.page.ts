import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit{
age:String
@ViewChild('nameRef') nameElementRef:ElementRef
  constructor(private dataService:DataService) { }


  ngOnInit() {
  }
  setAge(){
    this.dataService.Age(this.age);
  }
}
