import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor',
  standalone: true
})
export class ConversorPipe implements PipeTransform {

  transform(value: number): string {
    let converterAltura = value * 0.01;
    return converterAltura.toFixed(2) + "m";
  }
  
}
