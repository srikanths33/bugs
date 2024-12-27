import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;  // return if value is falsy (null, undefined, empty string)

     // Remove spaces, convert to lowercase, then capitalize subsequent words
     return value
     .split(' ')  // Split by spaces into words
     .map((word, index) => {
       if (index === 0) {
         return word.toLowerCase();  // First word should be lowercase
       }
       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  // Capitalize subsequent words
     })
     .join('');  // Join back into a single string without spaces
 }

}

