import { NgModule } from '@angular/core';
import { DeckHomePageRoutingModule } from './deck-home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DeckHomePage } from './deck-home.page';
import { InfoHttpService } from 'src/app/core/http';

@NgModule({
  imports: [
    SharedModule,
    DeckHomePageRoutingModule
  ],
  declarations: [DeckHomePage], providers: [InfoHttpService]

})
export class DeckHomePageModule { }
