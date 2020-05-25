import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {

  backButtonSubscription;

  constructor(
    private platform: Platform,
    private router: Router
  ) {

    this.backButtonSubscription = this.platform.backButton.subscribe( () => {
      this.router.navigateByUrl("root/home");
    });
    
  }

  ngOnInit() {}

  toggleDarkTheme(shouldEnable) {
    document.body.classList.toggle("dark", shouldEnable);
  }

  onClick(event) {
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if (event.detail.checked) {
      document.body.setAttribute("class", "dark");
    } else {
      document.body.setAttribute("class", "light");
    }
  }

  colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute("class", "dark");
    } else {
      document.body.setAttribute("class", "light");
    }
  }
}
