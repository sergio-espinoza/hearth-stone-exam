import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalHomePage } from './principal-home.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalHomePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalHomePageRoutingModule {}
