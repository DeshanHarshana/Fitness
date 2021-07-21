import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.page.html',
  styleUrls: ['./playground.page.scss'],
})
export class PlaygroundPage implements OnInit {
  execise_link:String="";
  percent=76;
  constructor() { }

  ngOnInit() {
  }
  change(){
    this.execise_link="assets/basic1/2.gif";
  }
}
