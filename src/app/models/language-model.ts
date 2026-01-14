/**
 * Idiomas soportados en la aplicación con sus regiones
 * Siguiendo el estándar BCP 47 (language-REGION)
 */
export type AppLanguage = 'es-PE' | 'en-US' | 'pt-BR';

/**
 * Códigos de idioma sin región (para compatibilidad)
 */
export type LanguageCode = 'es' | 'en' | 'pt';

/**
 * Locales de Angular correspondientes
 * Angular usa el mismo formato: language-REGION
 */
export type AngularLocale = 'es-PE' | 'en-US' | 'pt-BR';

/**
 * Configuración completa de un idioma
 */
export interface LanguageConfig {
  /** Código completo del idioma (con región) */
  readonly code: AppLanguage;

  /** Locale de Angular (mismo que code en este caso) */
  readonly locale: AngularLocale;

  /** Código simple del idioma (sin región) */
  readonly languageCode: LanguageCode;

  /** Nombre del idioma en su propio idioma */
  readonly label: string;

  /** Nombre del idioma (con región) */
  readonly labelRgn: string;

  /** URL de la bandera representativa */
  readonly flagUrl: string;

  /** Región/País */
  readonly region: string;
}

/**
 * Configuraciones de todos los idiomas disponibles
 */
export const LANGUAGE_CONFIGS: Record<AppLanguage, LanguageConfig> = {
  'es-PE': {
    code: 'es-PE',
    locale: 'es-PE',
    languageCode: 'es',
    label: 'Español',
    labelRgn: 'Español (Perú)',
    flagUrl: 'https://www.worldometers.info/img/flags/pe-flag.gif',
    region: 'Perú',
  },
  'en-US': {
    code: 'en-US',
    locale: 'en-US',
    languageCode: 'en',
    label: 'English',
    labelRgn: 'English (USA)',
    flagUrl: 'https://www.worldometers.info/img/flags/us-flag.gif',
    region: 'United States',
  },
  'pt-BR': {
    code: 'pt-BR',
    locale: 'pt-BR',
    languageCode: 'pt',
    label: 'Português',
    labelRgn: 'Português (Brasil)',
    flagUrl: 'https://www.worldometers.info/img/flags/br-flag.gif',
    region: 'Brasil',
  },
} as const;

/**
 * Array de todos los idiomas disponibles
 */
export const AVAILABLE_LANGUAGES: readonly AppLanguage[] = ['es-PE', 'en-US', 'pt-BR'] as const;

/**
 * Idioma por defecto de la aplicación
 */
export const DEFAULT_LANGUAGE: AppLanguage = 'es-PE';

/**
 * Mapeo de códigos de idioma a idiomas completos con región
 * Útil para detectar idioma del navegador
 */
export const LANGUAGE_CODE_MAP: Record<LanguageCode, AppLanguage> = {
  es: 'es-PE',
  en: 'en-US',
  pt: 'pt-BR',
} as const;

/**
 * Mapeo de variantes de idioma del navegador a nuestros idiomas
 * Ejemplo: 'es-ES', 'es-MX', 'es-AR' → 'es-PE'
 */
export const BROWSER_LANGUAGE_MAP: Record<string, AppLanguage> = {
  // Español
  es: 'es-PE',
  'es-PE': 'es-PE',
  'es-ES': 'es-PE',
  'es-MX': 'es-PE',
  'es-AR': 'es-PE',
  'es-CO': 'es-PE',
  'es-CL': 'es-PE',

  // Inglés
  en: 'en-US',
  'en-US': 'en-US',
  'en-GB': 'en-US',
  'en-CA': 'en-US',
  'en-AU': 'en-US',

  // Portugués
  pt: 'pt-BR',
  'pt-BR': 'pt-BR',
  'pt-PT': 'pt-BR',
} as const;
