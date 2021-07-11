import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public toastController:ToastController) {}
  showToaster(){
this.openToast("ajdalsdaslkda");
  }

  async openToast(message){
    const toast=await this.toastController.create({
      message: message,
      duration: 500,
      position: 'bottom'
    });
    toast.present();
  }
}
