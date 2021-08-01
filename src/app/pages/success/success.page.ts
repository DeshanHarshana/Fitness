import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    localStorage.removeItem('timeDuration')
    localStorage.removeItem('plan1_init_time');
    localStorage.removeItem('plansize');
    localStorage.removeItem('planDuration');
  }
  goMenu(){
    this.router.navigateByUrl('/tabs');

  }

}
