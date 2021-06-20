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
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntranetPageRoutingModule {}
