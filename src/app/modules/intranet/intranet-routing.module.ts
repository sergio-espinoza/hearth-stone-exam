import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntranetPage } from './intranet.page';

const routes: Routes = [
  {
    path: '',
    component: IntranetPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      // {
      //   path: 'set',
      //   loadChildren: () => import('./set/set.module').then( m => m.SetPageModule)
      // },
      {
        path: 'add-card',
        loadChildren: () =>
          import('./card/add-card/add-card.module').then(m => m.AddCardPageModule)
      },
      {
        path: 'view-card',
        loadChildren: () =>
          import('./card/view-card/view-card.module').then(m => m.ViewCardPageModule)
      },
      {
        path: 'edit-card',
        loadChildren: () =>
          import('./card/edit-card/edit-card.module').then(m => m.EditCardPageModule)
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntranetPageRoutingModule { }
