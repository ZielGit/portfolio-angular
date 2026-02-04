export interface SocialLinksModel {
  readonly website?: string;
  readonly linkedin: string;
  readonly github: string;
  readonly twitter?: string;
  readonly portfolio?: string;
  readonly stackoverflow?: string;
  readonly medium?: string;
  readonly dev?: string;
  readonly youtube?: string;
}

/**
 * Tipo para plataformas sociales disponibles
 */
export type SocialPlatform = keyof SocialLinksModel;
