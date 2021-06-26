import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardHomePage } from './card-home.page';

const routes: Routes = [
  {
    path: '',
    component: CardHomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardHomePageRoutingModule {}
