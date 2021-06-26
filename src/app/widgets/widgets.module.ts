import { NgModule } from '@angular/core';
import { FallbackPipe, JsonParsePipe } from './pipes';

const COMPONENTS = [];
const DIRECTIVES = [];
const PIPES = [
  JsonParsePipe,
  FallbackPipe
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
