import { NgStyle } from '@angular/common';
import { Component, computed, HostListener, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe } from '@ngx-translate/core';
import { AppLanguage, LANGUAGE_CONFIGS } from '../../models/language-model';
import { AnalyticsApi } from '../../services/analytics-api/analytics-api';
import { CvGenerator } from '../../services/cv-generator/cv-generator';
import { LanguageStore } from '../../services/language-store/language-store';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavContent,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgStyle,
    TranslatePipe,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  analyticsApi = inject(AnalyticsApi);
  private languageStore = inject(LanguageStore);
  private cvGenerator = inject(CvGenerator);

  responsiveMenuVisible = false;
  pageYPosition = 0;

  readonly currentLanguage = computed(() => this.languageStore.language());
  readonly currentLanguageConfig = computed(() => LANGUAGE_CONFIGS[this.currentLanguage()]);
  readonly availableLanguages = computed(() => Object.values(LANGUAGE_CONFIGS));

  previewCV(): void {
    this.cvGenerator.openCVInNewTab();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.pageYPosition = window.pageYOffset;
  }

  changeLanguage(language: AppLanguage): void {
    if (this.languageStore.isDifferentLanguage(language)) {
      this.languageStore.changeLanguage(language);
    }
  }

  isLanguageActive(language: AppLanguage): boolean {
    return this.currentLanguage() === language;
  }
}
