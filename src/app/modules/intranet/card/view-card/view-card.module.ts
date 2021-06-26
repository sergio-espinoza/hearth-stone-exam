import { NgModule } from '@angular/core';
import { ViewCardPageRoutingModule } from './view-card-routing.module';

import { ViewCardPage } from './view-card.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ViewCardPageRoutingModule
  ],
  declarations: [ViewCardPage]
})
export class ViewCardPageModule {}
