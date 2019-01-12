import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'math',
})

export class MathPipe implements PipeTransform {

  transform(value: number, args: any = null):any {
      if(value) {
        return Math[args](value);
      }
      return 0;
  }
}
