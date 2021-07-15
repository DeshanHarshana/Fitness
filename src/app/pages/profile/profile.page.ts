import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BodyDetails } from 'src/app/model/BodyDetails';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  slider:Number=168;
  weight:Number=65;
  age:Number=0;
  BMI:Number=0;
  Name=""
  public bmicolor="";
  public state:String="";

  constructor(
   private toastController:ToastController,
   private dataService:DataService
  ) { }

   ngOnInit () {

     this.dataService.getProfileBodyDetails().subscribe(data=>{
      this.slider=Number(data.height),
      this.weight=Number(data.weight),
      this.age=Number(data.age),
      this.Name=data.displayName
    }

    )

  }
  ngDoCheck(){
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
      this.state="Severe Thinness";
      return "less16";
    }
    if(bmi<17 && bmi>=16){
      this.state="Moderate Thinness"
      return "less17";
    }
    if(bmi<18.5 && bmi>=17){
      this.state="Mild Thinness"
      return "less18-5";
    }
    if(bmi<25 && bmi>=18.5){
      this.state="Normal"
      return "less25";
    }
    if(bmi<30 && bmi>=25){
      this.state="Overweight"
      return "less30";
    }
    if(bmi<35 && bmi>=30){
      this.state="Obese Class I"
      return "less35";
    }
    if(bmi<40 && bmi>=35){
      this.state="Obese Class II"
      return "less40";
    }
    if(bmi<49 && bmi>=40){
      this.state="Obese Class III	"
      return "less48";
    }
  }
  async openToast(message){
    const toast=await this.toastController.create({
      message: message,
      duration: 800,
      position: 'bottom'
    });
    toast.present();
  }
  save(){
this.dataService.setProfileBodyDetails(this.slider, this.weight);
this.openToast("Save Successfull");

}
}
