import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(public toastController: ToastController) {}

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
    });
    toast.present();
  }

  async presentToastWithOptions(header, message, position) {
    const toast = await this.toastController.create({
      header: "Toast header",
      message: "Click to Close",
      position: "top",
      buttons: [
        {
          side: "start",
          icon: "star",
          text: "Favorite",
          handler: () => {
            console.log("Favorite clicked");
          },
        },
        {
          text: "Done",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    toast.present();
  }
}
