import { NgModule } from '@angular/core';

import { PrincipalHomePageRoutingModule } from './principal-home-routing.module';

import { PrincipalHomePage } from './principal-home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

@NgModule({
  imports: [
    SharedModule,
    WidgetsModule,
    PrincipalHomePageRoutingModule
  ],
  declarations: [PrincipalHomePage],
})
export class PrincipalHomePageModule {}
