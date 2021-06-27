import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewDeckPage } from './view-deck.page';

const routes: Routes = [
  {
    path: '',
    component: ViewDeckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewDeckPageRoutingModule {}
