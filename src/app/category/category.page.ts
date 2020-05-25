import { Component, OnDestroy } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: "app-category",
  templateUrl: "category.page.html",
  styleUrls: ["category.page.scss"],
})
export class CategoryPage implements OnDestroy{
  sourcesList: Array<any>;
  Arr = Array;
  articles;
  backButtonSubscription;

  constructor(
    private newsService: NewsServiceService,
    private router: Router,
    private platform: Platform
  ) {

    this.backButtonSubscription = this.platform.backButton.subscribe( () => { 
      this.router.navigateByUrl("root/home"); 
    });

  }

  ngOnDestroy(){
    this.backButtonSubscription.unsubscribe();
  }
  
  ionViewDidEnter() {
    this.loadAllSources();
  }

  loadAllSources() {
    this.newsService;
    this.newsService.getAllSources("sources?language=en").subscribe((data) => {
      this.sourcesList = JSON.parse(data.data).sources;
    });
  }

  selectSource(sourcesId) {
    this.router.navigateByUrl("root/category-details/" + sourcesId);
  }
}
