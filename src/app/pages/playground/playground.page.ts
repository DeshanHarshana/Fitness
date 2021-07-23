import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.page.html',
  styleUrls: ['./playground.page.scss'],
})
export class PlaygroundPage implements OnInit {
  execise_link: String = '';
  value: number = 0;
  title: string = 'Start';
  timer: any;
  message:string="";

  isClicked: boolean = false;


  constructor() {}

  ngOnInit() {
    this.execise_link="assets/playground/ready.gif"
  }

  start() {
    if(this.isClicked){
      this.execise_link="assets/playground/ready.gif"
      this.isClicked=false;
      this.title="Start"
      this.value=0;
      this.message=""
      clearInterval(this.timer)
    }else{
    this.isClicked = true;
    this.title = 'Stop';
    this.begin();
    this.value=0;
    }
  }
  begin(){
    this.message="Now Timer is running Ready for execise"
    this.timer=setInterval(()=>{
      this.value++;
      if(this.value>=100){
        this.message="Now Do execise in Screen"
        this.value=0;
        clearInterval(this.timer)
        this.pack1();
      }
    },200)

  }

  pack1() {
    this.execise_link = 'assets/basic1/1.gif';
    this.message="Now Do execise in Screen"
    this.timer = setInterval(() => {
      this.value++;
      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;
        this.rest()

      }
    }, 500);
  }
  rest(){
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.message="Now resting time"
    this.timer=setInterval(()=>{
      this.value++;
      if(this.value>=100){
        clearInterval(this.timer);
        this.value=0;
        this.pack2()
      }
    }, 300)
  }
  pack2() {
    this.execise_link = 'assets/basic1/2.gif';
    this.title="Stop";
    this.message="Now Do execise in Screen"
    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value=0;
        this.rest2();

      }
    }, 500);
  }
  rest2(){
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.message="Now resting time"
    this.timer=setInterval(()=>{
      this.value++;
      if(this.value>=100){
        clearInterval(this.timer);
        this.value=0;
        this.pack3()
      }
    }, 300)
  }
  pack3() {
    this.execise_link = 'assets/basic1/3.gif';
    this.title="Stop";
    this.message="Now Do execise in Screen"
    this.timer = setInterval(() => {
    this.value++;
      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;
        this.rest3()
      }
    }, 500);
  }
  rest3(){
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.message="Now resting time"
    this.timer=setInterval(()=>{
      this.value++;
      if(this.value>=100){
        clearInterval(this.timer);
        this.value=0;
        this.pack1()
      }
    }, 300)
  }
}
