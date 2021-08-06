import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-yogaplan',
  templateUrl: './yogaplan.page.html',
  styleUrls: ['./yogaplan.page.scss'],
})
export class YogaplanPage implements OnInit {


  constructor(
    private router:Router,
    private location:Location
  ) { }

  ngOnInit() {
  }
  gobackPlans(){
    this.location.back();
      }
  GoPlan(value){
    if(value==4){
      this.router.navigate(['playground/'+value]);
    }
    if(value==5){
      this.router.navigate(['playground/'+value]);
    }
    if(value==6){
      this.router.navigate(['playground/'+value]);
    }
  }


}
