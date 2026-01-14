import { NgStyle } from '@angular/common';
import { Component, computed, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
import { TranslateModule } from '@ngx-translate/core';
import { AppLanguage, LANGUAGE_CONFIGS } from 'src/app/models/language-model';
import { AnalyticsApi } from 'src/app/services/analytics-api/analytics-api';
import { LanguageStore } from 'src/app/services/language-store/language-store';

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
    TranslateModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);
  analyticsApi = inject(AnalyticsApi);
  languageStore = inject(LanguageStore);

  responsiveMenuVisible = false;
  pageYPosition: number;

  readonly currentLanguage = computed(() => this.languageStore.language());
  readonly currentLanguageConfig = computed(() => LANGUAGE_CONFIGS[this.currentLanguage()]);
  readonly availableLanguages = computed(() => Object.values(LANGUAGE_CONFIGS));

  cvName = '';

  scroll(el: string): void {
    const element = document.getElementById(el);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si el elemento no existe, navegar a home primero
      this.router.navigate([`/${this.currentLanguage()}`]).then(() => {
        setTimeout(() => {
          document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV() {
    this.languageStore.translateService.get('Header.cvName').subscribe(val => {
      this.cvName = val;
      console.log(val);
      const url = window.location.href;
      window.open(url + '/../cv/' + this.cvName, '_blank');
    });
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
