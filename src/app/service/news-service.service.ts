import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from "@ionic-native/http/ngx";
import { Platform } from '@ionic/angular';
import { from } from 'rxjs';
import * as express from "express";
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const API_URL = environment.NEWS_API_URL;
const API_KEY = environment.NEWS_API_KEY;
   
@Injectable({
  providedIn: "root",
})
export class NewsServiceService {
  constructor(
    private http: HttpClient,
    private nativeHttp: HTTP,
    private platform: Platform
  ) {}
 
  getCategoriesNews() {}

  getSourcesByID(source: String) {
    let url = "top-headlines?sources=" + source;
    let nativeCallResult = this.nativeHttp.get(
      `${API_URL}/${url}&apikey=${API_KEY}`,
      {},
      { "Content-Type": "application/json" }
    );
    return from(nativeCallResult); 

  }

  getAllSources(url: string) {
    let nativeCallResult = this.nativeHttp.get(
      `${API_URL}/${url}&apikey=${API_KEY}`,
      {},
      { "Content-Type": "application/json" }
    );
    return from(nativeCallResult); 
  }

  getTopHeadlines(url) {
    let nativeCallResult =  this.nativeHttp
      .get(
        `${API_URL}/${url}&apikey=${API_KEY}`,
        {},
        { "Content-Type": "application/json" }
      );

    return from(nativeCallResult);
  } 

}
