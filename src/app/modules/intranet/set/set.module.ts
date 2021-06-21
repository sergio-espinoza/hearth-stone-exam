import { NgModule } from '@angular/core';
import { SetPageRoutingModule } from './set-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SetPage } from './set.page';

@NgModule({
  imports: [
    SharedModule,
    SetPageRoutingModule
  ],
  declarations: [SetPage]
})
export class SetPageModule {}
