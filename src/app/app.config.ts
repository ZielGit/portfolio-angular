import { registerLocaleData } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localeEnUs from '@angular/common/locales/en';
import localeEsPe from '@angular/common/locales/es-PE';
import localePtBr from '@angular/common/locales/pt';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideGoogleAnalytics } from '@hakimio/ngx-google-analytics';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { DEFAULT_LANGUAGE } from './models/language-model';

registerLocaleData(localeEsPe, 'es-PE');
registerLocaleData(localeEnUs, 'en-US');
registerLocaleData(localePtBr, 'pt-BR');

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideGoogleAnalytics(environment.gaMeasurementID),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    {
      provide: LOCALE_ID,
      useFactory: () => {
        const savedLang = localStorage.getItem('language') || DEFAULT_LANGUAGE;
        return savedLang;
      },
    },
  ],
};
