import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'principal',
        loadChildren: () =>
          import('./principal-home/principal-home.module').then(m => m.PrincipalHomePageModule)
      },
      {
        path: 'deck',
        loadChildren: () =>
          import('./deck-home/deck-home.module').then(m => m.DeckHomePageModule)
      },
      {
        path: 'card',
        loadChildren: () =>
          import('./card-home/card-home.module').then(m => m.CardHomePageModule)
      },
      {
        path: '', redirectTo: 'principal', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
