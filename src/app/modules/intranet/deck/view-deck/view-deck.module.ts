import { NgModule } from '@angular/core';

import { ViewDeckPageRoutingModule } from './view-deck-routing.module';

import { ViewDeckPage } from './view-deck.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ViewDeckPageRoutingModule
  ],
  declarations: [ViewDeckPage]
})
export class ViewDeckPageModule {}
