import { NgModule } from '@angular/core';

import { EditDeckPageRoutingModule } from './edit-deck-routing.module';

import { EditDeckPage } from './edit-deck.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EditDeckPageRoutingModule
  ],
  declarations: [EditDeckPage]
})
export class EditDeckPageModule { }
