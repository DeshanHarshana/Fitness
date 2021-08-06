import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {map, take} from 'rxjs/operators';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:String=""
  password:String=""
  private loading;
  constructor(
    public authService:AuthenticationService,
    public router:Router,
    private afStore:AngularFirestore,
    public loadingController: LoadingController,
    private toastController:ToastController,

  ) { }

  ngOnInit() {
    if(localStorage.getItem('login')=="true"){
      this.router.navigateByUrl('/tabs')
    }
  }
  loadingOverlay(){
    this.loadingController.create({
     message:"Please Wait",
     duration:3000
    }).then((overlay)=>{
this.loading=overlay;
this.loading.present();
    });
  }
  async openToast(message){
    const toast=await this.toastController.create({
      message: message,
      duration: 800,
      position: 'bottom'
    });
    toast.present();
  }
  login() {
this.loadingOverlay()
    this.authService.SignIn(this.email, this.password)
      .then((res) => {

        console.log("Overlay Started")
        this.router.navigateByUrl('/tabs');
        localStorage.setItem("login","true");
        localStorage.setItem('uid', res.user.uid)

      }).then(()=>{
        this.loading.dismiss()
        const x=this.afStore
        .collection<any>('user')
        .doc(localStorage.getItem('uid'))
        .collection<any>('details')
        .get().subscribe(doc=>{
          doc.docs.forEach(x=>
            localStorage.setItem('currentUserDoc', x.id)
          )
        })

        console.log("Overlay End")
      }

      )

      .catch((error) => {
        this.openToast(error.message);

      })
    }

}
