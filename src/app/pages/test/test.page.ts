import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  isclickedbutton:boolean=false;
  x:any
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) {}
  ngOnInit(

  ) {
    console.log("on init")
    if(this.route.snapshot.params.id==1){
      this.palnsize=24;
    }
    if(this.route.snapshot.params.id==2){
      this.palnsize=32;
    }
    if(this.route.snapshot.params.id==3){
      this.palnsize=48;
    }
    console.log(localStorage.getItem('plan1_init_time'))

    this.second=0;
    if((localStorage.getItem('plan1_init_time')==undefined)){
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

      clearInterval(this.x)
      this.isplanRunning=false;
      this.buttonText="START";
    this.buttonText="START";
    this.timeDuration=String(this.palnsize);
    console.log("elsoijjjjjjje")




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
