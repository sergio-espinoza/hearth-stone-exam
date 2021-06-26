import { NgModule } from '@angular/core';

import { EditCardPageRoutingModule } from './edit-card-routing.module';

import { EditCardPage } from './edit-card.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EditCardPageRoutingModule
  ],
  declarations: [EditCardPage]
})
export class EditCardPageModule {}
