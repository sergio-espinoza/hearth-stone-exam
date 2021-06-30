import { NgModule } from '@angular/core';
import { DeckHomePageRoutingModule } from './deck-home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DeckHomePage } from './deck-home.page';

@NgModule({
  imports: [
    SharedModule,
    DeckHomePageRoutingModule
  ],
  declarations: [DeckHomePage]

})
export class DeckHomePageModule { }
