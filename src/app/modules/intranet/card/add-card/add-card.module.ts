import { NgModule } from '@angular/core';

import { AddCardPageRoutingModule } from './add-card-routing.module';

import { AddCardPage } from './add-card.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AddCardPageRoutingModule
  ],
  declarations: [AddCardPage]
})
export class AddCardPageModule {}
