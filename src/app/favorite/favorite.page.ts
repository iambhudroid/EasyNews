import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../service/storage-service.service'; 
import { environment } from 'src/environments/environment';
import { Platform } from '@ionic/angular';
import { SocialShareService } from '../service/social-share.service';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ToastService } from '../service/toast.service';
import { Router } from '@angular/router';

const favouriteKey = environment.FAVORITE_KEY;

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.page.html",
  styleUrls: ["./favorite.page.scss"],
})
export class FavoritePage implements OnInit {
  
  articles = [];
  backButtonSubscription;

  constructor(
    private inAppBrowser: InAppBrowser,
    private storage: StorageServiceService,
    private platform: Platform,
    private socialSharing: SocialShareService,
    private toast: ToastService,
    private router: Router
  ) {
    
    this.backButtonSubscription = this.platform.backButton.subscribe( () => {
      this.router.navigateByUrl("root/home");
    });

  }
  ngOnInit(): void {}

  ionViewDidEnter() {
    this.getAllFavoriteArticles();
  }

  getAllFavoriteArticles() {
    this.articles = [];
    this.storage.getAllStorageItems().forEach((value: Object, key: string) => {
      this.articles.push(value);
      this.articles.reverse();
    });
  }

  loadArticle(url: string) {
    this.inAppBrowser.create(
      url,
      "_self",
      "location=no,footer=no,fullscreen=no,zoom=no"
    );
  }

  shareArticle(article) {
    this.socialSharing.regularShare(article.url);
  }

  whatsAppShareArticle(article) {
    this.socialSharing.whatsappShare(article.url);
  }

  removeFavourite(selEvent, article) {
    selEvent.lastChild.name = "heart-outline";
    this.storage.deleteStorageItem(article.publishedAt);
    this.toast.presentToast("Removed from Favourite");
    this.getAllFavoriteArticles();
  }
}
