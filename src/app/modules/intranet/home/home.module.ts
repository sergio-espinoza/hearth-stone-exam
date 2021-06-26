import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    SharedModule,
    WidgetsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: []
})
export class HomePageModule {}
