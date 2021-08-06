import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name:String;
  email:String;
  password:String;
  private loading;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public toastController:ToastController,
    private afs:AngularFirestore,


   public loadingController: LoadingController,
  ) { }

  ngOnInit() {
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

  confirm_input(){

  }
  signUp(){
    this.loadingOverlay()
    this.authService.RegisterUser(this.email, this.password)
    .then((res) => {

      localStorage.setItem("login","true");
      localStorage.setItem("uid",res.user.uid);
      this.afs.collection('user').doc(res.user.uid).collection('details').add({
        displayName:this.name,
        age:"",
        profile_link:"https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png",
        weight:"",
        height:"",
      }).then(res=>{
        localStorage.setItem('currentUserDoc', res.id);

      }).then(x=>{
        this.loading.dismiss()
        this.router.navigate(['/age']);
      })
    }).catch((error) => {
      this.openToast(error);
      console.log(error.message)
    })
}
async openToast(message){
  const toast=await this.toastController.create({
    message: message,
    duration: 800,
    position: 'bottom'
  });
  toast.present();
}
}
