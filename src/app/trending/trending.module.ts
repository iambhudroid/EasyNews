import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrendingPage } from './trending.page';

import { TrendingPageRoutingModule } from './trending-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TrendingPage }]),
    TrendingPageRoutingModule,
  ],
  declarations: [TrendingPage]
})
export class TrendingPageModule {}
