import { Component } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { StorageServiceService } from '../service/storage-service.service';
import { environment } from 'src/environments/environment';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SocialShareService } from '../service/social-share.service';
import { ToastService } from '../service/toast.service';

const favouriteKey = environment.FAVORITE_KEY;

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  Arr = Array;
  private articles;
  private categories = [
    "All",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  private selectedcategorie: string = "All";
  private tagDefaultColor = ["primary", "secondary"];

  constructor(
    private inAppBrowser: InAppBrowser,
    private newsService: NewsServiceService,
    private storage: StorageServiceService,
    private splashScreen: SplashScreen,
    private socialSharing: SocialShareService,
    private toast: ToastService
  ) {}

  ionViewDidEnter() {
    this.getAllSelectCategorieData();
  }

  getAllSelectCategorieData() {
    this.newsService
      .getTopHeadlines("top-headlines?country=in")
      .subscribe((data) => {
        this.articles = JSON.parse(data.data).articles;
      });
  }

  getSelectCategorieData(categorie) {
    this.newsService
      .getTopHeadlines("top-headlines?country=in&category=" + categorie)
      .subscribe((data) => {
        this.articles = JSON.parse(data.data).articles;
      });
  }

  onSelectCategorie(categorie: string) {
    this.selectedcategorie = categorie;
    if (categorie.includes("All")) {
      this.getAllSelectCategorieData();
    } else {
      this.getSelectCategorieData(categorie.toLowerCase());
    }
  }

  loadArticle(url: string) {
    this.inAppBrowser.create(
      url,
      "_self",
      "location=no,footer=no,fullscreen=no,zoom=no"
    );
  }

  addFavourite(selEvent, article) {
    selEvent.lastChild.name = "heart";
    this.storage.addStorageItem(article.publishedAt, article);
    this.toast.presentToast("Added to Favourite");
  }

  shareArticle(article) {
    this.socialSharing.regularShare(article.url);
  }

  whatsAppShareArticle(article) {
    this.socialSharing.whatsappShare(article.url);
  }

  hideSplashScreen(event: any) {
    this.splashScreen.hide();
  }

  async doRefresh(event: any) {
    this.splashScreen.hide();
    await this.onSelectCategorie(this.selectedcategorie);
    let timeout = setTimeout(() => {
      event.target.complete();
      clearTimeout(timeout);
    }, 1000);
  }
}
