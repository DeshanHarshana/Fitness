/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  buttonText:string;
  timeDuration:string="0";
  palnsize:number=0;
  hour: number = 0;
  extrahou: string = '0';
  minute: number = 0;
  extramin: string = '0';
  second: number = 0;
  extrasec: string = '0';
  isclicked:boolean=false;
  public count = 0;
  precentage:string;
  precent:number=0;
  transactionTime = 0; //Initial time of timer
  isOnetimeSet:boolean=false;
  isplanRunning:boolean=false;
  initTime=0;
  timeStamp = 0;
  level="Lv. 0";
  stateMsg="You can go to Level 1 after one hour";
  isclickedbutton:boolean=false;
  x:any
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    public alertController: AlertController
  ) {}
  ngOnInit(

  ) {

    if(this.route.snapshot.params.id==1){
      this.palnsize=24;
    }
    if(this.route.snapshot.params.id==2){
      this.palnsize=32;
    }
    if(this.route.snapshot.params.id==3){
      this.palnsize=48;
    }
    console.log(localStorage.getItem('plan1_init_time'));

    this.second=0;
    if((localStorage.getItem('plan1_init_time')==null)){
      clearInterval(this.x);
      this.isclickedbutton=false;
      this.count=0;
      this.initTime=0;
      this.isOnetimeSet=false;
      this.hour=0;
      this.minute=0;
      this.second=0;
      this.extrahou="0";
      this.extramin="0";
      this.extrasec='0';
      this.precent=0;
      this.precentage="0";
      localStorage.removeItem('timeDuration');

      clearInterval(this.x)
      this.isplanRunning=false;
      this.buttonText="START";
    this.buttonText="START";
    this.timeDuration=String(this.palnsize);
    console.log("elsoijjjjjjje");




    }else{

      this.initTime=Number(localStorage.getItem('plan1_init_time'));
      this.timeDuration=localStorage.getItem('timeDuration')
      const seconds=(Math.floor(Date.now() / 1000)-this.initTime);
      this.second = seconds % 60;
      this.hour = seconds / 60;
      this.minute = this.hour % 60;
      this.hour = this.hour / 60;
      this.hour=Number(Math.floor(this.hour));
      this.minute=Number(Math.floor(this.minute));
      this.buttonText="STOP";
      if (this.second < 10) {
        this.extrasec = '0';
      } else {
        this.extrasec = '';
      }
      if (this.minute < 10) {
        this.extramin = '0';
      } else {
        this.extramin = '';
      }
      if (this.hour < 10) {
        this.extrahou = '0';
      } else {
        this.extrahou = '';
      }
      this.isplanRunning=true;
      console.log("test")
      this.test();


    }
  }
  MainMenu(){
    this.router.navigate(['tabs/tab1'])
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'TextSelectable',
      header: 'Fasting Current State',
      subHeader:this.level,
      message: this.stateMsg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  test(){
    if(this.isplanRunning){

      if(this.isclickedbutton==false){
        this.isclickedbutton=true;
        this.x=setInterval(()=>{

          this.buttonText="STOP";
        this.count =(Math.floor(Date.now() / 1000)-this.initTime);
        this.timer();

        },1000);
      }
      else{
        clearInterval(this.x)
        this.isclickedbutton=false;
        this.count=0;
        this.initTime=0;
        this.isOnetimeSet=false;
        this.hour=0;
        this.minute=0;
        this.second=0;
        this.extrahou="0";
        this.extramin="0";
        this.extrasec="0";
        this.precent=0;
        this.precentage="0";
        localStorage.removeItem('timeDuration')
        localStorage.removeItem('plan1_init_time');
        clearInterval(this.x)
        this.isplanRunning=false;
        this.buttonText="START";
      }
    }else{

    if(this.isclickedbutton==false){
      this.isclickedbutton=true;
      this.buttonText="STOP";
      this.x=setInterval(()=>{
        if(this.isOnetimeSet==false){
          this.initTime=Math.floor(Date.now() / 1000);

          localStorage.setItem('timeDuration', String(this.palnsize))
          localStorage.setItem('plan1_init_time', String(this.initTime));
          this.isOnetimeSet=true;
        }


      this.count =(Math.floor(Date.now() / 1000)-this.initTime);
      this.timer();

      },1000);
    }
    else{
      clearInterval(this.x)
      this.isclickedbutton=false;
      this.count=0;
      this.initTime=0;
      this.isOnetimeSet=false;
      this.hour=0;
      this.minute=0;
      this.second=0;
      this.extrahou="0";
      this.extramin="0";
      this.extrasec="0";
      this.precent=0;
      this.precentage="0";
      localStorage.removeItem('timeDuration')
      localStorage.removeItem('plan1_init_time');
      clearInterval(this.x)
      this.buttonText="START";
    }

  }
  }



  timer() {


        this.count++;
        this.calPresentage(this.count,localStorage.getItem('timeDuration'));
        if(this.hour>0 && this.hour<=2){
          this.level="Lv. 1";
          this.stateMsg="You'll feel pretty normal during the first hours of fasting because your body is going through the regular process of breaking down glycogen. Your blood sugar rises. Your pancreas releases insulin to break down glucose for energy and stores the extra glucose for later."

        }
        if(this.hour>2 && this.hour<=8){
          this.level="Lv. 2";
          this.stateMsg="As a result of the effects of insulin, your blood sugar decreases to near normal aft spiking. And it typically doesn't continue climbing because insulin is immediately delivered into your circulatory system afte eating."
        }
        if(this.hour>8 && this.hour<=13){
          this.level="Lv. 3";
          this.stateMsg="At this stage, your blood sugar level returns to normal. Feeling hungry? Your stomach is reminding you that it's been a while since your last meal; however, you're not actually that hungry. Starve to death? Shrivel up and lose your muscle mass? None of this is going to happen. Actually, your glycogen reserves will begin to fall, and you might even lose a little body fat. Your body will continue to digest your last food intake. It starts to use stored glucose for energy, and continues to function as if you'll eat again soon."
        }
        if(this.hour>13 && this.hour<=17){
          this.level="Lv. 4";
          this.stateMsg="13 hours after your last meal, your liver will use up the last of its glucose reserves. Now your body goes into a state called gluconeogenesis, which indicates that your body has switched into the fasting mode. Studies show that gluconeogenesis, a metabolic pathway, results in the generation of glucose from body fat instead of carbohydrates. It increases your calorie burning."
        }
        if(this.hour>17 && this.hour<=24){
          this.level="Lv. 5";
          this.stateMsg="Your glycogen reserves are running out! As a result, you may become irritable or hangry. Just relax, it's a sign that your body is burning fat! With little glycogen left, fat cells (adipocyte) will release fat into your bloodstream. They also go straight into your liver and are converted into energy for your body. Actually, you are cheating your body into burning fat in order to survive."
        }
        if(this.hour>24 && this.hour<=28){
          this.level="Lv. 6";
          this.stateMsg="Now it's the turn of fat to fuel your body. You're in the metabolic state called ketosis. The glycogen is almost used up and your liver converts fat into ketone bodies - an alternative energy source for your body. Fat reserves are readily released and consumed. For this reason, ketosis is sometimes referred to as the body's 'fat-burning' mode. Ketosis produces fewer inflammatory by-products, so it provides health benefits to your heart, metabolism and brain."
        }
        if(this.hour>28 && this.hour<=32){
          this.level="Lv. 7";
          this.stateMsg="The longer you fast, the deeper into ketosis you'll go. By 18 hours, your body has switched into fat-burning mode. Research shows that after fasting for 12 to 24 hours, the energy supply from fat will increase by 60%, and it has a significant increase after 18 hours. Now: 1. The level of ketone bodies rises. 2. Ketones act as signaling molecules to tell your body how to better regulate its metabolism in a stressful environment. 3. Your body's anti-inflammatory and rejuvenation processes are ready to work."
        }
        if(this.hour>32 && this.hour<=48){
          this.level="Lv. 8";
          this.stateMsg="At this point, your body triggers autophagy (literally means 'self-devouring'). Cells start to clean up their house. They remove unnecessary or dysfunctional components. It's a good thing because it allows the orderly degradation and recycling of cellular components. During autophagy, cells break down viruses, bacteria and damaged components. In this process, you get the energy to make new cell parts. It's significant for cell's health, renewal, and survival. The main benefit of autophagy is best known as the body turning the clock back and creating younger cells."
        }
        if(this.hour>=this.palnsize){



          localStorage.removeItem('planDuration')
          console.log('clear')
          clearInterval(this.x)
          this.isclickedbutton=false;
          this.count=0;
          this.initTime=0;
          this.isOnetimeSet=false;
          this.hour=0;
          this.minute=0;
          this.second=0;
          this.extrahou="0";
          this.extramin="0";
          this.extrasec="0";
          this.precent=0;
          this.precentage="0";
          localStorage.removeItem('timeDuration')
          localStorage.removeItem('plan1_init_time');
          localStorage.removeItem('plansize');
          localStorage.removeItem('planDuration');
          this.isplanRunning=false;
          clearInterval(this.x)
          this.buttonText="START";
          console.log(localStorage.getItem('plan1_init_time') + " dsd");
          this.router.navigateByUrl('/success')

        }
        this.second++;
        if (this.second < 10) {
          this.extrasec = '0';
        } else {
          this.extrasec = '';
        }
        if (this.second >= 60) {
          this.minute++;
          if (this.minute < 10) {
            this.extramin = '0';
          } else {
            this.extramin = '';
          }
          this.second = 0;
          if (this.second < 10) {
            this.extrasec = '0';
          } else {
            this.extrasec = '';
          }
          if (this.minute >= 60) {
            this.hour++;
            if (this.hour < 10) {
              this.extrahou = '0';
            } else {
              this.extrahou = '';
            }
            this.minute = 0;
            if (this.minute < 10) {
              this.extramin = '0';
            } else {
              this.extramin = '';
            }
            this.second = 0;
          }
        }



  }
  calPresentage(count, max){

    this.precentage=((Number(count)/Number(max*3600))*100).toFixed(2) + "%"
    this.precent=(Number(count)/Number(max*3600))*100


  }

}
