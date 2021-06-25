import { NgModule } from '@angular/core';
import { JsonParsePipe } from './pipes';

const COMPONENTS = [];
const DIRECTIVES = [];
const PIPES = [
  JsonParsePipe
];

@NgModule({
  imports: [],
  exports: [
    ...COMPONENTS, ...DIRECTIVES, ...PIPES
  ],
  declarations: [
    ...COMPONENTS, ...DIRECTIVES, ...PIPES
  ],
})
export class WidgetsModule { }
