import { DatePipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';
import { LanguageStore } from '../../services/language-store/language-store';

@Pipe({
  name: 'localizedDate',
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  private languageStore = inject(LanguageStore);

  transform(value: Date | string | number | null | undefined, format = 'mediumDate', timezone?: string): string | null {
    if (!value) return null;

    // Obtener el locale actual del servicio
    const locale = this.languageStore.language();

    // Crear una nueva instancia de DatePipe con el locale correcto
    const datePipe = new DatePipe(locale);

    // Transformar la fecha con el formato y timezone especificados
    return datePipe.transform(value, format, timezone, locale);
  }
}
