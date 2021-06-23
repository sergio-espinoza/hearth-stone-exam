import { NgModule } from '@angular/core';
import { SetPageRoutingModule } from './set-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SetPage } from './set.page';
import { InfoHttpService } from 'src/app/core/http';

@NgModule({
  imports: [
    SharedModule,
    SetPageRoutingModule
  ],
  declarations: [SetPage], providers: [InfoHttpService]

})
export class SetPageModule { }
