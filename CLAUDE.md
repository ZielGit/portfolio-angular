# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site built with Angular 21 (standalone components, signals), deployed to GitHub Pages. Multi-language (es-PE default, en-US, pt-BR) via `@ngx-translate/core` with URL-based locale segments.

## Commands

```bash
npm start                 # ng serve, dev server at http://localhost:4200
npm run build              # ng build (production config by default)
npm run build-portfolio    # production build with GH Pages base-href, used by CI deploy
npm test                   # ng test (vitest via @angular/build:unit-test), watch mode
npm run test -- --watch=false            # single run, no watch (used in CI)
npm run test -- --watch=false --coverage # single run with coverage report
npm run lint                # ng lint (angular-eslint)
npm run lint:fix
npm run format               # prettier --write over src/**
npm run format:check
```

To run a single spec file, pass a path filter through to vitest, e.g.:

```bash
npm run test -- src/app/services/personal-data/personal-data.spec.ts --watch=false
```

There is no separate `e2e` script — testing is unit/component-level only (Angular TestBed + vitest).

Husky + lint-staged run on pre-commit (`.husky/pre-commit` → `npx lint-staged`): `*.{ts,js}` get `eslint --fix`, `*.{ts,js,html,scss,css,json,md}` get `prettier --write`.

## Architecture

### Routing & i18n are coupled

Every route is nested under a `:lang` segment (`src/app/app.routes.ts`). There is no locale-free route — `''` redirects to `/${DEFAULT_LANGUAGE}` and unknown paths (`**`) also redirect to the default language root. Page components are lazy-loaded via `loadComponent`.

`LanguageStore` (`src/app/services/language-store/language-store.ts`) is the single source of truth for the active language and is responsible for:

- Reading/validating the `:lang` URL segment on init, falling back to `localStorage` then `navigator.language` (mapped through `BROWSER_LANGUAGE_MAP` in `src/app/models/language-model.ts`) when the URL has none.
- Keeping `ngx-translate`'s active language, `localStorage['language']`, the `document.documentElement.lang` attribute, and the route in sync whenever the language changes (`changeLanguage()`).
- `App.ngOnInit()` (`src/app/app.ts`) calls `languageStore.initLanguage()` once at bootstrap — this must run before any translated content renders.

Supported languages are defined once in `LANGUAGE_CONFIGS`/`AVAILABLE_LANGUAGES`/`DEFAULT_LANGUAGE` (`src/app/models/language-model.ts`). Adding a language means updating that file, registering its Angular locale data in `app.config.ts`, and adding a matching JSON file under `public/i18n/`.

Translation strings live in `public/i18n/{es-PE,en-US,pt-BR}.json`, loaded at runtime via `TranslateHttpLoader` (`./i18n/`). Angular locale data (`registerLocaleData`) is also registered per-language in `app.config.ts` for `LOCALE_ID`-dependent pipes (dates, numbers).

### Data layer: signal-based services, not HTTP APIs

Content (personal info, experience, education, about-me) is hardcoded into Angular signal-based services under `src/app/services/*-data/` (e.g. `PersonalData`, `ExperienceData`, `EducationData`) rather than fetched from a backend. These services expose `computed()` selectors and often combine translated strings with `TranslateService.instant()` (see `PersonalData.translatedSummary`/`formatRoles`) for locale-aware formatted output (e.g. joining a list of skills/roles with a translated separator). Static structured data (arrays of experience/education entries) lives in `src/app/constants/`, typed via `src/app/models/`.

Page sections consume these services directly via `inject()` — there is no NgRx/state-management layer; signals + computed are the state primitives throughout.

### Page structure

`src/app/pages/home/` composes many self-contained "section" components (`sections/banner-section`, `about-section`, `experience-section`, `featured-projects-section`, `more-projects-section`, `contact-section`), each with its own `.ts`/`.html`/`.scss`/`.spec.ts`. `src/app/pages/project/` is a separate route for project detail. `src/app/layout/` holds the persistent `Header`/`Footer` rendered around `<router-outlet>` in `app.html`.

### Styling

Bootstrap 4, Font Awesome, AOS (scroll animations), and `ngx-owl-carousel-o` are loaded globally as prebuilt CSS/JS in `angular.json` (`styles`/`scripts` arrays), not imported per-component. Shared SCSS variables/fonts live in `src/styles/` (`_variables.scss`, `_fonts.scss`) and are made available to component styles via `stylePreprocessorOptions.includePaths` — component `.scss` files can `@use`/`@import` them without relative paths. `AOS.init()` is called once in `App.ngOnInit()`.

### Conventions

- Selector prefix is `app` (`kebab-case` for components, `camelCase` for attribute directives) — enforced by eslint.
- New components are generated with `style: scss` by default (`angular.json` schematics).
- ESLint config (`eslint.config.js`) extends `angular-eslint` recommended + stylistic, with `eslint-config-prettier` to defer formatting to Prettier.
