import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryPage } from './category.page'; 
import { CategoryPageRoutingModule } from './category-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule, 
    CategoryPageRoutingModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
