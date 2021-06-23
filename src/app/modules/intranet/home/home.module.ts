import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: []
})
export class HomePageModule {}
