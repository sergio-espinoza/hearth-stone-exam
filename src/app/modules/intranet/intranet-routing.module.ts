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
        path: 'add-deck',
        loadChildren: () =>
          import('./deck/add-deck/add-deck.module').then(m => m.AddDeckPageModule)
      },
      {
        path: 'view-deck',
        loadChildren: () =>
          import('./deck/view-deck/view-deck.module').then(m => m.ViewDeckPageModule)
      },
      {
        path: 'edit-deck',
        loadChildren: () =>
          import('./deck/edit-deck/edit-deck.module').then(m => m.EditDeckPageModule)
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntranetPageRoutingModule { }
