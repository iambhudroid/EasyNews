import { Component, ViewChildren, QueryList, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Platform, IonRouterOutlet, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { GlobalService } from './service/global.service';
import { ThemeDetection, ThemeDetectionResponse } from "@ionic-native/theme-detection";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  
  // for storing the returned subscription
  backButtonSubscription;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private globalService: GlobalService,
    public router: Router,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }
  
  ngOnInit() { }

  ngAfterViewInit() {
    //throw new Error("Method not implemented.");
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      //this.statusBar.backgroundColorByHexString("#85929E");
      this.statusBar.backgroundColorByHexString("#5D6D7E");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
      this.globalService.toggleDarkTheme(prefersDark.matches);
      prefersDark.addListener((mediaQuery) =>
        this.globalService.toggleDarkTheme(mediaQuery.matches)
      ); 
      this.splashScreen.hide();
    });
  }

  backButtonEvent() {
    this.backButtonSubscription = this.platform.backButton.subscribe(
      async () => { this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
      if (outlet && outlet.canGoBack()) {
        outlet.pop();
      } else if (this.router.url === "/root/home") {
        this.presentAlertConfirm();
      }
    });
      }
    );
  }

  async presentAlertConfirm() { 
    const alert = await this.alertController.create({ header: "Exit", message: "Do you want to exit App !!!",
      buttons: [{ text: "Cancel", role: "cancel", cssClass: "secondary", handler: (blah) => { console.log("Confirm Cancel: blah"); }, },
        { text: "Exit", handler: () => { console.log("Confirm Okay"); navigator["app"].exitApp();  }, },  ],
    });
    await alert.present();
  }

  //Called when view is left
  ngOnDestroy() { 
    // Unregister the custom back button action for this page
    this.backButtonSubscription.unsubscribe();
  }
}
