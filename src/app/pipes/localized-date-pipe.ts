import { DatePipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';
import { Language } from '../services/language/language';

@Pipe({
  name: 'localizedDate',
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  private language = inject(Language);

  private readonly localeMap: Record<'es' | 'en' | 'pt_BR', string> = {
    es: 'es',
    en: 'en',
    pt_BR: 'pt-BR',
  };

  transform(value: Date | string | number | null | undefined, format = 'mediumDate'): string | null {
    if (!value) return null;

    // Obtener el locale actual
    const locale = this.localeMap[this.language.language];

    // Usar DatePipe con el locale correcto
    const datePipe = new DatePipe(locale);
    return datePipe.transform(value, format, undefined, locale);
  }
}
