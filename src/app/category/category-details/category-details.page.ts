import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsServiceService } from 'src/app/service/news-service.service';
import { Platform } from "@ionic/angular";
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StorageServiceService } from 'src/app/service/storage-service.service';
import { environment } from 'src/environments/environment';
import { SocialShareService } from 'src/app/service/social-share.service';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

const favouriteKey = environment.FAVORITE_KEY;

@Component({
  selector: "app-category-details",
  templateUrl: "./category-details.page.html",
  styleUrls: ["./category-details.page.scss"],
})
export class CategoryDetailsPage implements OnInit , OnDestroy {

  articles;
  id: string;
  Arr = Array;
  backButtonSubscription;

  constructor(
    private newsService: NewsServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private storage: StorageServiceService,
    private socialSharing: SocialShareService,
    private inAppBrowser: InAppBrowser
  ) {
    
    this.backButtonSubscription = this.platform.backButton.subscribe( () => {
      this.router.navigateByUrl("root/category");
    });

  }

  ngOnDestroy(): void {
    this.backButtonSubscription.unsubscribe();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  
  ionViewDidEnter() {
    this.loadAllArticles();
  }

  loadAllArticles() {
    this.newsService.getSourcesByID(this.id).subscribe((data) => {
      this.articles = JSON.parse(data.data).articles;
    });
  }

  async doRefresh(event: any) {
    this.splashScreen.hide();
    await this.loadAllArticles();
    let timeout = setTimeout(() => {
      event.target.complete();
      clearTimeout(timeout);
    }, 1000);
  }

  addFavourite(selEvent, article) {
    selEvent.lastChild.name = "heart";
    this.storage.addStorageItem(article.publishedAt, article);
  }

  whatsAppShareArticle(article) {
    this.socialSharing.whatsappShare(article.url);
  }

  shareArticle(article) {
    this.socialSharing.regularShare(article.url);
  }

  hideSplashScreen(event: any) {
    this.splashScreen.hide();
  }

  loadArticle(url: string) { 
    this.inAppBrowser.create(
      url,
      "_self",
      "location=no,footer=no,fullscreen=no,zoom=no"
    );
  }
}
