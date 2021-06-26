import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallback'
})

export class FallbackPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (!value || value === 'empty') {
      return arg;
    }
    return value;
  }
}
