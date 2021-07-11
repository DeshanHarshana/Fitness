import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public toastController:ToastController,
    private afs:AngularFirestore,
  ) { }

  ngOnInit() {
  }
  confirm_input(){

  }
  signUp(){
    this.authService.RegisterUser(this.email, this.password)
    .then((res) => {
      this.router.navigate(['/tabs']);
      localStorage.setItem("login","true");
      localStorage.setItem("uid",res.user.uid);
      this.afs.collection('user').doc(res.user.uid).collection('details').add({
        displayName:this.name,
        age:"",
        profile_link:"https://wikicraze.com/wp-content/uploads/2019/08/girl-32-3.jpg",
        weight:"",
        height:"",
      })
    }).catch((error) => {
      this.openToast(error.message);
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
