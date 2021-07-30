import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dietpaln-intermediate',
  templateUrl: './dietpaln-intermediate.page.html',
  styleUrls: ['./dietpaln-intermediate.page.scss'],
})
export class DietpalnIntermediatePage implements OnInit {
  plan_id:number;
  plan_name:string;
  plan_time:string;
  planisRunning:boolean=false;
  buttonText:string;
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.plan_id=this.route.snapshot.params.id;
    if(this.plan_id==1){
      if(!(localStorage.getItem('plan1_init_time')==null)){
        this.planisRunning=true;
        this.plan_name="Continue";

        this.buttonText="Continue"
      }else{
      this.plan_name="Beginner"
      this.plan_time='24'
      this.planisRunning=false;
      this.buttonText="Click Me"
    }
  }
    if(this.plan_id==2){
      if(!(localStorage.getItem('plan1_init_time')==null)){
        this.planisRunning=true;
        this.plan_name="Continue";

        this.buttonText="Continue"
      }else{
      this.plan_name="Intermediate"
      this.plan_time='32';
      this.planisRunning=false;
      this.buttonText="Click Me"
    }
    }
    if(this.plan_id==3){
      if(!(localStorage.getItem('plan1_init_time')==null)){
        this.planisRunning=true;
        this.plan_name="Continue";
        this.plan_time=localStorage.getItem('planDuration');
        this.buttonText="Continue"
      }else{
      this.plan_name="Hard"
      this.plan_time='48'
      this.planisRunning=false;
      this.buttonText="Click Me"
    }
    }

  }
  goPlan(){
    if(this.plan_id==1){
      this.router.navigate(['test/'+1])
    }
    if(this.plan_id==2){
      this.router.navigate(['test/'+2])
    }
    if(this.plan_id==3){
      this.router.navigate(['test/'+3])
    }
  }
}
