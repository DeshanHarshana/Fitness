import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BodyDetails } from 'src/app/model/BodyDetails';
import { DataService } from 'src/app/services/data.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  profile_link="";
  Name=""
  private loading;
  public bmicolor="";
  public state:String="";
  backdropVisible=false;
  constructor(
   private toastController:ToastController,
   private dataService:DataService,
   public loadingController: LoadingController,
   private router:Router
  ) { }

   ngOnInit () {

     this.dataService.getProfileBodyDetails().subscribe(data=>{
      this.slider=Number(data.height),
      this.weight=Number(data.weight),
      this.age=Number(data.age),
      this.Name=data.displayName,
      this.profile_link=data.profile_link

    }

    )

  }
  Logout(){
    localStorage.removeItem('login')
    localStorage.removeItem('uid')
    localStorage.removeItem('currentUserDoc')
    localStorage.removeItem('planDuration')
    localStorage.removeItem('plan1_init_time')
    localStorage.removeItem('timeDuration')
    this.router.navigate(['/'])
  }
  loadingOverlay(){
    this.loadingController.create({
      message:"Uploading"
    }).then((overlay)=>{
this.loading=overlay;
this.loading.present();
    });
  }
  toggleBackdrop(isVisible){

  }
  ngDoCheck(){
    const value=(Number(this.weight)/(Number(this.slider)*Number(this.slider)))*10000;
    this.BMI=Math.round(value * 10 ) / 10;
    this.bmicolor=this.selectBmiColor(this.BMI);
    localStorage.setItem('currentFirebaseImage', this.profile_link)
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
this.dataService.setProfileBodyDetails(this.slider, this.weight).then(x=>{
  this.openToast("Save Successfull");
})


}



}
