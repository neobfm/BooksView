import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'book'
})
export class BookPipe implements PipeTransform {

  transform(value: string, char: string): string {
    return value.replace(char, ' ');

  }

}
