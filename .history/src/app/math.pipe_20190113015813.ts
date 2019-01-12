import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'math'
})
export class MathPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
