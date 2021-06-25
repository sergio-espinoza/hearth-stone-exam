import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonparse'
})

export class JsonParsePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return JSON.parse(value);
  }
}
