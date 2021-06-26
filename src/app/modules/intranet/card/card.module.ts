import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';

import { CardPage } from './card.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardListComponent } from './card-list/card-list.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    SharedModule,
    WidgetsModule,
    CardPageRoutingModule
  ],
  declarations: [CardPage, CardListComponent]
})
export class CardPageModule {}
