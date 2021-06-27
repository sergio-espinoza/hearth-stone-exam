import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDeckPage } from './add-deck.page';

const routes: Routes = [
  {
    path: '',
    component: AddDeckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDeckPageRoutingModule {}
