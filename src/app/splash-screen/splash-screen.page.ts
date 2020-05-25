import { Component, OnInit } from '@angular/core'; 
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  selector: "app-splash-screen",
  templateUrl: "./splash-screen.page.html",
  styleUrls: ["./splash-screen.page.scss"],
})
export class SplashScreenPage {
  constructor( 
    public splashScreen: SplashScreen
  ) {}
 
}
