import { NgModule } from '@angular/core';

import { CardHomePageRoutingModule } from './card-home-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { CardHomeListComponent } from './card-home-list/card-home-list.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { CardHomePage } from './card-home.page';

@NgModule({
  imports: [
    SharedModule,
    WidgetsModule,
    CardHomePageRoutingModule
  ],
  declarations: [CardHomePage, CardHomeListComponent]
})
export class CardHomePageModule {}
