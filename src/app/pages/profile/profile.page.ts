import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  slider:Number=168;
  weight:Number=65;
  BMI:Number=0;
  public bmicolor="";
  public state:String="";
  constructor() { }

  ngOnInit() {
    const value=(Number(this.weight)/(Number(this.slider)*Number(this.slider)))*10000;
    this.BMI=Math.round(value * 10 ) / 10;
    this.bmicolor=this.selectBmiColor(this.BMI);

  }
  change(){
const value=(Number(this.weight)/(Number(this.slider)*Number(this.slider)))*10000;
this.BMI=Math.round(value * 10 ) / 10;
this.bmicolor=this.selectBmiColor(this.BMI);
  }

  selectBmiColor(bmi){
    if(bmi<16){
      return "less16";
    }
    if(bmi<17 && bmi>=16){
      return "less17";
    }
    if(bmi<18.5 && bmi>=17){
      return "less18-5";
    }
    if(bmi<25 && bmi>=18.5){
      return "less25";
    }
    if(bmi<30 && bmi>=25){
      return "less30";
    }
    if(bmi<35 && bmi>=30){
      return "less35";
    }
    if(bmi<40 && bmi>=35){
      return "less40";
    }
    if(bmi<48 && bmi>=40){
      return "less48";
    }
  }
}
