import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { CategoryDetailsPage } from '../category/category-details/category-details.page';

const routes: Routes = [
  {
    path: 'root',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'category',
        loadChildren: () => import('../category/category.module').then(m => m.CategoryPageModule)
      }, 
      {
        path: 'category-details/:id', 
        component: CategoryDetailsPage },
      {
        path: 'trending',
        loadChildren: () => import('../trending/trending.module').then(m => m.TrendingPageModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('../favorite/favorite.module').then(m => m.FavoritePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/root/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/root/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
