import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public toastController:ToastController,
    public authService:AuthenticationService,

    ) {}





  async openToast(message){
    const toast=await this.toastController.create({
      message: message,
      duration: 500,
      position: 'bottom'
    });
    toast.present();
  }

}
