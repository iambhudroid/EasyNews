import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Injectable({
  providedIn: "root",
})
export class SocialShareService {
  constructor(private socialSharing: SocialSharing) {}

  whatsappShare(msg) {
    this.socialSharing.shareViaWhatsApp(msg, null, null).then((res) => {
        // Success
      })
      .catch((e) => {
        // Error!
      });
  }

  instagramShare(msg) {
    this.socialSharing.shareViaInstagram(msg, null).then((res) => {
        // Success
      }).catch((e) => {
        // Error!
      });
  }

  faceBookShare(msg) {
    this.socialSharing.shareViaFacebook(msg, null, null).then((res) => {
        // Success
      }).catch((e) => {
        // Error!
      });
  }

  twitterShare(msg) {
    this.socialSharing.shareViaTwitter(msg, null, null).then((res) => {
        // Success
      }).catch((e) => {
        // Error!
      });
  }

  regularShare(msg){ 
    this.socialSharing.share(msg, null, null, null);
  }

   emailShare(msg) {
    this.socialSharing.shareViaWhatsApp(msg, null, null).then((res) => {
        // Success
      }).catch((e) => {
        // Error!
      });
  }

}
