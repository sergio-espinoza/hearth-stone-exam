import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IntranetPageRoutingModule } from './intranet-routing.module';

import { IntranetPage } from './intranet.page';

@NgModule({
  imports: [
    IonicModule,
    IntranetPageRoutingModule
  ],
  declarations: [IntranetPage]
})
export class IntranetPageModule {}
