import { NgModule } from '@angular/core';
import { AddDeckPageRoutingModule } from './add-deck-routing.module';

import { AddDeckPage } from './add-deck.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AddDeckPageRoutingModule
  ],
  declarations: [AddDeckPage]
})
export class AddDeckPageModule {}
