import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntranetPageRoutingModule } from './intranet-routing.module';

import { IntranetPage } from './intranet.page';

@NgModule({
  imports: [
    SharedModule,
    IntranetPageRoutingModule
  ],
  declarations: [IntranetPage]
})
export class IntranetPageModule {}
