import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


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
  message: string = '';
  fadeText: string;
  imageStyle: string = 'image';
  isClicked: boolean = false;
  counter: number = 0;
  parmsId: number = 0;
  progressClass:string
  restTime:number=600;
  progressTime:number=1500;
  readyTime:number=200;
  heightImage=""
  constructor(private location: Location, private route: ActivatedRoute,
    public alertController: AlertController,
    public router:Router

    ) {}

  ngOnInit() {
    this.presentAlert()
    this.imageStyle = 'animate__animated animate__fadeInDown image';
    this.execise_link = 'assets/playground/ready.gif';
    this.parmsId = this.route.snapshot.params.id;
    console.log('parms ' + this.route.snapshot.params.id);
    if(this.parmsId==1){
      this.progressClass="progress1 animate__animated animate__bounceIn"
    }
    if(this.parmsId==2){
      this.progressClass="progress2 animate__animated animate__bounceIn"
    }
    if(this.parmsId==3){
      this.progressClass="progress3 animate__animated animate__bounceIn"
    }
    if(this.parmsId==4){
      this.progressClass="progress2 animate__animated animate__bounceIn"
    }
    if(this.parmsId==5){
      this.progressClass="progress2 animate__animated animate__bounceIn"
    }
    if(this.parmsId==6){
      this.progressClass="progress2 animate__animated animate__bounceIn"
    }
  }
  goPlans() {
    this.location.back();
  }
  start() {
    if (this.parmsId == 1) {
      if (this.isClicked) {
        this.imageStyle = 'animate__animated animate__fadeInDown image';
        this.execise_link = 'assets/playground/ready.gif';
        this.isClicked = false;
        this.title = 'Start';
        this.value = 0;
        this.message = '';
        clearInterval(this.timer);
        this.imageStyle = 'image';
      } else {
        this.isClicked = true;
        this.title = 'Stop';
        this.begin();
        this.value = 0;
        this.imageStyle = 'image';
      }
    }
    if (this.parmsId == 2) {
      if (this.isClicked) {
        this.imageStyle = 'animate__animated animate__fadeInDown image';
        this.execise_link = 'assets/playground/ready.gif';
        this.isClicked = false;
        this.title = 'Start';
        this.value = 0;
        this.message = '';
        clearInterval(this.timer);
        this.imageStyle = 'image';
      } else {
        this.isClicked = true;
        this.title = 'Stop';
        this.begin112();
        this.value = 0;
        this.imageStyle = 'image';
      }
    }
    if (this.parmsId == 3) {
      if (this.isClicked) {
        this.imageStyle = 'animate__animated animate__fadeInDown image';
        this.execise_link = 'assets/playground/ready.gif';
        this.isClicked = false;
        this.title = 'Start';
        this.value = 0;
        this.message = '';
        clearInterval(this.timer);
        this.imageStyle = 'image';
      } else {
        this.isClicked = true;
        this.title = 'Stop';
        this.begin212();
        this.value = 0;
        this.imageStyle = 'image';
      }
    }
    if (this.parmsId == 4) {
      if (this.isClicked) {
        this.imageStyle = 'animate__animated animate__fadeInDown image';
        this.execise_link = 'assets/playground/ready.gif';
        this.isClicked = false;
        this.title = 'Start';
        this.value = 0;
        this.message = '';
        clearInterval(this.timer);
        this.imageStyle = 'image';
      } else {
        this.isClicked = true;
        this.title = 'Stop';
        this.yoga1begin();
        this.value = 0;
        this.imageStyle = 'image';
      }
    }
    if (this.parmsId == 5) {
      if (this.isClicked) {
        this.imageStyle = 'animate__animated animate__fadeInDown image';
        this.execise_link = 'assets/playground/ready.gif';
        this.isClicked = false;
        this.title = 'Start';
        this.value = 0;
        this.message = '';
        clearInterval(this.timer);
        this.imageStyle = 'image';
      } else {
        this.isClicked = true;
        this.title = 'Stop';
        this.yoga1begin2();
        this.value = 0;
        this.imageStyle = 'image';
      }
    }
    if (this.parmsId == 6) {
      if (this.isClicked) {
        this.imageStyle = 'animate__animated animate__fadeInDown image';
        this.execise_link = 'assets/playground/ready.gif';
        this.isClicked = false;
        this.title = 'Start';
        this.value = 0;
        this.message = '';
        clearInterval(this.timer);
        this.imageStyle = 'image';
      } else {
        this.isClicked = true;
        this.title = 'Stop';
        this.yoga1begin3();
        this.value = 0;
        this.imageStyle = 'image';
      }
    }
  }
  //pack 1 wedigt loss plan1
  begin() {
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Ready For Exercise';
    this.title = 'Stop';
    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        this.fadeText = 'animate__animated animate__fadeInLeft';
        this.message = 'Exercise';
        this.value = 0;
        clearInterval(this.timer);

        this.pack1();
      }
    }, this.readyTime);
  }

  pack1() {
    if (this.counter < 5) {
      this.imageStyle = 'animate__animated animate__fadeInRight image';
      this.execise_link = 'assets/basic1/1.gif';
      this.fadeText = 'animate__animated animate__fadeInRight';
      this.message = 'Exercise';
      this.title = 'Stop';
      this.timer = setInterval(() => {
        this.value++;

        if (this.value >= 100) {
          clearInterval(this.timer);
          this.value = 0;

          this.rest();
        }
      }, this.progressTime);
    } else {
      this.end();
    }
  }
  rest() {
    this.imageStyle = 'animate__animated animate__fadeInDown image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.pack2();
      }
    }, this.restTime);
  }
  pack2() {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic1/2.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest2();
      }
    }, this.progressTime);
  }
  rest2() {
    this.imageStyle = 'animate__animated animate__fadeInLeft image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.pack3();
      }
    }, this.restTime);
  }
  pack3() {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic1/3.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest3();
      }
    }, this.progressTime);
  }
  rest3() {
    this.imageStyle = 'animate__animated animate__fadeInLeft image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;
        this.fadeText = '';

        this.pack1();
        this.counter++;
      }
    }, this.restTime);
  }
  end() {
    this.execise_link = '';
    this.counter = 0;
    this.imageStyle = 'image';
    this.isClicked = false;
    this.message = 'Plan End Go Back';
    this.value = 0;
    clearInterval(this.timer);
    this.title = 'Over';
    this.router.navigate(['success'])

  }

  //pack 2 wedigt loss plan2

  begin112() {
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Ready For Execise';
    this.title = 'Stop';
    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        this.fadeText = 'animate__animated animate__fadeInLeft';
        this.message = 'Exercise';
        this.value = 0;
        clearInterval(this.timer);

        this.pack112();
      }
    }, this.readyTime);
  }

  pack112() {

    if (this.counter < 5) {
      this.imageStyle = 'animate__animated animate__fadeInRight image2';
      this.execise_link = 'assets/basic2/1.gif';
      this.fadeText = 'animate__animated animate__fadeInRight';
      this.message = 'Exercise';
      this.title = 'Stop';
      this.timer = setInterval(() => {
        this.value++;

        if (this.value >= 100) {
          clearInterval(this.timer);
          this.value = 0;

          this.rest112();

        }
      }, this.progressTime);
    } else {
      this.end112();
    }
  }
  rest112() {
    this.imageStyle = 'animate__animated animate__fadeInDown image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.pack113();
      }
    }, this.restTime);
  }
  pack113() {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic2/2.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest113();
      }
    }, this.progressTime);
  }
  rest113() {
    this.imageStyle = 'animate__animated animate__fadeInLeft image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.pack114();
      }
    }, this.restTime);
  }
  pack114() {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic2/3.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest115();
      }
    }, this.progressTime);
  }
  rest115() {
    this.imageStyle = 'animate__animated animate__fadeInLeft image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;
        this.fadeText = '';

        this.pack116();

      }
    }, this.restTime);
  }
  pack116() {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic2/4.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest117();
      }
    }, this.progressTime);
  }
  rest117() {
    this.imageStyle = 'animate__animated animate__fadeInLeft image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;
        this.fadeText = '';

        this.pack112();

      }
    }, this.restTime);
  }
  end112() {
    this.execise_link = '';
    this.counter = 0;
    this.imageStyle = 'image';
    this.isClicked = false;
    this.message = 'Plan End Go Back';
    this.value = 0;
    clearInterval(this.timer);
    this.title = 'Over';
    this.router.navigate(['success'])
  }
// this is pack3 weight lost


begin212() {
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Ready For Execise';
  this.title = 'Stop';
  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      this.fadeText = 'animate__animated animate__fadeInLeft';
      this.message = 'Exercise';
      this.value = 0;
      clearInterval(this.timer);

      this.pack212();
    }
  }, this.readyTime);
}

pack212() {
  if (this.counter < 5) {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic3/1.gif';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';
    this.title = 'Stop';
    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest212();
      }
    }, this.progressTime);
  } else {
    this.end112();
  }
}
rest212() {
  this.imageStyle = 'animate__animated animate__fadeInDown image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Resting Time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.pack213();
    }
  }, this.restTime);
}
pack213() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/2.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Exercise';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest213();
    }
  }, this.progressTime);
}
rest213() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Resting Time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.pack214();
    }
  }, this.restTime);
}
pack214() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/3.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Exercise';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest215();
    }
  }, this.progressTime);
}
rest215() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Resting Time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack216();

    }
  }, this.restTime);
}
pack216() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/4.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Exercise';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest217();
    }
  }, this.progressTime);
}
rest217() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Resting Time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack218();

    }
  }, this.restTime);
}
pack218() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/5.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Exercise';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest219();
    }
  }, this.progressTime);
}
rest219() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Resting Time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack212();
      this.counter++;

    }
  }, this.restTime);
}

end212() {
  this.execise_link = '';
  this.counter = 0;
  this.imageStyle = 'image';
  this.isClicked = false;
  this.message = 'Plan End Go Back';
  this.value = 0;
  clearInterval(this.timer);
  this.title = 'Over';
  this.router.navigate(['success'])
}
yoga1begin(){

    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Ready For Yoga';
    this.title = 'Stop';
    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        this.fadeText = 'animate__animated animate__fadeInLeft';
        this.message = 'Exercise';
        this.value = 0;
        clearInterval(this.timer);

        this.yoga11();
      }
    }, this.readyTime);


}
yoga11(){
if (this.counter < 5) {
  this.imageStyle = 'animate__animated animate__fadeInRight image2';
  this.execise_link = 'assets/yoga1/1.gif';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Exercise';
  this.title = 'Stop';
  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest12();

    }
  }, this.progressTime);
} else {
  this.end112();
}
}
rest12() {
this.imageStyle = 'animate__animated animate__fadeInDown image';
this.execise_link = 'assets/playground/rest.gif';
this.title = 'Rest';
this.fadeText = 'animate__animated animate__fadeInLeft';
this.message = 'Resting Time';

this.timer = setInterval(() => {
  this.value++;

  if (this.value >= 100) {
    clearInterval(this.timer);
    this.value = 0;

    this.yoga12();
  }
}, this.restTime);
}

yoga12(){
  this.imageStyle = 'animate__animated animate__fadeInRight image2';
  this.execise_link = 'assets/yoga1/2.gif';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Exercise';
  this.title = 'Stop';
  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest13();

    }
  }, this.progressTime);

}
rest13() {
  this.imageStyle = 'animate__animated animate__fadeInDown image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Resting Time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.yoga13();
    }
  }, this.restTime);
  }
  yoga13(){
    this.imageStyle = 'animate__animated animate__fadeInRight image2';
    this.execise_link = 'assets/yoga1/3.gif';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';
    this.title = 'Stop';
    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest14();

      }
    }, this.progressTime);

  }
  rest14() {
    this.imageStyle = 'animate__animated animate__fadeInDown image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.yoga11();
        this.counter++;
      }
    }, this.restTime);
    }

yoga1begin2(){

  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Ready For Yoga';
  this.title = 'Stop';
  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      this.fadeText = 'animate__animated animate__fadeInLeft';
      this.message = 'Exercise';
      this.value = 0;
      clearInterval(this.timer);

      this.yoga21();
    }
  }, this.readyTime);


}
yoga21(){
  if (this.counter < 5) {
    this.imageStyle = 'animate__animated animate__fadeInRight image2';
    this.execise_link = 'assets/yoga2/1.gif';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';
    this.title = 'Stop';
    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest22();

      }
    }, this.progressTime);
  } else {
    this.end112();
  }
  }
  rest22() {
  this.imageStyle = 'animate__animated animate__fadeInDown image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Resting Time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.yoga22();
    }
  }, this.restTime);
  }

  yoga22(){
    this.imageStyle = 'animate__animated animate__fadeInRight image2';
    this.execise_link = 'assets/yoga2/2.gif';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Exercise';
    this.title = 'Stop';
    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest23();

      }
    }, this.progressTime);

  }
  rest23() {
    this.imageStyle = 'animate__animated animate__fadeInDown image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Resting Time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.yoga23();
      }
    }, this.restTime);
    }
    yoga23(){
      this.imageStyle = 'animate__animated animate__fadeInRight image2';
      this.execise_link = 'assets/yoga2/3.gif';
      this.fadeText = 'animate__animated animate__fadeInRight';
      this.message = 'Exercise';
      this.title = 'Stop';
      this.timer = setInterval(() => {
        this.value++;

        if (this.value >= 100) {
          clearInterval(this.timer);
          this.value = 0;

          this.rest25();

        }
      }, this.progressTime);

    }
    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: 'TextSelectable',
        header: 'Display Control Tips',

        message: 'After you start, your display may going to sleep after some time. For that you can go to your smartphone display setting and put screen sleep Never. After that you can get full experience',
        buttons: ['OK']
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    rest25() {
      this.imageStyle = 'animate__animated animate__fadeInDown image';
      this.execise_link = 'assets/playground/rest.gif';
      this.title = 'Rest';
      this.fadeText = 'animate__animated animate__fadeInLeft';
      this.message = 'Resting Time';

      this.timer = setInterval(() => {
        this.value++;

        if (this.value >= 100) {
          clearInterval(this.timer);
          this.value = 0;

          this.yoga24();
        }
      }, this.restTime);
      }
      yoga24(){
        this.imageStyle = 'animate__animated animate__fadeInRight image2';
        this.execise_link = 'assets/yoga2/4.gif';
        this.fadeText = 'animate__animated animate__fadeInRight';
        this.message = 'Exercise';
        this.title = 'Stop';
        this.timer = setInterval(() => {
          this.value++;

          if (this.value >= 100) {
            clearInterval(this.timer);
            this.value = 0;

            this.rest26();

          }
        }, this.progressTime);

      }
      rest26() {
        this.imageStyle = 'animate__animated animate__fadeInDown image';
        this.execise_link = 'assets/playground/rest.gif';
        this.title = 'Rest';
        this.fadeText = 'animate__animated animate__fadeInLeft';
        this.message = 'Resting Time';

        this.timer = setInterval(() => {
          this.value++;

          if (this.value >= 100) {
            clearInterval(this.timer);
            this.value = 0;
            this.counter++;
            this.yoga21();

          }
        }, this.restTime);
        }

        yoga1begin3(){

          this.fadeText = 'animate__animated animate__fadeInLeft';
          this.message = 'Ready For Yoga';
          this.title = 'Stop';
          this.timer = setInterval(() => {
            this.value++;

            if (this.value >= 100) {
              this.fadeText = 'animate__animated animate__fadeInLeft';
              this.message = 'Exercise';
              this.value = 0;
              clearInterval(this.timer);

              this.yoga31();
            }
          }, this.readyTime);


        }
        yoga31(){
          if (this.counter < 5) {
            this.imageStyle = 'animate__animated animate__fadeInRight image2';
            this.execise_link = 'assets/yoga3/1.gif';
            this.fadeText = 'animate__animated animate__fadeInRight';
            this.message = 'Exercise';
            this.title = 'Stop';
            this.timer = setInterval(() => {
              this.value++;

              if (this.value >= 100) {
                clearInterval(this.timer);
                this.value = 0;

                this.rest32();

              }
            }, this.progressTime);
          } else {
            this.end112();
          }
          }
          rest32() {
          this.imageStyle = 'animate__animated animate__fadeInDown image';
          this.execise_link = 'assets/playground/rest.gif';
          this.title = 'Rest';
          this.fadeText = 'animate__animated animate__fadeInLeft';
          this.message = 'Resting Time';

          this.timer = setInterval(() => {
            this.value++;

            if (this.value >= 100) {
              clearInterval(this.timer);
              this.value = 0;

              this.yoga32();
            }
          }, this.restTime);
          }

          yoga32(){
            this.imageStyle = 'animate__animated animate__fadeInRight image2';
            this.execise_link = 'assets/yoga3/2.gif';
            this.fadeText = 'animate__animated animate__fadeInRight';
            this.message = 'Exercise';
            this.title = 'Stop';
            this.timer = setInterval(() => {
              this.value++;

              if (this.value >= 100) {
                clearInterval(this.timer);
                this.value = 0;

                this.rest33();

              }
            }, this.progressTime);

          }
          rest33() {
            this.imageStyle = 'animate__animated animate__fadeInDown image';
            this.execise_link = 'assets/playground/rest.gif';
            this.title = 'Rest';
            this.fadeText = 'animate__animated animate__fadeInLeft';
            this.message = 'Resting Time';

            this.timer = setInterval(() => {
              this.value++;

              if (this.value >= 100) {
                clearInterval(this.timer);
                this.value = 0;

                this.yoga33();
              }
            }, this.restTime);
            }
            yoga33(){
              this.imageStyle = 'animate__animated animate__fadeInRight image2';
              this.execise_link = 'assets/yoga3/3.gif';
              this.fadeText = 'animate__animated animate__fadeInRight';
              this.message = 'Exercise';
              this.title = 'Stop';
              this.timer = setInterval(() => {
                this.value++;

                if (this.value >= 100) {
                  clearInterval(this.timer);
                  this.value = 0;

                  this.rest35();

                }
              }, this.progressTime);

            }
            rest35() {
              this.imageStyle = 'animate__animated animate__fadeInDown image';
              this.execise_link = 'assets/playground/rest.gif';
              this.title = 'Rest';
              this.fadeText = 'animate__animated animate__fadeInLeft';
              this.message = 'Resting Time';

              this.timer = setInterval(() => {
                this.value++;

                if (this.value >= 100) {
                  clearInterval(this.timer);
                  this.value = 0;

                  this.yoga34();
                }
              }, this.restTime);
              }
              yoga34(){
                this.imageStyle = 'animate__animated animate__fadeInRight image2';
                this.execise_link = 'assets/yoga3/4.gif';
                this.fadeText = 'animate__animated animate__fadeInRight';
                this.message = 'Exercise';
                this.title = 'Stop';
                this.timer = setInterval(() => {
                  this.value++;

                  if (this.value >= 100) {
                    clearInterval(this.timer);
                    this.value = 0;

                    this.rest36();

                  }
                }, this.progressTime);

              }
              rest36() {
                this.imageStyle = 'animate__animated animate__fadeInDown image';
                this.execise_link = 'assets/playground/rest.gif';
                this.title = 'Rest';
                this.fadeText = 'animate__animated animate__fadeInLeft';
                this.message = 'Resting Time';

                this.timer = setInterval(() => {
                  this.value++;

                  if (this.value >= 100) {
                    clearInterval(this.timer);
                    this.value = 0;

                    this.yoga35();
                  }
                }, this.restTime);
                }
                yoga35(){
                  this.imageStyle = 'animate__animated animate__fadeInRight image2';
                  this.execise_link = 'assets/yoga3/5.gif';
                  this.fadeText = 'animate__animated animate__fadeInRight';
                  this.message = 'Exercise';
                  this.title = 'Stop';
                  this.timer = setInterval(() => {
                    this.value++;

                    if (this.value >= 100) {
                      clearInterval(this.timer);
                      this.value = 0;

                      this.rest37();

                    }
                  }, this.progressTime);

                }
                rest37() {
                  this.imageStyle = 'animate__animated animate__fadeInDown image';
                  this.execise_link = 'assets/playground/rest.gif';
                  this.title = 'Rest';
                  this.fadeText = 'animate__animated animate__fadeInLeft';
                  this.message = 'Resting Time';

                  this.timer = setInterval(() => {
                    this.value++;

                    if (this.value >= 100) {
                      clearInterval(this.timer);
                      this.value = 0;
                      this.counter++;
                      this.yoga31();
                    }
                  }, this.restTime);
                  }

        }


