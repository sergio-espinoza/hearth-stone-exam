import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeckHomePage } from './deck-home.page';

const routes: Routes = [
  {
    path: '',
    component: DeckHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckHomePageRoutingModule {}
