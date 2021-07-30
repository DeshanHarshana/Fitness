import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  restTime:number=100;
  progressTime:number=100;

  constructor(private location: Location, private route: ActivatedRoute) {}

  ngOnInit() {
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
  }
  //pack 1 wedigt loss plan1
  begin() {
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Ready For Execise';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        this.fadeText = 'animate__animated animate__fadeInLeft';
        this.message = 'Now Do execise in Screen';
        this.value = 0;
        clearInterval(this.timer);

        this.pack1();
      }
    }, this.progressTime);
  }

  pack1() {
    if (this.counter < 5) {
      this.imageStyle = 'animate__animated animate__fadeInRight image';
      this.execise_link = 'assets/basic1/1.gif';
      this.fadeText = 'animate__animated animate__fadeInRight';
      this.message = 'Now Do execise in Screen';

      this.timer = setInterval(() => {
        this.value++;

        if (this.value >= 100) {
          clearInterval(this.timer);
          this.value = 0;

          this.rest();
        }
      }, 10);
    } else {
      this.end();
    }
  }
  rest() {
    this.imageStyle = 'animate__animated animate__fadeInDown image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Now resting time';

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
    this.message = 'Now Do execise in Screen';

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
    this.message = 'Now resting time';

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
    this.message = 'Now Do execise in Screen';

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
    this.message = 'Now resting time';

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
  }

  //pack 2 wedigt loss plan2

  begin112() {
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Ready For Execise';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        this.fadeText = 'animate__animated animate__fadeInLeft';
        this.message = 'Now Do execise in Screen';
        this.value = 0;
        clearInterval(this.timer);

        this.pack112();
      }
    }, this.progressTime);
  }

  pack112() {
    if (this.counter < 5) {
      this.imageStyle = 'animate__animated animate__fadeInRight image';
      this.execise_link = 'assets/basic2/1.gif';
      this.fadeText = 'animate__animated animate__fadeInRight';
      this.message = 'Now Do execise in Screen';

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
    this.message = 'Now resting time';

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
    this.execise_link = 'assets/basic2/3.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Now Do execise in Screen';

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
    this.message = 'Now resting time';

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
    this.execise_link = 'assets/basic2/4.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Now Do execise in Screen';

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
    this.message = 'Now resting time';

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
    this.execise_link = 'assets/basic2/5.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Now Do execise in Screen';

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
    this.message = 'Now resting time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;
        this.fadeText = '';

        this.pack118();

      }
    }, this.restTime);
  }
  pack118() {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic2/6.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Now Do execise in Screen';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest119();
      }
    }, this.progressTime);
  }
  rest119() {
    this.imageStyle = 'animate__animated animate__fadeInLeft image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Now resting time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;
        this.fadeText = '';

        this.pack120();

      }
    }, this.restTime);
  }
  pack120() {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic2/7.gif';
    this.title = 'Stop';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Now Do execise in Screen';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;

        this.rest121();
      }
    }, this.progressTime);
  }
  rest121() {
    this.imageStyle = 'animate__animated animate__fadeInLeft image';
    this.execise_link = 'assets/playground/rest.gif';
    this.title = 'Rest';
    this.fadeText = 'animate__animated animate__fadeInLeft';
    this.message = 'Now resting time';

    this.timer = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        clearInterval(this.timer);
        this.value = 0;
        this.fadeText = '';

        this.pack112();
        this.counter++;
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
  }
// this is pack3 weight lost


begin212() {
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Ready For Execise';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      this.fadeText = 'animate__animated animate__fadeInLeft';
      this.message = 'Now Do execise in Screen';
      this.value = 0;
      clearInterval(this.timer);

      this.pack212();
    }
  }, this.progressTime);
}

pack212() {
  if (this.counter < 5) {
    this.imageStyle = 'animate__animated animate__fadeInRight image';
    this.execise_link = 'assets/basic3/1.gif';
    this.fadeText = 'animate__animated animate__fadeInRight';
    this.message = 'Now Do execise in Screen';

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
  this.message = 'Now resting time';

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
  this.message = 'Now Do execise in Screen';

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
  this.message = 'Now resting time';

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
  this.message = 'Now Do execise in Screen';

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
  this.message = 'Now resting time';

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
  this.message = 'Now Do execise in Screen';

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
  this.message = 'Now resting time';

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
  this.message = 'Now Do execise in Screen';

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
  this.message = 'Now resting time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack220();

    }
  }, this.restTime);
}
pack220() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/6.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Now Do execise in Screen';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest221();
    }
  }, this.progressTime);
}
rest221() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Now resting time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack221();
      this.counter++;
    }
  }, this.restTime);
}
pack221() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/6.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Now Do execise in Screen';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest222();
    }
  }, this.progressTime);
}
rest222() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Now resting time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack222();
      this.counter++;
    }
  }, this.restTime);
}

pack222() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/7.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Now Do execise in Screen';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest223();
    }
  }, this.progressTime);
}
rest223() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Now resting time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack223();

    }
  }, this.restTime);
}
pack223() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/8.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Now Do execise in Screen';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest224();
    }
  }, this.progressTime);
}
rest224() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Now resting time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack224();
      this.counter++;
    }
  }, this.restTime);
}
pack224() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/9.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Now Do execise in Screen';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest225();
    }
  }, this.progressTime);
}
rest225() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Now resting time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack226();
      this.counter++;
    }
  }, this.restTime);
}
pack226() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/10.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Now Do execise in Screen';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest226();
    }
  }, this.progressTime);
}
rest226() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Now resting time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack227();
      this.counter++;
    }
  }, this.restTime);
}
pack227() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/11.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Now Do execise in Screen';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest227();
    }
  }, this.progressTime);
}
rest227() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Now resting time';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;
      this.fadeText = '';

      this.pack218();
      this.counter++;
    }
  }, this.restTime);
}
pack228() {
  this.imageStyle = 'animate__animated animate__fadeInRight image';
  this.execise_link = 'assets/basic3/12.gif';
  this.title = 'Stop';
  this.fadeText = 'animate__animated animate__fadeInRight';
  this.message = 'Now Do execise in Screen';

  this.timer = setInterval(() => {
    this.value++;

    if (this.value >= 100) {
      clearInterval(this.timer);
      this.value = 0;

      this.rest228();
    }
  }, this.progressTime);
}
rest228() {
  this.imageStyle = 'animate__animated animate__fadeInLeft image';
  this.execise_link = 'assets/playground/rest.gif';
  this.title = 'Rest';
  this.fadeText = 'animate__animated animate__fadeInLeft';
  this.message = 'Now resting time';

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
}

}
