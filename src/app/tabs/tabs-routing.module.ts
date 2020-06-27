import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
  {
    path: 'menu',
    loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('../favorite/favorite.module').then( m => m.FavoritePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('../setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('../location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'promo',
    loadChildren: () => import('../promo/promo.module').then( m => m.PromoPageModule)
  },
  {
    path: 'hours',
    loadChildren: () => import('../hours/hours.module').then( m => m.HoursPageModule)
  },
  {
    path:  '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
]
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
