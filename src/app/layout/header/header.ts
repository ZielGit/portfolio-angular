import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
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
import { AnalyticsApi } from 'src/app/services/analytics-api/analytics-api';
import { Language } from 'src/app/services/language/language';

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
  animations: [
    trigger('animateMenu', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(-50%)' }),
          stagger(50, [animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))]),
        ]),
      ]),
    ]),
  ],
})
export class Header implements OnInit {
  private router = inject(Router);
  analyticsApi = inject(AnalyticsApi);
  language = inject(Language);

  responsiveMenuVisible = false;
  pageYPosition: number;
  languageFormControl: UntypedFormControl = new UntypedFormControl();
  cvName = '';

  ngOnInit(): void {
    this.languageFormControl.valueChanges.subscribe(val => this.language.changeLanguage(val));
    this.languageFormControl.setValue(this.language.language);
  }

  scroll(el) {
    if (document.getElementById(el)) {
      document.getElementById(el).scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el).scrollIntoView({ behavior: 'smooth' }));
    }
    this.responsiveMenuVisible = false;
  }

  downloadCV() {
    this.language.translateService.get('Header.cvName').subscribe(val => {
      this.cvName = val;
      console.log(val);
      const url = window.location.href;
      window.open(url + '/../cv/' + this.cvName, '_blank');
    });
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event) {
    this.pageYPosition = window.pageYOffset;
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
  }
}
