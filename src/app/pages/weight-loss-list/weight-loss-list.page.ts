import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weight-loss-list',
  templateUrl: './weight-loss-list.page.html',
  styleUrls: ['./weight-loss-list.page.scss'],
})
export class WeightLossListPage implements OnInit {

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
    if(value==1){
      this.router.navigate(['playground/'+value]);
    }
    if(value==2){
      this.router.navigate(['playground/'+value]);
    }
    if(value==3){
      this.router.navigate(['playground/'+value]);
    }
  }

}
