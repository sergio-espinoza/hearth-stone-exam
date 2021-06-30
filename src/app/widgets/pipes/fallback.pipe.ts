import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallback'
})

export class FallbackPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    return (value && value !== 'empty') ? value : arg;
  }
}
