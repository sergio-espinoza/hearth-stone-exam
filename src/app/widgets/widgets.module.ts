import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from './components';
import { FallbackPipe, JsonParsePipe } from './pipes';

const COMPONENTS = [
  SearchComponent
];
const DIRECTIVES = [];
const PIPES = [
  JsonParsePipe,
  FallbackPipe
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ...COMPONENTS, ...DIRECTIVES, ...PIPES
  ],
  declarations: [
    ...COMPONENTS, ...DIRECTIVES, ...PIPES
  ],
})
export class WidgetsModule { }
