import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.page.html',
  styleUrls: ['./dietplan.page.scss'],
})
export class DietplanPage implements OnInit {

  constructor(
    private location:Location,
    private router:Router
  ) { }

  ngOnInit() {
  }
  GoPlan(value){
    if(value==1){
      this.router.navigate(['dietpaln-intermediate/'+value])
      localStorage.setItem("planDuration", "24");
    }
    if(value==2){
      this.router.navigate(['dietpaln-intermediate/'+value])
      localStorage.setItem("planDuration", "32");
    }
    if(value==3){
      this.router.navigate(['dietpaln-intermediate/'+value])
      localStorage.setItem("planDuration", "48");
    }
  }
  gobackPlans(){
    this.location.back();
      }
}
