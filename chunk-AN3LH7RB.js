import {
  ActivatedRoute,
  AnalyticsApi,
  CommonModule,
  DatePipe,
  LanguageStore,
  LocationStrategy,
  NavigationEnd,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  Router,
  TranslatePipe,
  isPlatformBrowser,
  toObservable
} from "./chunk-VNEUBNGT.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  ErrorHandler,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewChildren,
  __spreadProps,
  __spreadValues,
  computed,
  delay,
  filter,
  first,
  from,
  fromEvent,
  inject,
  input,
  isDevMode,
  map,
  merge,
  of,
  output,
  pairwise,
  setClassMetadata,
  signal,
  skip,
  switchMap,
  take,
  tap,
  toArray,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵviewQuerySignal
} from "./chunk-S262ZFIB.js";

// src/app/pages/home/sections/about-section/about-section.ts
function AboutSection_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "p", 9);
  }
  if (rf & 2) {
    const text_r1 = ctx.$implicit;
    \u0275\u0275domProperty("innerHTML", text_r1, \u0275\u0275sanitizeHtml);
  }
}
var _AboutSection = class _AboutSection {
  constructor() {
    this.analyticsApi = inject(AnalyticsApi);
  }
};
_AboutSection.\u0275fac = function AboutSection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboutSection)();
};
_AboutSection.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutSection, selectors: [["app-about-section"]], decls: 43, vars: 5, consts: [["id", "about", 1, "section", "about"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", 1, "about-title"], [1, "section-title"], [1, "n-section-title"], [1, "row"], [1, "col-12", "col-md-6", "mb-4", "mb-md-0"], [1, "about-description"], ["data-aos", "fade-up", "data-aos-duration", "1000", 3, "innerHTML"], ["data-aos", "fade-up", 1, "skills-list"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "skill-element"], [1, "underline"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "mt-4", "mt-md-0", "text-center"], [1, "about-img-container"], ["width", "270", "src", "images/me.jpg", "alt", "Frans Vilcahuam\xE1n", 1, "rounded", 3, "click"]], template: function AboutSection_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
    \u0275\u0275text(6, "01.");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 6)(10, "div", 7)(11, "div", 8);
    \u0275\u0275repeaterCreate(12, AboutSection_For_13_Template, 1, 1, "p", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275domElementStart(15, "ul", 10)(16, "li", 11)(17, "span", 12);
    \u0275\u0275text(18, "Angular ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "li", 11)(20, "span", 12);
    \u0275\u0275text(21, "Vue 3 ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(22, "li", 11)(23, "span", 12);
    \u0275\u0275text(24, "HTML & (S)CSS ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(25, "li", 11)(26, "span", 12);
    \u0275\u0275text(27, "Laravel ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(28, "li", 11)(29, "span", 12);
    \u0275\u0275text(30, ".NET ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(31, "li", 11)(32, "span", 12);
    \u0275\u0275text(33, "DJango ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "li", 11)(35, "span", 12);
    \u0275\u0275text(36, "Jasmine / Karma (TDD) ");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(37, "li", 11)(38, "span", 12);
    \u0275\u0275text(39, "CI / CD ");
    \u0275\u0275domElementEnd()()()()();
    \u0275\u0275domElementStart(40, "div", 13)(41, "div", 14)(42, "img", 15);
    \u0275\u0275domListener("click", function AboutSection_Template_img_click_42_listener() {
      return ctx.analyticsApi.sendAnalyticEvent("click_image", "about", "image");
    });
    \u0275\u0275domElementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 1, "AboutMe.Title"));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(14, 3, "AboutMe.Paragraphs"));
  }
}, dependencies: [TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.about[_ngcontent-%COMP%]   .about-description[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  max-width: 480px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n  width: 324px;\n  margin: auto;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n  content: "";\n  border: 2px solid #64ffda;\n  z-index: 0;\n  display: block;\n  position: relative;\n  width: 295px;\n  height: 368px;\n  border-radius: 3px;\n  bottom: 360px;\n  left: 14px;\n}\n.about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n}\n.about[_ngcontent-%COMP%]   .skills-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 13px;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  color: #8892b0;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.about[_ngcontent-%COMP%]   .skill-element[_ngcontent-%COMP%]:before {\n  content: "\\25b9";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n  font-size: 14px;\n  line-height: 12px;\n}\n@media (min-width: 992px) and (max-width: 1300px) {\n  .about-img-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    width: 200px;\n    height: 200px;\n    bottom: 190px;\n    left: 74px;\n  }\n}\n@media (max-width: 500px) {\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n  }\n  .about[_ngcontent-%COMP%]   .about-img-container[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=about-section-VKGVRZQX.css.map */'] });
var AboutSection = _AboutSection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutSection, [{
    type: Component,
    args: [{ selector: "app-about-section", imports: [TranslatePipe], template: `<section class="section about" id="about">
  <div class="container">
    <div class="section-box">
      <div class="about-title" data-aos="fade-up">
        <h3 class="section-title"><span class="n-section-title">01.</span> {{ 'AboutMe.Title' | translate }}</h3>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <div class="about-description">
            @for (text of 'AboutMe.Paragraphs' | translate; track text) {
            <p [innerHTML]="text" data-aos="fade-up" data-aos-duration="1000"></p>
            }
            <ul class="skills-list" data-aos="fade-up">
              <li class="skill-element" data-aos="fade-up" data-aos-duration="1000">
                <span class="underline">Angular </span>
              </li>
              <li class="skill-element" data-aos="fade-up" data-aos-duration="1000">
                <span class="underline">Vue 3 </span>
              </li>
              <li class="skill-element" data-aos="fade-up" data-aos-duration="1000">
                <span class="underline">HTML &amp; (S)CSS </span>
              </li>
              <li class="skill-element" data-aos="fade-up" data-aos-duration="1000">
                <span class="underline">Laravel </span>
              </li>
              <li class="skill-element" data-aos="fade-up" data-aos-duration="1000">
                <span class="underline">.NET </span>
              </li>
              <li class="skill-element" data-aos="fade-up" data-aos-duration="1000">
                <span class="underline">DJango </span>
              </li>
              <li class="skill-element" data-aos="fade-up" data-aos-duration="1000">
                <span class="underline">Jasmine / Karma (TDD) </span>
              </li>
              <li class="skill-element" data-aos="fade-up" data-aos-duration="1000">
                <span class="underline">CI / CD </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 mt-4 mt-md-0 text-center" data-aos="fade-up" data-aos-duration="1000">
          <div class="about-img-container">
            <img
              (click)="analyticsApi.sendAnalyticEvent('click_image', 'about', 'image')"
              class="rounded"
              width="270"
              src="images/me.jpg"
              alt="Frans Vilcahuam\xE1n"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/home/sections/about-section/about-section.scss */\n.about .about-description {\n  margin-top: 30px;\n  max-width: 480px;\n}\n.about .about-img-container {\n  width: 324px;\n  margin: auto;\n}\n.about .about-img-container:after {\n  content: "";\n  border: 2px solid #64ffda;\n  z-index: 0;\n  display: block;\n  position: relative;\n  width: 295px;\n  height: 368px;\n  border-radius: 3px;\n  bottom: 360px;\n  left: 14px;\n}\n.about .about-img-container img {\n  z-index: 2;\n  position: relative;\n}\n.about .skills-list {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(140px, 200px));\n  overflow: hidden;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.about .skill-element {\n  position: relative;\n  margin-bottom: 10px;\n  padding-left: 20px;\n  font-size: 13px;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  color: #8892b0;\n}\n.about .skill-element span {\n  padding-bottom: 5px;\n}\n.about .skill-element:before {\n  content: "\\25b9";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n  font-size: 14px;\n  line-height: 12px;\n}\n@media (min-width: 992px) and (max-width: 1300px) {\n  .about-img-container {\n    margin-left: auto;\n    margin-right: 0;\n  }\n}\n@media (max-width: 500px) {\n  .about .about-img-container img {\n    width: 200px;\n    height: 200px;\n  }\n  .about .about-img-container:after {\n    width: 200px;\n    height: 200px;\n    bottom: 190px;\n    left: 74px;\n  }\n}\n@media (max-width: 500px) {\n  .about .about-img-container {\n    width: 100%;\n  }\n  .about .about-img-container img {\n    width: 180px;\n    height: 180px;\n  }\n  .about .about-img-container:after {\n    display: none;\n  }\n}\n/*# sourceMappingURL=about-section-VKGVRZQX.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutSection, { className: "AboutSection", filePath: "src/app/pages/home/sections/about-section/about-section.ts", lineNumber: 11 });
})();

// src/app/pages/home/sections/banner-section/banner-section.ts
var _BannerSection = class _BannerSection {
  constructor() {
    this.analyticsApi = inject(AnalyticsApi);
  }
};
_BannerSection.\u0275fac = function BannerSection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BannerSection)();
};
_BannerSection.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BannerSection, selectors: [["app-banner-section"]], decls: 20, vars: 9, consts: [[1, "section", "banner"], [1, "container", "banner-animate"], [1, "section-box-banner"], [1, "content"], [1, "animate-item"], [1, "banner-title", "animate-item"], [1, "banner-description", "animate-item"], [1, "mt-4", 3, "innerHTML"], [1, "div-btn-banner", "animate-item"], ["href", "mailto:andresjosehr@gmail.com", "target", "_black", 1, "main-btn", 3, "click"]], template: function BannerSection_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 5)(9, "h2");
    \u0275\u0275text(10, "Frans Vilcahuam\xE1n.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "h3");
    \u0275\u0275text(12, "Software Developer");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(13, "div", 6);
    \u0275\u0275domElement(14, "p", 7);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 8)(17, "a", 9);
    \u0275\u0275domListener("click", function BannerSection_Template_a_click_17_listener() {
      return ctx.analyticsApi.sendAnalyticEvent("click_send_mail", "banner", "email");
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "Banner.Pretitle"));
    \u0275\u0275advance(8);
    \u0275\u0275domProperty("innerHTML", \u0275\u0275pipeBind1(15, 5, "Banner.Description"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 7, "Banner.ActionBtn"), " ");
  }
}, dependencies: [TranslatePipe], styles: ["\n\n.banner-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateX(-50px);\n  animation: _ngcontent-%COMP%_slideInFromLeft 250ms cubic-bezier(0.35, 0, 0.25, 1) forwards;\n}\n.banner-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0ms;\n}\n.banner-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 50ms;\n}\n.banner-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 100ms;\n}\n@keyframes _ngcontent-%COMP%_slideInFromLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.banner[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table;\n  height: 100vh;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 98px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #64ffda;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-family:\n    Calibre,\n    San Francisco,\n    SF Pro Text,\n    -apple-system,\n    system-ui,\n    BlinkMacSystemFont,\n    Roboto,\n    Helvetica Neue,\n    Segoe UI,\n    Arial,\n    sans-serif;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #8892b0;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .banner-description[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-box-banner[_ngcontent-%COMP%]   .div-btn-banner[_ngcontent-%COMP%] {\n  height: 43px;\n}\n/*# sourceMappingURL=banner-section-X6WLDVS2.css.map */"] });
var BannerSection = _BannerSection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BannerSection, [{
    type: Component,
    args: [{ selector: "app-banner-section", imports: [TranslatePipe], template: `<section class="section banner">
  <div class="container banner-animate">
    <div class="section-box-banner">
      <div class="content">
        <div class="animate-item">
          <h1>{{ "Banner.Pretitle" | translate }}</h1>
        </div>
        <div class="banner-title animate-item">
          <h2>Frans Vilcahuam\xE1n.</h2>
          <h3>Software Developer</h3>
        </div>
        <div class="banner-description animate-item">
          <p [innerHTML]='"Banner.Description" | translate' class="mt-4"></p>
        </div>
      </div>
      <div class="div-btn-banner animate-item">
        <a
          (click)='analyticsApi.sendAnalyticEvent("click_send_mail", "banner", "email")'
          href="mailto:andresjosehr@gmail.com"
          target="_black"
          class="main-btn"
        >
          {{ "Banner.ActionBtn" | translate }}
        </a>
      </div>
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/home/sections/banner-section/banner-section.scss */\n.banner-animate .animate-item {\n  opacity: 0;\n  transform: translateX(-50px);\n  animation: slideInFromLeft 250ms cubic-bezier(0.35, 0, 0.25, 1) forwards;\n}\n.banner-animate .animate-item:nth-child(1) {\n  animation-delay: 0ms;\n}\n.banner-animate .animate-item:nth-child(2) {\n  animation-delay: 50ms;\n}\n.banner-animate .animate-item:nth-child(3) {\n  animation-delay: 100ms;\n}\n@keyframes slideInFromLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.banner {\n  min-height: 100vh;\n}\n.banner .container {\n  display: table;\n  height: 100vh;\n}\n.banner .container .section-box-banner {\n  display: table-cell;\n  vertical-align: middle;\n}\n.banner .container .section-box-banner .content {\n  margin-top: 98px;\n}\n.banner .container .section-box-banner h1 {\n  color: #64ffda;\n  margin: 0 0 20px 3px;\n  font-size: 16px;\n  font-weight: normal;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n}\n.banner .container .section-box-banner h2,\n.banner .container .section-box-banner h3 {\n  font-weight: 600;\n  font-size: 80px;\n  line-height: 1.1;\n  margin: 0;\n  font-family:\n    Calibre,\n    San Francisco,\n    SF Pro Text,\n    -apple-system,\n    system-ui,\n    BlinkMacSystemFont,\n    Roboto,\n    Helvetica Neue,\n    Segoe UI,\n    Arial,\n    sans-serif;\n}\n.banner .container .section-box-banner h2 {\n  color: #ccd6f6;\n}\n.banner .container .section-box-banner h3 {\n  color: #8892b0;\n}\n.banner .container .section-box-banner .banner-description {\n  margin-bottom: 70px;\n}\n.banner .container .section-box-banner p {\n  max-width: 500px;\n}\n.banner .container .section-box-banner .div-btn-banner {\n  height: 43px;\n}\n/*# sourceMappingURL=banner-section-X6WLDVS2.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BannerSection, { className: "BannerSection", filePath: "src/app/pages/home/sections/banner-section/banner-section.ts", lineNumber: 11 });
})();

// src/app/pages/home/sections/contact-section/contact-section.ts
var _ContactSection = class _ContactSection {
  constructor() {
    this.analyticsApi = inject(AnalyticsApi);
  }
};
_ContactSection.\u0275fac = function ContactSection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactSection)();
};
_ContactSection.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactSection, selectors: [["app-contact-section"]], decls: 17, vars: 12, consts: [["id", "contact", 1, "section"], [1, "container", "contact"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "mb-4"], [1, "contact-pre-title", "big-subtitle"], [1, "e-font", "contact-title", "big-title"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "mt-5"], ["href", "mailto:frans_421_12@hotmail.com", "target", "_blank", "data-aos", "fade-up", "data-aos-duration", "1000", 1, "main-btn", 3, "click"]], template: function ContactSection_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "h4", 5);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "p", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div", 7)(14, "a", 8);
    \u0275\u0275domListener("click", function ContactSection_Template_a_click_14_listener() {
      return ctx.analyticsApi.sendAnalyticEvent("click_send_mail", "contact", "email");
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("05. ", \u0275\u0275pipeBind1(6, 4, "Contact.Pretitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "Contact.Title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "Contact.Content"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "Contact.Btn"), " ");
  }
}, dependencies: [TranslatePipe], styles: ["\n\n.contact[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: auto;\n  width: fit-content;\n}\n.contact[_ngcontent-%COMP%]   .contact-pre-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: #64ffda;\n  font-size: 16px;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-weight: normal;\n  margin-bottom: 20px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .contact[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=contact-section-NQSLY5NA.css.map */"] });
var ContactSection = _ContactSection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactSection, [{
    type: Component,
    args: [{ selector: "app-contact-section", imports: [TranslatePipe], template: `<section class="section" id="contact">
  <div class="container contact">
    <div class="section-box">
      <div class="mb-4" data-aos="fade-up" data-aos-duration="1000">
        <h3 class="contact-pre-title big-subtitle">05. {{ "Contact.Pretitle" | translate }}</h3>
        <h4 class="e-font contact-title big-title">{{ "Contact.Title" | translate }}</h4>
      </div>
      <p data-aos="fade-up" data-aos-duration="1000">{{ "Contact.Content" | translate }}</p>
      <div class="mt-5">
        <a
          (click)="
            analyticsApi.sendAnalyticEvent(
              'click_send_mail',
              'contact',
              'email'
            )
          "
          href="mailto:frans_421_12@hotmail.com"
          target="_blank"
          class="main-btn"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {{ "Contact.Btn" | translate }}
        </a>
      </div>
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/home/sections/contact-section/contact-section.scss */\n.contact {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto;\n  height: 100vh;\n  display: table;\n}\n.contact .container {\n  display: table-cell;\n  vertical-align: middle;\n}\n.contact .contact-title {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 60px;\n  font-weight: 600;\n  color: #ccd6f6;\n  margin: auto;\n  width: fit-content;\n}\n.contact .contact-pre-title {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  margin: 10px 0 40px;\n  width: 100%;\n  white-space: nowrap;\n  font-size: 32px;\n  display: block;\n  color: #64ffda;\n  font-size: 16px;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-weight: normal;\n  margin-bottom: 20px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .contact {\n    height: 100vh;\n    padding: 0 !important;\n    margin: 0 auto !important;\n    display: table;\n  }\n  .contact .container {\n    display: table-cell;\n    vertical-align: middle;\n  }\n}\n/*# sourceMappingURL=contact-section-NQSLY5NA.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactSection, { className: "ContactSection", filePath: "src/app/pages/home/sections/contact-section/contact-section.ts", lineNumber: 11 });
})();

// src/app/pipes/capitalize/capitalize-pipe.ts
var _CapitalizePipe = class _CapitalizePipe {
  transform(value) {
    if (!value)
      return "";
    const trimmed = value.trim();
    if (trimmed.length === 0)
      return "";
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  }
};
_CapitalizePipe.\u0275fac = function CapitalizePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CapitalizePipe)();
};
_CapitalizePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "capitalize", type: _CapitalizePipe, pure: true });
var CapitalizePipe = _CapitalizePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CapitalizePipe, [{
    type: Pipe,
    args: [{
      name: "capitalize"
    }]
  }], null, null);
})();

// src/app/pipes/localized-date/localized-date-pipe.ts
var _LocalizedDatePipe = class _LocalizedDatePipe {
  constructor() {
    this.languageStore = inject(LanguageStore);
  }
  transform(value, format = "mediumDate", timezone) {
    if (!value)
      return null;
    const locale = this.languageStore.language();
    const datePipe = new DatePipe(locale);
    return datePipe.transform(value, format, timezone, locale);
  }
};
_LocalizedDatePipe.\u0275fac = function LocalizedDatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LocalizedDatePipe)();
};
_LocalizedDatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "localizedDate", type: _LocalizedDatePipe, pure: false });
var LocalizedDatePipe = _LocalizedDatePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedDatePipe, [{
    type: Pipe,
    args: [{
      name: "localizedDate",
      pure: false
    }]
  }], null, null);
})();

// src/app/constants/experience-constants.ts
var EXPERIENCE_CONSTANTS = {
  EXP_1: {
    id: "exp-1",
    positionKey: "experience.positions.juniorProg",
    functions: [
      "experience.exp-1.func-1",
      "experience.exp-1.func-2",
      "experience.exp-1.func-3",
      "experience.exp-1.func-4",
      "experience.exp-1.func-5",
      "experience.exp-1.func-6",
      "experience.exp-1.func-7",
      "experience.exp-1.func-8"
    ]
  },
  EXP_2: {
    id: "exp-2",
    positionKey: "experience.positions.juniorLaravelDev",
    functions: [
      "experience.exp-2.func-1",
      "experience.exp-2.func-2",
      "experience.exp-2.func-3",
      "experience.exp-2.func-4",
      "experience.exp-2.func-5",
      "experience.exp-2.func-6",
      "experience.exp-2.func-7",
      "experience.exp-2.func-8"
    ]
  },
  EXP_3: {
    id: "exp-3",
    positionKey: "experience.positions.JuniorDev",
    functions: [
      "experience.exp-3.func-1",
      "experience.exp-3.func-2",
      "experience.exp-3.func-3",
      "experience.exp-3.func-4",
      "experience.exp-3.func-5",
      "experience.exp-3.func-6",
      "experience.exp-3.func-7",
      "experience.exp-3.func-8",
      "experience.exp-3.func-9",
      "experience.exp-3.func-10"
    ]
  },
  EXP_4: {
    id: "exp-4",
    positionKey: "experience.positions.juniorLaravelDev",
    functions: [
      "experience.exp-4.func-1",
      "experience.exp-4.func-2",
      "experience.exp-4.func-3",
      "experience.exp-4.func-4",
      "experience.exp-4.func-5",
      "experience.exp-4.func-6",
      "experience.exp-4.func-7",
      "experience.exp-4.func-8",
      "experience.exp-4.func-9",
      "experience.exp-4.func-10"
    ]
  },
  EXP_5: {
    id: "exp-5",
    positionKey: "experience.positions.seniorLaravelDev",
    functions: [
      "experience.exp-5.func-1",
      "experience.exp-5.func-2",
      "experience.exp-5.func-3",
      "experience.exp-5.func-4",
      "experience.exp-5.func-5",
      "experience.exp-5.func-6",
      "experience.exp-5.func-7",
      "experience.exp-5.func-8",
      "experience.exp-5.func-9",
      "experience.exp-5.func-10",
      "experience.exp-5.func-11",
      "experience.exp-5.func-12",
      "experience.exp-5.func-13"
    ]
  },
  EXP_6: {
    id: "exp-6",
    positionKey: "experience.positions.seniorNETDev",
    functions: [
      "experience.exp-6.func-1",
      "experience.exp-6.func-2",
      "experience.exp-6.func-3",
      "experience.exp-6.func-4",
      "experience.exp-6.func-5",
      "experience.exp-6.func-6",
      "experience.exp-6.func-7",
      "experience.exp-6.func-8",
      "experience.exp-6.func-9"
    ]
  },
  EXP_7: {
    id: "exp-7",
    positionKey: "experience.positions.seniorDev",
    functions: [
      "experience.exp-7.func-1",
      "experience.exp-7.func-2",
      "experience.exp-7.func-3",
      "experience.exp-7.func-4",
      "experience.exp-7.func-5",
      "experience.exp-7.func-6",
      "experience.exp-7.func-7",
      "experience.exp-7.func-8",
      "experience.exp-7.func-9",
      "experience.exp-7.func-10"
    ]
  },
  EXP_8: {
    id: "exp-8",
    positionKey: "experience.positions.ingDev",
    functions: [
      "experience.exp-8.func-1",
      "experience.exp-8.func-2",
      "experience.exp-8.func-3",
      "experience.exp-8.func-4",
      "experience.exp-8.func-5",
      "experience.exp-8.func-6",
      "experience.exp-8.func-7",
      "experience.exp-8.func-8",
      "experience.exp-8.func-9",
      "experience.exp-8.func-10",
      "experience.exp-8.func-11",
      "experience.exp-8.func-12",
      "experience.exp-8.func-13"
    ]
  },
  EXP_9: {
    id: "exp-9",
    positionKey: "experience.positions.seniorDev",
    functions: [
      "experience.exp-9.func-1",
      "experience.exp-9.func-2",
      "experience.exp-9.func-3",
      "experience.exp-9.func-4",
      "experience.exp-9.func-5",
      "experience.exp-9.func-6",
      "experience.exp-9.func-7",
      "experience.exp-9.func-8",
      "experience.exp-9.func-9",
      "experience.exp-9.func-10",
      "experience.exp-9.func-11"
    ]
  }
};

// src/app/services/experience-data/experience-data.ts
var _ExperienceData = class _ExperienceData {
  constructor() {
    this.experiencesData = signal([
      {
        id: EXPERIENCE_CONSTANTS.EXP_1.id,
        company: "Fenix Corporation",
        positionKey: EXPERIENCE_CONSTANTS.EXP_1.positionKey,
        place: "Jun\xEDn, Per\xFA",
        startDate: new Date(2019, 11),
        endDate: new Date(2021, 7),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_1.functions
      },
      {
        id: EXPERIENCE_CONSTANTS.EXP_2.id,
        company: "MiTSoftware",
        positionKey: EXPERIENCE_CONSTANTS.EXP_2.positionKey,
        place: "Barcelona, Espa\xF1a",
        startDate: new Date(2021, 8),
        endDate: new Date(2021, 11),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_2.functions
      },
      {
        id: EXPERIENCE_CONSTANTS.EXP_3.id,
        company: "Freelancer",
        positionKey: EXPERIENCE_CONSTANTS.EXP_3.positionKey,
        place: "Jun\xEDn, Per\xFA",
        startDate: new Date(2022, 0),
        endDate: new Date(2023, 1),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_3.functions
      },
      {
        id: EXPERIENCE_CONSTANTS.EXP_4.id,
        company: "La Preventiva Seguros",
        positionKey: EXPERIENCE_CONSTANTS.EXP_4.positionKey,
        place: "Jun\xEDn, Per\xFA",
        startDate: new Date(2023, 1),
        endDate: new Date(2024, 1),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_4.functions
      },
      {
        id: EXPERIENCE_CONSTANTS.EXP_5.id,
        company: "La Preventiva Seguros",
        positionKey: EXPERIENCE_CONSTANTS.EXP_5.positionKey,
        place: "Jun\xEDn, Per\xFA",
        startDate: new Date(2024, 1),
        endDate: new Date(2024, 4),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_5.functions
      },
      {
        id: EXPERIENCE_CONSTANTS.EXP_6.id,
        company: "UNISCJSA",
        positionKey: EXPERIENCE_CONSTANTS.EXP_6.positionKey,
        place: "Jun\xEDn, Per\xFA",
        startDate: new Date(2024, 4),
        endDate: new Date(2024, 7),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_6.functions
      },
      {
        id: EXPERIENCE_CONSTANTS.EXP_7.id,
        company: "Freelancer",
        positionKey: EXPERIENCE_CONSTANTS.EXP_7.positionKey,
        place: "Lima, Per\xFA",
        startDate: new Date(2024, 8),
        endDate: new Date(2024, 10),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_7.functions
      },
      {
        id: EXPERIENCE_CONSTANTS.EXP_8.id,
        company: "Olitel",
        positionKey: EXPERIENCE_CONSTANTS.EXP_8.positionKey,
        place: "Lima, Per\xFA",
        startDate: new Date(2024, 11),
        endDate: new Date(2025, 2),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_8.functions
      },
      {
        id: EXPERIENCE_CONSTANTS.EXP_9.id,
        company: "Odiseo",
        positionKey: EXPERIENCE_CONSTANTS.EXP_9.positionKey,
        place: "Lima, Per\xFA",
        startDate: new Date(2025, 5),
        endDate: new Date(2025, 7),
        functionKeys: EXPERIENCE_CONSTANTS.EXP_9.functions
      }
    ], ...ngDevMode ? [{ debugName: "experiencesData" }] : []);
    this.sortOptions = signal({
      sortBy: "endDate",
      order: "desc"
    }, ...ngDevMode ? [{ debugName: "sortOptions" }] : []);
    this.experiences = computed(() => {
      const data = this.experiencesData();
      const options = this.sortOptions();
      return this.sortExperiences(data, options);
    }, ...ngDevMode ? [{ debugName: "experiences" }] : []);
  }
  sortExperiences(experiences, options) {
    const { sortBy, order } = options;
    return [...experiences].sort((a, b) => {
      const dateA = this.getDateForSorting(a, sortBy);
      const dateB = this.getDateForSorting(b, sortBy);
      const diff = dateA.getTime() - dateB.getTime();
      return order === "asc" ? diff : -diff;
    });
  }
  getDateForSorting(experience, sortBy) {
    if (sortBy === "endDate") {
      return experience.endDate || /* @__PURE__ */ new Date();
    }
    return experience.startDate;
  }
};
_ExperienceData.\u0275fac = function ExperienceData_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExperienceData)();
};
_ExperienceData.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExperienceData, factory: _ExperienceData.\u0275fac, providedIn: "root" });
var ExperienceData = _ExperienceData;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienceData, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/pages/home/sections/experience-section/experience-section.ts
function ExperienceSection_For_13_ng_template_3_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p", 16);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const funcKey_r2 = ctx.$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, funcKey_r2), \u0275\u0275sanitizeHtml);
  }
}
function ExperienceSection_For_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h5", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "localizedDate");
    \u0275\u0275pipe(8, "capitalize");
    \u0275\u0275pipe(9, "localizedDate");
    \u0275\u0275pipe(10, "capitalize");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, ExperienceSection_For_13_ng_template_3_For_12_Template, 2, 3, "p", 16, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const exp_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, exp_r3.positionKey), " | ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exp_r3.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", exp_r3.place, " | ", \u0275\u0275pipeBind1(8, 10, \u0275\u0275pipeBind2(7, 7, exp_r3.startDate, "MMMM y")), " - ", \u0275\u0275pipeBind1(10, 15, \u0275\u0275pipeBind2(9, 12, exp_r3.endDate, "MMMM y")), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(exp_r3.functionKeys);
  }
}
function ExperienceSection_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "a", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ExperienceSection_For_13_ng_template_3_Template, 13, 17, "ng-template", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    const \u0275$index_20_r4 = ctx.$index;
    \u0275\u0275property("title", exp_r3.company)("ngbNavItem", \u0275$index_20_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r3.company);
  }
}
var _ExperienceSection = class _ExperienceSection {
  constructor() {
    this.experienceData = inject(ExperienceData);
    this.activeTabIndex = signal(0, ...ngDevMode ? [{ debugName: "activeTabIndex" }] : []);
    this.experiences = this.experienceData.experiences;
    this.totalExperiences = computed(() => this.experiences().length, ...ngDevMode ? [{ debugName: "totalExperiences" }] : []);
  }
  selectTab(index) {
    if (index >= 0 && index < this.totalExperiences()) {
      this.activeTabIndex.set(index);
    }
  }
  trackByExperienceId(_index, experience) {
    return experience.id;
  }
};
_ExperienceSection.\u0275fac = function ExperienceSection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExperienceSection)();
};
_ExperienceSection.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceSection, selectors: [["app-experience-section"]], decls: 15, vars: 5, consts: [["nav", "ngbNav"], ["id", "jobs", 1, "section"], [1, "container", "jobs"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "about-title", "mb-5"], [1, "e-font", "section-title"], [1, "code-font", "n-section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "jobs-tabs"], ["ngbNav", "", "orientation", "vertical", 1, "nav-tabs", "jobs-tabs", 3, "activeIdChange", "activeId"], [3, "title", "ngbNavItem"], [1, "mt-2", 3, "ngbNavOutlet"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "title-tab-content"], [1, "company-tab-content"], [1, "job-time"], [1, "job-description", 3, "innerHTML"]], template: function ExperienceSection_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3", 5)(5, "span", 6);
    \u0275\u0275text(6, "02.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "ul", 8, 0);
    \u0275\u0275listener("activeIdChange", function ExperienceSection_Template_ul_activeIdChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectTab($event));
    });
    \u0275\u0275repeaterCreate(12, ExperienceSection_For_13_Template, 4, 3, "li", 9, ctx.trackByExperienceId, true);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const nav_r5 = \u0275\u0275reference(11);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "experience.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("activeId", ctx.activeTabIndex());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.experiences());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngbNavOutlet", nav_r5);
  }
}, dependencies: [
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavContent,
  NgbNavOutlet,
  TranslatePipe,
  LocalizedDatePipe,
  CapitalizePipe
], styles: ['@charset "UTF-8";\n\n\n\n  .jobs .jobs-tabs {\n  display: flex;\n}\n  .jobs .jobs-tabs .tab-content {\n  margin-left: 38px;\n}\n  .jobs .jobs-tabs ul {\n  display: block;\n  width: 210px;\n  border: none;\n}\n  .jobs .jobs-tabs a.active {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a:hover {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n  .jobs .jobs-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 13px;\n  color: #8892b0;\n}\n  .jobs .jobs-tabs li {\n  border-left: 2px solid #303C55;\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: rgb(48, 60, 85);\n}\n.jobs[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%] {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs[_ngcontent-%COMP%]   .title-tab-content[_ngcontent-%COMP%]   .company-tab-content[_ngcontent-%COMP%] {\n  color: #64ffda;\n}\n.jobs[_ngcontent-%COMP%]   .job-time[_ngcontent-%COMP%] {\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: #a8b2d1;\n  margin-bottom: 30px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]:before {\n  content: "\\25b9";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n}\n@media (max-width: 768px) {\n  .jobs[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n    .jobs-tabs {\n    display: block !important;\n  }\n    .jobs-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n    .jobs-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=experience-section-URS2YO4C.css.map */'] });
var ExperienceSection = _ExperienceSection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienceSection, [{
    type: Component,
    args: [{ selector: "app-experience-section", imports: [
      NgbNav,
      NgbNavItem,
      NgbNavItemRole,
      NgbNavLink,
      NgbNavLinkBase,
      NgbNavContent,
      NgbNavOutlet,
      TranslatePipe,
      LocalizedDatePipe,
      CapitalizePipe
    ], template: `<section class="section" id="jobs">
  <div class="container jobs">
    <div class="section-box">
      <div class="about-title mb-5" data-aos="fade-up" data-aos-duration="1000">
        <h3 class="e-font section-title">
          <span class="code-font n-section-title">02.</span>
          {{ "experience.title" | translate }}
        </h3>
      </div>
      <div class="jobs-tabs" data-aos="fade-up" data-aos-duration="1000">
        <ul
          ngbNav
          #nav="ngbNav"
          [activeId]="activeTabIndex()"
          (activeIdChange)="selectTab($event)"
          orientation="vertical"
          class="nav-tabs jobs-tabs"
        >
          @for (exp of experiences(); track trackByExperienceId($index, exp); let i = $index) {
          <li [title]="exp.company" [ngbNavItem]="i">
            <a ngbNavLink>{{ exp.company }}</a>
            <ng-template ngbNavContent>
              <h4 class="title-tab-content">
                {{ exp.positionKey | translate }} |
                <span class="company-tab-content">{{ exp.company }}</span>
              </h4>
              <h5 class="job-time">
                {{ exp.place }} | {{ (exp.startDate | localizedDate : 'MMMM y') | capitalize }} - {{ (exp.endDate |
                localizedDate : 'MMMM y') | capitalize }}
              </h5>

              @for (funcKey of exp.functionKeys; track funcKey) {
              <p class="job-description" [innerHTML]="funcKey | translate"></p>
              }
            </ng-template>
          </li>
          }
        </ul>
        <div [ngbNavOutlet]="nav" class="mt-2"></div>
      </div>
    </div>
  </div>
</section>
`, styles: ['@charset "UTF-8";\n\n/* src/app/pages/home/sections/experience-section/experience-section.scss */\n::ng-deep .jobs .jobs-tabs {\n  display: flex;\n}\n::ng-deep .jobs .jobs-tabs .tab-content {\n  margin-left: 38px;\n}\n::ng-deep .jobs .jobs-tabs ul {\n  display: block;\n  width: 210px;\n  border: none;\n}\n::ng-deep .jobs .jobs-tabs a.active {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n::ng-deep .jobs .jobs-tabs a:hover {\n  background-color: #112240 !important;\n  color: #64ffda !important;\n  border-color: transparent !important;\n  border-radius: 0px;\n}\n::ng-deep .jobs .jobs-tabs a {\n  display: inline-block;\n  -webkit-text-decoration: none;\n  text-decoration: none;\n  -webkit-text-decoration-skip-ink: auto;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  background-color: transparent;\n  height: 42px;\n  padding: 0 20px 2px;\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  text-align: left;\n  white-space: nowrap;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 13px;\n  color: #8892b0;\n}\n::ng-deep .jobs .jobs-tabs li {\n  border-left: 2px solid #303C55;\n  border-left-width: 2px;\n  border-left-style: solid;\n  border-left-color: rgb(48, 60, 85);\n}\n.jobs {\n  margin: auto;\n}\n.jobs .title-tab-content {\n  color: #ccd6f6;\n  font-size: 22px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n.jobs .title-tab-content .company-tab-content {\n  color: #64ffda;\n}\n.jobs .job-time {\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 13px;\n  font-weight: normal;\n  -webkit-letter-spacing: 0.05em;\n  -moz-letter-spacing: 0.05em;\n  -ms-letter-spacing: 0.05em;\n  letter-spacing: 0.05em;\n  color: #a8b2d1;\n  margin-bottom: 30px;\n}\n.jobs .job-description {\n  position: relative;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.jobs .job-description:before {\n  content: "\\25b9";\n  position: absolute;\n  left: 0;\n  color: #64ffda;\n}\n@media (max-width: 768px) {\n  .jobs .job-description {\n    padding: 0px;\n  }\n  ::ng-deep .jobs-tabs {\n    display: block !important;\n  }\n  ::ng-deep .jobs-tabs .tab-content {\n    margin-left: 0px !important;\n  }\n  ::ng-deep .jobs-tabs ul {\n    display: block;\n    width: 100% !important;\n    margin-bottom: 50px;\n  }\n}\n/*# sourceMappingURL=experience-section-URS2YO4C.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceSection, { className: "ExperienceSection", filePath: "src/app/pages/home/sections/experience-section/experience-section.ts", lineNumber: 34 });
})();

// node_modules/ngx-owl-carousel-o/fesm2022/ngx-owl-carousel-o.mjs
var _c0 = (a0, a1, a2, a3, a4) => ({
  "width": a0,
  "transform": a1,
  "transition": a2,
  "padding-left": a3,
  "padding-right": a4
});
var _c1 = (a0, a1, a2, a3) => ({
  "width": a0,
  "margin-left": a1,
  "margin-right": a2,
  "left": a3
});
var _c2 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _forTrack0 = ($index, $item) => $item.id;
function StageComponent_For_3_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function StageComponent_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StageComponent_For_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const slide_r2 = ctx_r3.$implicit;
    const \u0275$index_5_r5 = ctx_r3.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", slide_r2.tplRef)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r2.preparePublicSlide(slide_r2), \u0275$index_5_r5));
  }
}
function StageComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("animationend", function StageComponent_For_3_Template_div_animationend_0_listener() {
      const slide_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clear(slide_r2.id));
    });
    \u0275\u0275conditionalCreate(1, StageComponent_For_3_Conditional_1_Template, 1, 5, null, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", slide_r2.classes)("ngStyle", \u0275\u0275pureFunction4(6, _c1, slide_r2.width + "px", slide_r2.marginL ? slide_r2.marginL + "px" : "", slide_r2.marginR ? slide_r2.marginR + "px" : "", slide_r2.left))("id", slide_r2.id);
    \u0275\u0275attribute("aria-label", "Slide " + ctx_r2.getActualSlideNumber(slide_r2.id) + " of " + ctx_r2.slidesCount())("aria-hidden", !slide_r2.isActive ? "true" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(slide_r2.load ? 1 : -1);
  }
}
var _c3 = ["dot"];
var _c4 = ["navBtn"];
var _c5 = (a0, a1, a2, a3, a4) => ({
  "owl-rtl": a0,
  "owl-loaded": a1,
  "owl-responsive": a2,
  "owl-drag": a3,
  "owl-grab": a4
});
var _c6 = (a0) => ({
  "disabled": a0
});
var _c7 = (a0, a1) => ({
  "isMouseDragable": a0,
  "isTouchDragable": a1
});
var _c8 = (a0, a1) => ({
  "active": a0,
  "owl-dot-text": a1
});
function CarouselComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9, 1);
    \u0275\u0275listener("click", function CarouselComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prev());
    })("keydown", function CarouselComponent_Conditional_3_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNavKeydown($event, "owl-prev"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c6, (tmp_3_0 = ctx_r2.navData()) == null ? null : tmp_3_0.prev == null ? null : tmp_3_0.prev.disabled))("innerHTML", (tmp_4_0 = ctx_r2.navData()) == null ? null : tmp_4_0.prev == null ? null : tmp_4_0.prev.htmlText, \u0275\u0275sanitizeHtml)("disabled", (tmp_5_0 = ctx_r2.navData()) == null ? null : tmp_5_0.prev == null ? null : tmp_5_0.prev.disabled);
  }
}
function CarouselComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "owl-stage", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("owlDraggable", \u0275\u0275pureFunction2(3, _c7, (tmp_2_0 = ctx_r2.owlDOMData()) == null ? null : tmp_2_0.isMouseDragable, (tmp_2_0 = ctx_r2.owlDOMData()) == null ? null : tmp_2_0.isTouchDragable))("stageData", ctx_r2.stageData())("slidesData", ctx_r2.slidesData());
  }
}
function CarouselComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11, 1);
    \u0275\u0275listener("click", function CarouselComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.next());
    })("keydown", function CarouselComponent_Conditional_5_Template_button_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNavKeydown($event, "owl-next"));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c6, (tmp_3_0 = ctx_r2.navData()) == null ? null : tmp_3_0.next == null ? null : tmp_3_0.next.disabled))("innerHTML", (tmp_4_0 = ctx_r2.navData()) == null ? null : tmp_4_0.next == null ? null : tmp_4_0.next.htmlText, \u0275\u0275sanitizeHtml)("disabled", (tmp_5_0 = ctx_r2.navData()) == null ? null : tmp_5_0.next == null ? null : tmp_5_0.next.disabled);
  }
}
function CarouselComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13, 2);
    \u0275\u0275listener("click", function CarouselComponent_Conditional_6_For_2_Template_button_click_0_listener() {
      const dot_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.moveByDot(dot_r6.id));
    })("keydown", function CarouselComponent_Conditional_6_For_2_Template_button_keydown_0_listener($event) {
      const dot_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onDotKeydown($event, dot_r6.id));
    });
    \u0275\u0275element(2, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dot_r6 = ctx.$implicit;
    const \u0275$index_19_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", dot_r6.id)("ngClass", \u0275\u0275pureFunction2(6, _c8, dot_r6.active, dot_r6.showInnerContent));
    \u0275\u0275attribute("aria-label", "Carousel Dot " + (\u0275$index_19_r7 + 1))("aria-current", dot_r6.active ? "true" : null)("tabindex", ctx_r2.defineTabIndexForDots(dot_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", dot_r6.innerContent, \u0275\u0275sanitizeHtml);
  }
}
function CarouselComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, CarouselComponent_Conditional_6_For_2_Template, 3, 9, "button", 12, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c6, (tmp_2_0 = ctx_r2.dotsData()) == null ? null : tmp_2_0.disabled));
    \u0275\u0275advance();
    \u0275\u0275repeater((tmp_3_0 = ctx_r2.dotsData()) == null ? null : tmp_3_0.dots);
  }
}
var OwlCarouselOConfig = class {
  items = 3;
  skip_validateItems = false;
  loop = false;
  center = false;
  rewind = false;
  mouseDrag = true;
  touchDrag = true;
  pullDrag = true;
  freeDrag = false;
  margin = 0;
  stagePadding = 0;
  merge = false;
  mergeFit = true;
  autoWidth = false;
  startPosition = 0;
  rtl = false;
  smartSpeed = 250;
  fluidSpeed = false;
  dragEndSpeed = false;
  responsive = {};
  responsiveRefreshRate = 200;
  // defaults to Navigation
  nav = false;
  navText = ["prev", "next"];
  navSpeed = false;
  slideBy = 1;
  // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  dots = true;
  dotsEach = false;
  dotsData = false;
  dotsSpeed = false;
  // defaults to Autoplay
  autoplay = false;
  autoplayTimeout = 5e3;
  autoplayHoverPause = false;
  autoplaySpeed = false;
  autoplayMouseleaveTimeout = 1;
  // defaults to LazyLoading
  lazyLoad = false;
  lazyLoadEager = 0;
  // defaults to Animate
  slideTransition = "";
  animateOut = false;
  animateIn = false;
  // defaults to AutoHeight
  autoHeight = false;
  // defaults to Hash
  URLhashListener = false;
  constructor() {
  }
};
var OwlOptionsMockedTypes = class {
  items = "number";
  skip_validateItems = "boolean";
  loop = "boolean";
  center = "boolean";
  rewind = "boolean";
  mouseDrag = "boolean";
  touchDrag = "boolean";
  pullDrag = "boolean";
  freeDrag = "boolean";
  margin = "number";
  stagePadding = "number";
  merge = "boolean";
  mergeFit = "boolean";
  autoWidth = "boolean";
  startPosition = "number|string";
  rtl = "boolean";
  smartSpeed = "number";
  fluidSpeed = "boolean";
  dragEndSpeed = "number|boolean";
  responsive = {};
  responsiveRefreshRate = "number";
  // defaults to Navigation
  nav = "boolean";
  navText = "string[]";
  navSpeed = "number|boolean";
  slideBy = "number|string";
  // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  dots = "boolean";
  dotsEach = "number|boolean";
  dotsData = "boolean";
  dotsSpeed = "number|boolean";
  // defaults to Autoplay
  autoplay = "boolean";
  autoplayTimeout = "number";
  autoplayHoverPause = "boolean";
  autoplaySpeed = "number|boolean";
  autoplayMouseleaveTimeout = "number";
  // defaults to LazyLoading
  lazyLoad = "boolean";
  lazyLoadEager = "number";
  // defaults to Animate
  slideTransition = "string";
  animateOut = "string|boolean";
  animateIn = "string|boolean";
  // defaults to AutoHeight
  autoHeight = "boolean";
  // defaults to Hash
  URLhashListener = "boolean";
  constructor() {
  }
};
var OwlLogger = class _OwlLogger {
  errorHandler;
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
  }
  log(value, ...rest) {
    if (isDevMode()) {
      console.log(value, ...rest);
    }
  }
  error(error) {
    this.errorHandler.handleError(error);
  }
  warn(value, ...rest) {
    console.warn(value, ...rest);
  }
  static \u0275fac = function OwlLogger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwlLogger)(\u0275\u0275inject(ErrorHandler));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OwlLogger,
    factory: _OwlLogger.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlLogger, [{
    type: Injectable
  }], () => [{
    type: ErrorHandler
  }], null);
})();
var Type;
(function(Type2) {
  Type2["Event"] = "event";
  Type2["State"] = "state";
})(Type || (Type = {}));
var Width;
(function(Width2) {
  Width2["Default"] = "default";
  Width2["Inner"] = "inner";
  Width2["Outer"] = "outer";
})(Width || (Width = {}));
var CarouselService = class _CarouselService {
  logger;
  /**
   * Subject for passing data needed for managing View
   */
  _viewSettingsShipper$ = new Subject();
  /**
   * Subject for notification when the carousel got initializes
   */
  _initializedCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's settings start changinf
   */
  _changeSettingsCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's settings have changed
   */
  _changedSettingsCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel starts translating or moving
   */
  _translateCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel stopped translating or moving
   */
  _translatedCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
   */
  _resizeCarousel$ = new Subject();
  /**
   * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
   */
  _resizedCarousel$ = new Subject();
  /**
   * Subject for notification when the refresh of carousel starts
   */
  _refreshCarousel$ = new Subject();
  /**
   * Subject for notification when the refresh of carousel is ended
   */
  _refreshedCarousel$ = new Subject();
  /**
   * Subject for notification when the dragging of carousel starts
   */
  _dragCarousel$ = new Subject();
  /**
   * Subject for notification when the dragging of carousel is ended
   */
  _draggedCarousel$ = new Subject();
  /**
   * Current settings for the carousel.
   */
  settings = {
    items: 0
  };
  /**
   * Initial data for setting classes to element .owl-carousel
   */
  owlDOMData = {
    rtl: false,
    isResponsive: false,
    isRefreshed: false,
    isLoaded: false,
    isLoading: false,
    isMouseDragable: false,
    isGrab: false,
    isTouchDragable: false
  };
  /**
   * Initial data of .owl-stage
   */
  stageData = {
    transform: "translate3d(0px,0px,0px)",
    transition: "0s",
    width: 0,
    paddingL: 0,
    paddingR: 0
  };
  /**
   *  Data of every slide
   */
  slidesData;
  /**
   * Data of navigation block
   */
  navData;
  /**
   * Data of dots block
   */
  dotsData;
  /**
   * Carousel width
   */
  _width;
  /**
   * All real items.
   */
  _items = [];
  // is equal to this.slides
  /**
   * Array with width of every slide.
   */
  _widths = [];
  /**
   * Currently suppressed events to prevent them from beeing retriggered.
   */
  _supress = {};
  /**
   * References to the running plugins of this carousel.
   */
  _plugins = {};
  /**
   * Absolute current position.
   */
  _current = null;
  /**
   * All cloned items.
   */
  _clones = [];
  /**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   */
  _mergers = [];
  /**
   * Animation speed in milliseconds.
   */
  _speed = null;
  /**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   */
  _coordinates = [];
  /**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   */
  _breakpoint = null;
  /**
   * Prefix for id of cloned slides
   */
  clonedIdPrefix = "cloned-";
  /**
   * Current options set by the caller including defaults.
   */
  _options = {};
  /**
   * Invalidated parts within the update process.
   */
  _invalidated = {};
  // Is needed for tests
  get invalidated() {
    return this._invalidated;
  }
  /**
   * Current state information and their tags.
   */
  _states = {
    current: {},
    tags: {
      initializing: ["busy"],
      animating: ["busy"],
      dragging: ["interacting"]
    }
  };
  // is needed for tests
  get states() {
    return this._states;
  }
  /**
       * Ordered list of workers for the update process.
   */
  _pipe = [
    // {
    //   filter: ['width', 'settings'],
    //   run: () => {
    //     this._width = this.carouselWindowWidth;
    //   }
    // },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        cache.current = this._items && this._items[this.relative(this._current)]?.id();
      }
    },
    // {
    //   filter: ['items', 'settings'],
    //   run: function() {
    //     // this.$stage.children('.cloned').remove();
    //   }
    // },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        const margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
          "margin-left": rtl ? margin : "",
          "margin-right": rtl ? "" : margin
        };
        if (!grid) {
          this.slidesData.forEach((slide) => {
            slide.marginL = css["margin-left"];
            slide.marginR = css["margin-right"];
          });
        }
        cache.css = css;
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        const width = +(this.width() / (this.settings.items || 1)).toFixed(3) - (this.settings.margin || 0), grid = !this.settings.autoWidth, widths = [];
        let merge2 = 0, iterator = this._items.length;
        cache.items = {
          merge: false,
          width
        };
        while (iterator-- > 0) {
          merge2 = this._mergers[iterator] || 1;
          merge2 = this.settings.mergeFit && Math.min(merge2, this.settings.items || 1) || merge2;
          cache.items.merge = merge2 > 1 || cache.items.merge;
          widths[iterator] = !grid ? this._items[iterator].width() ? this._items[iterator].width() : width : width * merge2;
        }
        this._widths = widths;
        this.slidesData.forEach((slide, i) => {
          slide.width = this._widths[i];
          slide.marginR = cache.css["margin-right"];
          slide.marginL = cache.css["margin-left"];
        });
      }
    },
    {
      filter: ["items", "settings"],
      run: () => {
        const clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2;
        let append = [], prepend = [], repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
        repeat /= 2;
        while (repeat-- > 0) {
          clones.push(this.normalize(clones.length / 2, true));
          append.push(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
          clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
          prepend.unshift(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
        }
        this._clones = clones;
        append = append.map((slide) => __spreadProps(__spreadValues({}, slide), {
          id: `${this.clonedIdPrefix}${slide.id}-append`,
          isActive: false,
          isCloned: true
        }));
        prepend = prepend.map((slide) => __spreadProps(__spreadValues({}, slide), {
          id: `${this.clonedIdPrefix}${slide.id}`,
          isActive: false,
          isCloned: true
        }));
        this.slidesData = prepend.concat(this.slidesData).concat(append);
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: () => {
        const rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, coordinates = [];
        let iterator = -1, previous = 0, current = 0;
        while (++iterator < size) {
          previous = coordinates[iterator - 1] || 0;
          current = this._widths[this.relative(iterator)] + this.settings.margin;
          coordinates.push(previous + current * rtl);
        }
        this._coordinates = coordinates;
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: () => {
        const padding = this.settings.stagePadding || 0, coordinates = this._coordinates, css = {
          "width": Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
          "padding-left": padding || "",
          "padding-right": padding || ""
        };
        this.stageData.width = css.width;
        this.stageData.paddingL = css["padding-left"];
        this.stageData.paddingR = css["padding-right"];
      }
    },
    {
      //   filter: [ 'width', 'items', 'settings' ],
      //   run: cache => {
      // 		// this method sets the width for every slide, but I set it in different way earlier
      // 		const grid = !this.settings.autoWidth,
      // 		items = this.$stage.children(); // use this.slidesData
      //     let iterator = this._coordinates.length;
      //     if (grid && cache.items.merge) {
      //       while (iterator--) {
      //         cache.css.width = this._widths[this.relative(iterator)];
      //         items.eq(iterator).css(cache.css);
      //       }
      //     } else if (grid) {
      //       cache.css.width = cache.items.width;
      //       items.css(cache.css);
      //     }
      //   }
      // }, {
      //   filter: [ 'items' ],
      //   run: function() {
      //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
      //   }
      // }, {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        let current = cache.current ? this.slidesData.findIndex((slide) => slide.id === cache.current) : 0;
        current = Math.max(this.minimum(), Math.min(this.maximum(), current));
        this.reset(current);
      }
    },
    {
      filter: ["position"],
      run: () => {
        this.animate(this.coordinates(this._current));
      }
    },
    {
      filter: ["width", "position", "items", "settings"],
      run: () => {
        const rtl = this.settings.rtl ? 1 : -1, padding = (this.settings.stagePadding || 0) * 2, matches = [];
        let begin, end, inner, outer, i, n;
        begin = this.coordinates(this.current());
        if (typeof begin === "number") {
          begin += padding;
        } else {
          begin = 0;
        }
        end = begin + this.width() * rtl;
        if (rtl === -1 && this.settings.center) {
          const result = this._coordinates.filter((element) => {
            return (this.settings.items || 1) % 2 === 1 ? element >= begin : element > begin;
          });
          begin = result.length ? result[result.length - 1] : begin;
        }
        for (i = 0, n = this._coordinates.length; i < n; i++) {
          inner = Math.ceil(this._coordinates[i - 1] || 0);
          outer = Math.ceil(Math.abs(this._coordinates[i]) + padding * rtl);
          if (this._op(inner, "<=", begin) && this._op(inner, ">", end) || this._op(outer, "<", begin) && this._op(outer, ">", end)) {
            matches.push(i);
          }
        }
        this.slidesData.forEach((slide) => {
          slide.isActive = false;
          return slide;
        });
        matches.forEach((item) => {
          this.slidesData[item].isActive = true;
        });
        if (this.settings.center) {
          this.slidesData.forEach((slide) => {
            slide.isCentered = false;
            return slide;
          });
          if (this.slidesData[this.current()]) {
            this.slidesData[this.current()].isCentered = true;
          }
        }
      }
    }
  ];
  constructor(logger) {
    this.logger = logger;
  }
  /**
   * Makes _viewSettingsShipper$ Subject become Observable
   * @returns Observable of _viewSettingsShipper$ Subject
   */
  getViewCurSettings() {
    return this._viewSettingsShipper$.asObservable();
  }
  /**
   * Makes _initializedCarousel$ Subject become Observable
   * @returns Observable of _initializedCarousel$ Subject
   */
  getInitializedState() {
    return this._initializedCarousel$.asObservable();
  }
  /**
   * Makes _changeSettingsCarousel$ Subject become Observable
   * @returns Observable of _changeSettingsCarousel$ Subject
   */
  getChangeState() {
    return this._changeSettingsCarousel$.asObservable();
  }
  /**
   * Makes _changedSettingsCarousel$ Subject become Observable
   * @returns Observable of _changedSettingsCarousel$ Subject
   */
  getChangedState() {
    return this._changedSettingsCarousel$.asObservable();
  }
  /**
   * Makes _translateCarousel$ Subject become Observable
   * @returns Observable of _translateCarousel$ Subject
   */
  getTranslateState() {
    return this._translateCarousel$.asObservable();
  }
  /**
   * Makes _translatedCarousel$ Subject become Observable
   * @returns Observable of _translatedCarousel$ Subject
   */
  getTranslatedState() {
    return this._translatedCarousel$.asObservable();
  }
  /**
   * Makes _resizeCarousel$ Subject become Observable
   * @returns Observable of _resizeCarousel$ Subject
   */
  getResizeState() {
    return this._resizeCarousel$.asObservable();
  }
  /**
   * Makes _resizedCarousel$ Subject become Observable
   * @returns Observable of _resizedCarousel$ Subject
   */
  getResizedState() {
    return this._resizedCarousel$.asObservable();
  }
  /**
   * Makes _refreshCarousel$ Subject become Observable
   * @returns Observable of _refreshCarousel$ Subject
   */
  getRefreshState() {
    return this._refreshCarousel$.asObservable();
  }
  /**
   * Makes _refreshedCarousel$ Subject become Observable
   * @returns Observable of _refreshedCarousel$ Subject
   */
  getRefreshedState() {
    return this._refreshedCarousel$.asObservable();
  }
  /**
   * Makes _dragCarousel$ Subject become Observable
   * @returns Observable of _dragCarousel$ Subject
   */
  getDragState() {
    return this._dragCarousel$.asObservable();
  }
  /**
   * Makes _draggedCarousel$ Subject become Observable
   * @returns Observable of _draggedCarousel$ Subject
   */
  getDraggedState() {
    return this._draggedCarousel$.asObservable();
  }
  /**
   * Setups custom options expanding default options
   * @param options custom options
   */
  setOptions(options) {
    const configOptions = new OwlCarouselOConfig();
    const checkedOptions = this._validateOptions(options, configOptions);
    this._options = __spreadValues(__spreadValues({}, configOptions), checkedOptions);
  }
  /**
   * Checks whether user's option are set properly. Cheking is based on typings;
   * @param options options set by user
   * @param configOptions default options
   * @returns checked and modified (if it's needed) user's options
   *
   * Notes:
   * 	- if user set option with wrong type, it'll be written in console
   */
  _validateOptions(options, configOptions) {
    const checkedOptions = __spreadValues({}, options);
    const mockedTypes = new OwlOptionsMockedTypes();
    const setRightOption = (type, key) => {
      this.logger.log(`options.${key} must be type of ${type}; ${key}=${options[key]} skipped to defaults: ${key}=${configOptions[key]}`);
      return configOptions[key];
    };
    for (const key in checkedOptions) {
      if (checkedOptions.hasOwnProperty(key)) {
        if (mockedTypes[key] === "number") {
          if (this._isNumeric(checkedOptions[key])) {
            checkedOptions[key] = +checkedOptions[key];
            checkedOptions[key] = key === "items" ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        } else if (mockedTypes[key] === "boolean" && typeof checkedOptions[key] !== "boolean") {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|boolean" && !this._isNumberOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|string" && !this._isNumberOrString(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string|boolean" && !this._isStringOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string[]") {
          if (Array.isArray(checkedOptions[key])) {
            let isString = false;
            checkedOptions[key].forEach((element) => {
              isString = typeof element === "string" ? true : false;
            });
            if (!isString) {
              checkedOptions[key] = setRightOption(mockedTypes[key], key);
            }
            ;
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        }
      }
    }
    return checkedOptions;
  }
  /**
   * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
   * @param items option items set by user
   * @param skip_validateItems option `skip_validateItems` set by user
   * @returns right number of items
   */
  _validateItems(items, skip_validateItems) {
    let result = items;
    if (items > this._items.length) {
      if (skip_validateItems) {
        this.logger.log("The option 'items' in your options is bigger than the number of slides. The navigation got disabled");
      } else {
        result = this._items.length;
        this.logger.log("The option 'items' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled");
      }
    } else {
      if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
        this.logger.log("Option 'items' in your options is equal to the number of slides. So the navigation got disabled");
      }
    }
    return result;
  }
  /**
   * Set current width of carousel
   * @param width width of carousel Window
   */
  setCarouselWidth(width) {
    this._width = width;
  }
  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @param carouselWidth width of carousel
   * @param slides array of slides
   * @param options options set by user
   */
  setup(carouselWidth, slides, options) {
    this.setCarouselWidth(carouselWidth);
    this.setItems(slides);
    this._defineSlidesData();
    this.setOptions(options);
    this.settings = __spreadValues({}, this._options);
    this.setOptionsForViewport();
    this._trigger("change", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
    this.invalidate("settings");
    this._trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }
  /**
   * Set options for current viewport
   */
  setOptionsForViewport() {
    const viewport = this._width, overwrites = this._options.responsive || {};
    let match = -1;
    if (!Object.keys(overwrites).length) {
      return;
    }
    if (!viewport) {
      this.settings.items = 1;
      return;
    }
    for (const key in overwrites) {
      if (overwrites.hasOwnProperty(key)) {
        if (+key <= viewport && +key > match) {
          match = Number(key);
        }
      }
    }
    this.settings = __spreadProps(__spreadValues(__spreadValues({}, this._options), overwrites[match]), {
      items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
    });
    delete this.settings.responsive;
    this.owlDOMData.isResponsive = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    const mergers = [];
    this._items.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge() : 1;
      mergers.push(mergeN);
    });
    this._mergers = mergers;
    this._breakpoint = match;
    this.invalidate("settings");
  }
  /**
   * Initializes the carousel.
   * @param slides array of CarouselSlideDirective
   */
  initialize(slides) {
    this.enter("initializing");
    this.owlDOMData.rtl = this.settings.rtl;
    if (this._mergers.length) {
      this._mergers = [];
    }
    slides.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge() : 1;
      this._mergers.push(mergeN);
    });
    this._clones = [];
    this.reset(this._isNumeric(this.settings.startPosition) ? +(this.settings?.startPosition || 0) : 0);
    this.invalidate("items");
    this.refresh();
    this.owlDOMData.isLoaded = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    this.sendChanges();
    this.leave("initializing");
    this._trigger("initialized");
  }
  /**
   * Sends all data needed for View
   */
  sendChanges() {
    this._viewSettingsShipper$.next({
      owlDOMData: this.owlDOMData,
      stageData: this.stageData,
      slidesData: this.slidesData,
      navData: this.navData,
      dotsData: this.dotsData
    });
  }
  /**
   * Updates option logic if necessery
   */
  _optionsLogic() {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = 0;
      this.settings.merge = false;
    }
  }
  /**
   * Updates the view
   */
  update() {
    let i = 0;
    const n = this._pipe.length, filter2 = (item) => this._invalidated[item], cache = {};
    while (i < n) {
      const filteredPipe = this._pipe[i].filter.filter(filter2);
      if (this._invalidated.all || filteredPipe.length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }
    this.slidesData.forEach((slide) => slide.classes = this.setCurSlideClasses(slide));
    this.sendChanges();
    this._invalidated = {};
    if (!this.is("valid")) {
      this.enter("valid");
    }
  }
  /**
   * Gets the width of the view.
   * @param [dimension=Width.Default] The dimension to return
   * @returns The width of the view in pixel.
   */
  width(dimension) {
    dimension = dimension || Width.Default;
    switch (dimension) {
      case Width.Inner:
      case Width.Outer:
        return this._width;
      default:
        return this._width - (this.settings.stagePadding || 0) * 2 + (this.settings.margin || 0);
    }
  }
  /**
   * Refreshes the carousel primarily for adaptive purposes.
   */
  refresh() {
    this.enter("refreshing");
    this._trigger("refresh");
    this._defineSlidesData();
    this.setOptionsForViewport();
    this._optionsLogic();
    this.update();
    this.leave("refreshing");
    this._trigger("refreshed");
  }
  /**
   * Checks window `resize` event.
   * @param curWidth width of .owl-carousel
   */
  onResize(curWidth) {
    if (!this._items.length) {
      return false;
    }
    this.setCarouselWidth(curWidth);
    this.enter("resizing");
    this._trigger("resize");
    this.invalidate("width");
    this.refresh();
    this.leave("resizing");
    this._trigger("resized");
  }
  /**
   * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @param event - The event arguments.
   * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
   */
  prepareDragging(event) {
    let stage, transformArr;
    transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, "").split(",");
    stage = {
      x: +transformArr[0],
      y: +transformArr[1]
    };
    if (this.is("animating")) {
      this.invalidate("position");
    }
    if (event.type === "mousedown") {
      this.owlDOMData.isGrab = true;
    }
    this.speed(0);
    return stage;
  }
  /**
   * Enters into a 'dragging' state
   */
  enterDragging() {
    this.enter("dragging");
    this._trigger("drag");
  }
  /**
   * Defines new coords for .owl-stage while dragging it
   * @todo #261
   * @param event the event arguments.
   * @param dragData initial data got after starting dragging
   * @returns coords or false
   */
  defineNewCoordsDrag(event, dragData) {
    let minimum, maximum, pull = 0;
    const delta = this.difference(dragData.pointer, this.pointer(event)), stage = this.difference(dragData.stage.start, delta);
    if (!this.is("dragging")) {
      return false;
    }
    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = +this.coordinates(this.maximum() + 1) - minimum;
      stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }
    return stage;
  }
  /**
   * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
   * @todo #261
   * @todo Threshold for click event
   * @param event the event arguments.
   * @param dragObj the object with dragging settings and states
   * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
   */
  finishDragging(event, dragObj, clickAttacher) {
    const directions = ["right", "left"], delta = this.difference(dragObj.pointer, this.pointer(event)), stage = dragObj.stage.current, direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +(this.settings.rtl || 0))];
    let currentSlideI, current, newCurrent;
    if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
      this.speed(+(this.settings.dragEndSpeed || 0) || this.settings.smartSpeed);
      currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
      current = this.current();
      newCurrent = this.current(currentSlideI === -1 ? void 0 : currentSlideI);
      if (current !== newCurrent) {
        this.invalidate("position");
        this.update();
      }
      dragObj.direction = direction;
      if (Math.abs(delta.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - dragObj.time > 300) {
        clickAttacher();
      }
    }
    if (!this.is("dragging")) {
      return;
    }
    this.leave("dragging");
    this._trigger("dragged");
  }
  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @param coordinate The coordinate in pixel.
   * @param direction The direction to check for the closest item. Ether `left` or `right`.
   * @returns The absolute position of the closest item.
   */
  closest(coordinate, direction) {
    const pull = 30, width = this.width();
    let coordinates = this.coordinates(), position = -1;
    if (this.settings.center) {
      coordinates = coordinates.map((item) => {
        if (item === 0) {
          item += 1e-6;
        }
        return item;
      });
    }
    for (let i = 0; i < coordinates.length; i++) {
      if (direction === "left" && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      } else if (direction === "right" && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
        position = i + 1;
      } else if (this._op(coordinate, "<", coordinates[i]) && this._op(coordinate, ">", coordinates[i + 1] || coordinates[i] - width)) {
        position = direction === "left" ? i + 1 : i;
      } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      }
      if (position !== -1) {
        break;
      }
      ;
    }
    if (!this.settings.loop) {
      if (this._op(coordinate, ">", coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this._op(coordinate, "<", coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }
    return position;
  }
  /**
   * Animates the stage.
   * @todo #270
   * @param coordinate The coordinate in pixels.
   */
  animate(coordinate) {
    const animate = this.speed() > 0;
    if (this.is("animating")) {
      this.onTransitionEnd();
    }
    if (animate) {
      this.enter("animating");
      this._trigger("translate");
    }
    this.stageData.transform = "translate3d(" + coordinate + "px,0px,0px)";
    this.stageData.transition = this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "");
  }
  /**
   * Checks whether the carousel is in a specific state or not.
   * @param state The state to check.
   * @returns The flag which indicates if the carousel is busy.
   */
  is(state) {
    return this._states.current[state] && this._states.current[state] > 0;
  }
  /**
   * Sets the absolute position of the current item.
   * @param position The new absolute position or nothing to leave it unchanged.
   * @returns The absolute position of the current item.
   */
  current(position) {
    if (position === void 0) {
      return this._current;
    }
    if (this._items.length === 0) {
      return void 0;
    }
    position = this.normalize(position);
    if (this._current !== position) {
      const event = this._trigger("change", {
        property: {
          name: "position",
          value: position
        }
      });
      this._current = position;
      this.invalidate("position");
      this._trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }
    return this._current;
  }
  /**
   * Invalidates the given part of the update routine.
   * @param part The part to invalidate.
   * @returns The invalidated parts.
   */
  invalidate(part) {
    if (typeof part === "string") {
      this._invalidated[part] = true;
      if (this.is("valid")) {
        this.leave("valid");
      }
    }
    return Object.keys(this._invalidated);
  }
  /**
   * Resets the absolute position of the current item.
   * @param position the absolute position of the new item.
   */
  reset(position) {
    position = this.normalize(position);
    if (position === void 0) {
      return;
    }
    this._speed = 0;
    this._current = position;
    this._suppress(["translate", "translated"]);
    this.animate(this.coordinates(position));
    this._release(["translate", "translated"]);
  }
  /**
   * Normalizes an absolute or a relative position of an item.
   * @param position The absolute or relative position to normalize.
   * @param relative Whether the given position is relative or not.
   * @returns The normalized position.
   */
  normalize(position, relative) {
    const n = this._items.length, m = relative ? 0 : this._clones.length;
    let result = position;
    if (!this._isNumeric(position) || n < 1) {
      result = void 0;
    } else if (position < 0 || position >= n + m) {
      result = ((position - m / 2) % n + n) % n + m / 2;
    }
    return result;
  }
  /**
   * Converts an absolute position of an item into a relative one.
   * @param position The absolute position to convert.
   * @returns The converted position.
   */
  relative(position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  }
  /**
   * Gets the maximum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of maximum position
   */
  maximum(relative = false) {
    const settings = this.settings;
    let maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      reciprocalItemsWidth = this.slidesData[--iterator].width;
      elementWidth = this._width;
      while (iterator-- > 0) {
        reciprocalItemsWidth += +(this.slidesData[iterator].width || 0) + (this.settings.margin || 0);
        if (reciprocalItemsWidth > elementWidth) {
          break;
        }
      }
      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - (settings.items || 1);
    }
    if (relative) {
      maximum -= this._clones.length / 2;
    }
    return Math.max(maximum, 0);
  }
  /**
   * Gets the minimum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of minimum position
   */
  minimum(relative = false) {
    return relative ? 0 : this._clones.length / 2;
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  items(position) {
    if (position === void 0) {
      return this._items.slice();
    }
    position = this.normalize(position, true);
    return [this._items[position]];
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  mergers(position) {
    if (position === void 0) {
      return this._mergers.slice();
    }
    position = this.normalize(position, true);
    return this._mergers[position];
  }
  /**
   * Gets the absolute positions of clones for an item.
   * @param position The relative position of the item.
   * @returns The absolute positions of clones for the item or all if no position was given.
   */
  clones(position) {
    const odd = this._clones.length / 2, even = odd + this._items.length, map2 = (index) => index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
    if (position === void 0) {
      return this._clones.map((v, i) => map2(i));
    }
    return this._clones.map((v, i) => v === position ? map2(i) : null).filter((item) => item !== null);
  }
  /**
   * Sets the current animation speed.
   * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns The current animation speed in milliseconds.
   */
  speed(speed) {
    if (speed !== void 0) {
      this._speed = speed;
    }
    return this._speed;
  }
  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @param position The absolute position of the item within `minimum()` and `maximum()`.
   * @returns The coordinate of the item in pixel or all coordinates.
   */
  coordinates(position) {
    let multiplier = 1, newPosition = (position || 0) - 1, coordinate, result;
    if (position === void 0) {
      result = this._coordinates.map((item, index) => {
        return this.coordinates(index);
      });
      return result;
    }
    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }
      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }
    coordinate = Math.ceil(coordinate);
    return coordinate;
  }
  /**
   * Calculates the speed for a translation.
   * @param from The absolute position of the start item.
   * @param to The absolute position of the target item.
   * @param factor [factor=undefined] - The time factor in milliseconds.
   * @returns The time in milliseconds for the translation.
   */
  _duration(from2, to, factor) {
    if (factor === 0) {
      return 0;
    }
    return Math.min(Math.max(Math.abs(to - from2), 1), 6) * Math.abs(+(factor || 0) || this.settings.smartSpeed || 0);
  }
  /**
   * Slides to the specified item.
   * @param position The position of the item.
   * @param speed The time in milliseconds for the transition.
   */
  to(position, speed) {
    let current = this.current(), revert, distance = position - this.relative(current), maximum = this.maximum(), delayForLoop = 0;
    const direction = +(distance > 0) - +(distance < 0), items = this._items.length, minimum = this.minimum();
    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }
      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;
      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        delayForLoop = 30;
        this.reset(current);
        this.sendChanges();
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }
    setTimeout(() => {
      this.speed(this._duration(current, position, speed));
      this.current(position);
      this.update();
    }, delayForLoop);
  }
  /**
   * Slides to the next item.
   * @param speed The time in milliseconds for the transition.
   */
  next(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  }
  /**
   * Slides to the previous item.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  }
  /**
   * Handles the end of an animation.
   * @param event - The event arguments.
   */
  onTransitionEnd(event) {
    if (event !== void 0) {
      return false;
    }
    this.leave("animating");
    this._trigger("translated");
  }
  /**
   * Gets viewport width.
   * @returns - The width in pixel.
   */
  _viewport() {
    let width;
    if (this._width) {
      width = this._width;
    } else {
      this.logger.log("Can not detect viewport width.");
    }
    return width;
  }
  /**
   * Sets _items
   * @param content The list of slides put into CarouselSlideDirectives.
   */
  setItems(content) {
    this._items = content;
  }
  /**
   * Sets slidesData using this._items
   */
  _defineSlidesData() {
    let loadMap;
    if (this.slidesData && this.slidesData.length) {
      loadMap = /* @__PURE__ */ new Map();
      this.slidesData.forEach((item) => {
        if (item.load) {
          loadMap.set(item.id, item.load);
        }
      });
    }
    this.slidesData = this._items.map((slide) => {
      return {
        id: `${slide.id()}`,
        isActive: false,
        tplRef: slide.tplRef,
        dataMerge: slide.dataMerge(),
        width: 0,
        isCloned: false,
        load: loadMap ? loadMap.get(slide.id()) : false,
        hashFragment: slide.dataHash()
      };
    });
  }
  /**
   * Sets current classes for slide
   * @param slide Slide of carousel
   * @returns object with names of css-classes which are keys and true/false values
   */
  setCurSlideClasses(slide) {
    const currentClasses = {
      "active": slide.isActive || false,
      "center": slide.isCentered || false,
      "cloned": slide.isCloned || false,
      "animated": slide.isAnimated || false,
      "owl-animated-in": slide.isDefAnimatedIn || false,
      "owl-animated-out": slide.isDefAnimatedOut || false
    };
    if (this.settings.animateIn) {
      currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn || false;
    }
    if (this.settings.animateOut) {
      currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut || false;
    }
    if (this.settings.autoHeight) {
      currentClasses["owl-height"] = true;
      currentClasses["height-0"] = slide.heightState === "nulled";
      currentClasses["height-full"] = slide.heightState === "full";
    }
    return currentClasses;
  }
  /**
   * Operators to calculate right-to-left and left-to-right.
   * @param a - The left side operand.
   * @param o - The operator.
   * @param b - The right side operand.
   * @returns true/false meaning right-to-left or left-to-right
   */
  _op(a, o, b) {
    const rtl = this.settings.rtl;
    switch (o) {
      case "<":
        return rtl ? a > b : a < b;
      case ">":
        return rtl ? a < b : a > b;
      case ">=":
        return rtl ? a <= b : a >= b;
      case "<=":
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
    return false;
  }
  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @param name The event name.
   * @param data The event data.
   * @param namespace The event namespace.
   * @param state The state which is associated with the event.
   * @param enter Indicates if the call enters the specified state or not.
   */
  _trigger(name, data, namespace, state, enter) {
    switch (name) {
      case "initialized":
        this._initializedCarousel$.next(name);
        break;
      case "change":
        this._changeSettingsCarousel$.next(data);
        break;
      case "changed":
        this._changedSettingsCarousel$.next(data);
        break;
      case "drag":
        this._dragCarousel$.next(name);
        break;
      case "dragged":
        this._draggedCarousel$.next(name);
        break;
      case "resize":
        this._resizeCarousel$.next(name);
        break;
      case "resized":
        this._resizedCarousel$.next(name);
        break;
      case "refresh":
        this._refreshCarousel$.next(name);
        break;
      case "refreshed":
        this._refreshedCarousel$.next(name);
        break;
      case "translate":
        this._translateCarousel$.next(name);
        break;
      case "translated":
        this._translatedCarousel$.next(name);
        break;
      default:
        break;
    }
  }
  /**
   * Enters a state.
   * @param name - The state name.
   */
  enter(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === void 0) {
        this._states.current[stateName] = 0;
      }
      this._states.current[stateName]++;
    });
  }
  /**
   * Leaves a state.
   * @param name - The state name.
   */
  leave(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === 0 || !!this._states.current[stateName]) {
        this._states.current[stateName]--;
      }
    });
  }
  /**
   * Registers an event or state.
   * @param object - The event or state to register.
   */
  register(object) {
    if (object.type === Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }
      this._states.tags[object.name] = this._states.tags[object.name].filter((tag, i) => {
        return this._states.tags[object.name].indexOf(tag) === i;
      });
    }
  }
  /**
   * Suppresses events.
   * @param events The events to suppress.
   */
  _suppress(events) {
    events.forEach((event) => {
      this._supress[event] = true;
    });
  }
  /**
   * Releases suppressed events.
   * @param events The events to release.
   */
  _release(events) {
    events.forEach((event) => {
      delete this._supress[event];
    });
  }
  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @param event The `mousedown` or `touchstart` event.
   * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
   */
  pointer(event) {
    const result = {
      x: 0,
      y: 0
    };
    event = event.originalEvent || event || window.event;
    event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }
    return result;
  }
  /**
   * Determines if the input is a Number or something that can be coerced to a Number
   * @param number The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number
   */
  _isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  /**
   * Determines whether value is number or boolean type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
   */
  _isNumberOrBoolean(value) {
    return this._isNumeric(value) || typeof value === "boolean";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isNumberOrString(value) {
    return this._isNumeric(value) || typeof value === "string";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isStringOrBoolean(value) {
    return typeof value === "string" || typeof value === "boolean";
  }
  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @param first The first vector.
   * @param second The second vector.
   * @returns The difference.
   */
  difference(first2, second) {
    if (null === first2 || null === second) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: first2.x - second.x,
      y: first2.y - second.y
    };
  }
  static \u0275fac = function CarouselService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselService)(\u0275\u0275inject(OwlLogger));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselService,
    factory: _CarouselService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselService, [{
    type: Injectable
  }], () => [{
    type: OwlLogger
  }], null);
})();
var NavigationService = class _NavigationService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  navSubscription;
  /**
   * Indicates whether the plugin is initialized or not.
   */
  _initialized = false;
  /**
   * The current paging indexes.
   */
  _pages = [];
  /**
   * Data for navigation elements of the user interface.
   */
  _navData = {
    disabled: false,
    prev: {
      disabled: false,
      htmlText: ""
    },
    next: {
      disabled: false,
      htmlText: ""
    }
  };
  /**
   * Data for dot elements of the user interface.
   */
  _dotsData = {
    disabled: false,
    dots: []
  };
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((state) => {
      this.initialize();
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(filter((data) => data.property.name === "position"), tap((data) => {
      this.update();
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap(() => {
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const navMerge$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.navSubscription = navMerge$.subscribe(() => {
    });
  }
  /**
   * Initializes the layout of the plugin and extends the carousel.
   */
  initialize() {
    this._navData.disabled = true;
    this._navData.prev.htmlText = this.carouselService.settings.navText[0];
    this._navData.next.htmlText = this.carouselService.settings.navText[1];
    this._dotsData.disabled = true;
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Calculates internal states and updates prop _pages
   */
  _updateNavPages() {
    let i, j, k;
    const lower = this.carouselService.clones().length / 2, upper = lower + this.carouselService.items().length, maximum = this.carouselService.maximum(true), pages = [], settings = this.carouselService.settings;
    let size = settings.center || settings.autoWidth || settings.dotsData ? 1 : Math.floor(Number(settings.dotsEach)) || Math.floor(settings.items);
    size = +size;
    if (settings.slideBy !== "page") {
      settings.slideBy = Math.min(+settings.slideBy, settings.items);
    }
    if (settings.dots || settings.slideBy === "page") {
      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1
          });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          j = 0, ++k;
        }
        j += this.carouselService.mergers(this.carouselService.relative(i));
      }
    }
    this._pages = pages;
  }
  /**
   * Draws the user interface.
   * @todo The option `dotsData` wont work.
   */
  draw() {
    let difference;
    const settings = this.carouselService.settings, items = this.carouselService.items(), disabled = items.length <= settings.items;
    this._navData.disabled = !settings.nav || disabled;
    this._dotsData.disabled = !settings.dots || disabled;
    if (settings.dots) {
      difference = this._pages.length - this._dotsData.dots.length;
      if (settings.dotsData && difference !== 0) {
        this._dotsData.dots = [];
        items.forEach((item) => {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${item.id}`,
            innerContent: item.dotContent(),
            showInnerContent: true
          });
        });
      } else if (difference > 0) {
        const startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
        for (let i = 0; i < difference; i++) {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${i + startI}`,
            innerContent: "",
            showInnerContent: false
          });
        }
      } else if (difference < 0) {
        this._dotsData.dots.splice(difference, Math.abs(difference));
      }
    }
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Updates navigation buttons's and dots's states
   */
  update() {
    this._updateNavButtons();
    this._updateDots();
  }
  /**
   * Changes state of nav buttons (disabled, enabled)
   */
  _updateNavButtons() {
    const settings = this.carouselService.settings, loop = settings.loop || settings.rewind, index = this.carouselService.relative(this.carouselService.current());
    if (settings.nav) {
      this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
      this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
    }
    this.carouselService.navData = this._navData;
  }
  /**
   * Changes active dot if page becomes changed
   */
  _updateDots() {
    let curActiveDotI;
    if (!this.carouselService.settings.dots) {
      return;
    }
    this._dotsData.dots.forEach((item) => {
      if (item.active === true) {
        item.active = false;
      }
    });
    curActiveDotI = this._current();
    if (this._dotsData.dots.length) {
      this._dotsData.dots[curActiveDotI].active = true;
    }
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Gets the current page position of the carousel.
   * @returns the current page position of the carousel
   */
  _current() {
    const current = this.carouselService.relative(this.carouselService.current());
    let finalCurrent;
    const pages = this._pages.filter((page, index) => {
      return page.start <= current && page.end >= current;
    }).pop();
    finalCurrent = this._pages.findIndex((page) => {
      return page.start === pages.start && page.end === pages.end;
    });
    return finalCurrent;
  }
  /**
   * Gets the current succesor/predecessor position.
   * @param sussessor position of slide
   * @returns the current succesor/predecessor position
   */
  _getPosition(successor) {
    let position, length;
    const settings = this.carouselService.settings;
    if (settings.slideBy === "page") {
      position = this._current();
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[(position % length + length) % length].start;
    } else {
      position = this.carouselService.relative(this.carouselService.current());
      length = this.carouselService.items().length;
      successor ? position += +settings.slideBy : position -= +settings.slideBy;
    }
    return position;
  }
  /**
   * Slides to the next item or page.
   * @param speed The time in milliseconds for the transition.
   */
  next(speed) {
    this.carouselService.to(this._getPosition(true), speed);
  }
  /**
   * Slides to the previous item or page.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    this.carouselService.to(this._getPosition(false), speed);
  }
  /**
  * Slides to the specified item or page.
  * @param position - The position of the item or page.
  * @param speed - The time in milliseconds for the transition.
  * @param standard - Whether to use the standard behaviour or not. Default meaning false
  */
  to(position, speed, standard) {
    let length;
    if (!standard && this._pages.length) {
      length = this._pages.length;
      this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
    } else {
      this.carouselService.to(position, speed);
    }
  }
  /**
   * Moves carousel after user's clicking on any dots
   */
  moveByDot(dotId) {
    const index = this._dotsData.dots.findIndex((dot) => dotId === dot.id);
    this.to(index, this.carouselService.settings.dotsSpeed);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id id of slide
   */
  toSlideById(id) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.id === id && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      console.log(`Slide with id=${id} not found`);
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  static \u0275fac = function NavigationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationService,
    factory: _NavigationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var WINDOW = new InjectionToken("WindowToken");
var WindowRef = class {
  get nativeWindow() {
    throw new Error("Not implemented.");
  }
};
var BrowserWindowRef = class _BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }
  /**
   * @returns window object
   */
  get nativeWindow() {
    return window;
  }
  static \u0275fac = function BrowserWindowRef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserWindowRef)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserWindowRef,
    factory: _BrowserWindowRef.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserWindowRef, [{
    type: Injectable
  }], () => [], null);
})();
function windowFactory(browserWindowRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  const obj = {
    setTimeout: (func, time) => {
    },
    clearTimeout: (a) => {
    }
  };
  return obj;
}
var browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
var windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, PLATFORM_ID]
};
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
var DOCUMENT = new InjectionToken("DocumentToken");
var DocumentRef = class {
  get nativeDocument() {
    throw new Error("Not implemented.");
  }
};
var BrowserDocumentRef = class _BrowserDocumentRef extends DocumentRef {
  constructor() {
    super();
  }
  /**
   * @returns Document object
   */
  get nativeDocument() {
    return document;
  }
  static \u0275fac = function BrowserDocumentRef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserDocumentRef)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserDocumentRef,
    factory: _BrowserDocumentRef.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserDocumentRef, [{
    type: Injectable
  }], () => [], null);
})();
function documentFactory(browserDocumentRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserDocumentRef.nativeDocument;
  }
  const doc = {
    hidden: false,
    visibilityState: "visible"
  };
  return doc;
}
var browserDocumentProvider = {
  provide: DocumentRef,
  useClass: BrowserDocumentRef
};
var documentProvider = {
  provide: DOCUMENT,
  useFactory: documentFactory,
  deps: [DocumentRef, PLATFORM_ID]
};
var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];
var AutoplayService = class _AutoplayService {
  carouselService;
  ngZone;
  /**
   * Subscrioption to merge Observables from CarouselService
   */
  autoplaySubscription;
  /**
   * The autoplay timeout.
   */
  _timeout = null;
  /**
   * Indicates whenever the autoplay is paused.
   */
  _paused = false;
  /**
   * Shows whether the code (the plugin) changed the option 'AutoplayTimeout' for own needs
   */
  _isArtificialAutoplayTimeout;
  /**
   * Shows whether the autoplay is paused for unlimited time by the developer.
   * Use to prevent autoplaying in case of firing `mouseleave` by adding layers to `<body>` like `mat-menu` does
   */
  _isAutoplayStopped = false;
  get isAutoplayStopped() {
    return this._isAutoplayStopped;
  }
  set isAutoplayStopped(value) {
    this._isAutoplayStopped = value;
  }
  winRef;
  docRef;
  constructor(carouselService, winRef, docRef, ngZone) {
    this.carouselService = carouselService;
    this.ngZone = ngZone;
    this.winRef = winRef;
    this.docRef = docRef;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoplaySubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay) {
        this.play();
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      this._handleChangeObservable(data);
    }));
    const resized$ = this.carouselService.getResizedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay && !this._isAutoplayStopped) {
        this.play();
      } else {
        this.stop();
      }
    }));
    const autoplayMerge$ = merge(initializedCarousel$, changedSettings$, resized$);
    this.autoplaySubscription = autoplayMerge$.subscribe(() => {
    });
  }
  /**
     * Starts the autoplay.
     * @param timeout The interval before the next animation starts.
     * @param speed The animation speed for the animations.
     */
  play(timeout, speed) {
    if (this._paused) {
      this._paused = false;
      this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
    }
    if (this.carouselService.is("rotating")) {
      return;
    }
    this.carouselService.enter("rotating");
    this._setAutoPlayInterval();
  }
  /**
     * Gets a new timeout
     * @param timeout - The interval before the next animation starts.
     * @param speed - The animation speed for the animations.
     * @return
     */
  _getNextTimeout(timeout, speed) {
    if (this._timeout) {
      this.winRef.clearTimeout(this._timeout);
    }
    this._isArtificialAutoplayTimeout = timeout ? true : false;
    return this.ngZone.runOutsideAngular(() => {
      return this.winRef.setTimeout(() => {
        this.ngZone.run(() => {
          if (this._paused || this.carouselService.is("busy") || this.carouselService.is("interacting") || this.docRef.hidden) {
            return;
          }
          this.carouselService.next(speed || this.carouselService.settings.autoplaySpeed);
        });
      }, timeout || this.carouselService.settings.autoplayTimeout);
    });
  }
  /**
     * Sets autoplay in motion.
     */
  _setAutoPlayInterval(timeout) {
    this._timeout = this._getNextTimeout(timeout);
  }
  /**
   * Stops the autoplay.
   */
  stop() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
    this.winRef.clearTimeout(this._timeout);
    this.carouselService.leave("rotating");
  }
  /**
     * Stops the autoplay.
     */
  pause() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
  }
  /**
   * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
   * @param data object with current position of carousel and type of change
   */
  _handleChangeObservable(data) {
    if (data.property.name === "settings") {
      if (this.carouselService.settings.autoplay) {
        this.play();
      } else {
        this.stop();
      }
    } else if (data.property.name === "position") {
      if (this.carouselService.settings.autoplay) {
        this._setAutoPlayInterval();
      }
    }
  }
  /**
   * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
   */
  _playAfterTranslated() {
    of("translated").pipe(switchMap((data) => this.carouselService.getTranslatedState()), first(), filter(() => this._isArtificialAutoplayTimeout), tap(() => this._setAutoPlayInterval())).subscribe(() => {
    });
  }
  /**
   * Starts pausing
   */
  startPausing() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.pause();
    }
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayingMouseLeave() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  /**
   * Starts playing after touch ends
   */
  startPlayingTouchEnd() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  static \u0275fac = function AutoplayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoplayService)(\u0275\u0275inject(CarouselService), \u0275\u0275inject(WINDOW), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoplayService,
    factory: _AutoplayService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoplayService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }], null);
})();
var LazyLoadService = class _LazyLoadService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  lazyLoadSubscription;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.lazyLoadSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      const isLazyLoad = this.carouselService.settings && !this.carouselService.settings.lazyLoad;
      this.carouselService.slidesData.forEach((item) => item.load = isLazyLoad ? true : false);
    }));
    const changeSettings$ = this.carouselService.getChangeState();
    const resizedCarousel$ = this.carouselService.getResizedState();
    const lazyLoadMerge$ = merge(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(tap((data) => this._defineLazyLoadSlides(data)));
    this.lazyLoadSubscription = lazyLoadMerge$.subscribe(() => {
    });
  }
  _defineLazyLoadSlides(data) {
    if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
      return;
    }
    if (data.property && data.property.name === "position" || data === "initialized" || data === "resized") {
      const settings = this.carouselService.settings, clones = this.carouselService.clones().length;
      let n = settings.center && Math.ceil(settings.items / 2) || settings.items, i = settings.center && n * -1 || 0, position = (data.property && data.property.value !== void 0 ? data.property.value : this.carouselService.current()) + i;
      if (settings.lazyLoadEager > 0) {
        n += settings.lazyLoadEager;
        if (settings.loop) {
          position -= settings.lazyLoadEager;
          n++;
        }
      }
      while (i++ < n) {
        this._load(clones / 2 + this.carouselService.relative(position));
        if (clones) {
          this.carouselService.clones(this.carouselService.relative(position)).forEach((value) => this._load(value));
        }
        position++;
      }
    }
  }
  /**
     * Loads all resources of an item at the specified position.
     * @param position - The absolute position of the item.
     */
  _load(position) {
    if (this.carouselService.slidesData[position].load) {
      return;
    }
    this.carouselService.slidesData[position].load = true;
  }
  static \u0275fac = function LazyLoadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LazyLoadService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LazyLoadService,
    factory: _LazyLoadService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyLoadService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var AnimateService = class _AnimateService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  animateSubscription;
  /**
   * s
   */
  swapping = true;
  /**
   * active slide before translating
   */
  previous = void 0;
  /**
   * new active slide after translating
   */
  next = void 0;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.animateSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const changeSettings$ = this.carouselService.getChangeState().pipe(tap((data) => {
      if (data.property.name === "position") {
        this.previous = this.carouselService.current();
        this.next = data.property.value;
      }
    }));
    const dragCarousel$ = this.carouselService.getDragState();
    const draggedCarousel$ = this.carouselService.getDraggedState();
    const translatedCarousel$ = this.carouselService.getTranslatedState();
    const dragTranslatedMerge$ = merge(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(tap((data) => this.swapping = data === "translated"));
    const translateCarousel$ = this.carouselService.getTranslateState().pipe(tap((data) => {
      if (this.swapping && (this.carouselService._options.animateOut || this.carouselService._options.animateIn)) {
        this._swap();
      }
    }));
    const animateMerge$ = merge(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
    this.animateSubscription = animateMerge$.subscribe(() => {
    });
  }
  /**
     * Toggles the animation classes whenever an translations starts.
     * @returns
     */
  _swap() {
    if (this.carouselService.settings.items !== 1) {
      return;
    }
    this.carouselService.speed(0);
    let left;
    const previous = this.carouselService.slidesData[this.previous], next = this.carouselService.slidesData[this.next], incoming = this.carouselService.settings.animateIn, outgoing = this.carouselService.settings.animateOut;
    if (this.carouselService.current() === this.previous) {
      return;
    }
    if (outgoing) {
      left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === previous.id) {
          slide.left = `${left}px`;
          slide.isAnimated = true;
          slide.isDefAnimatedOut = true;
          slide.isCustomAnimatedOut = true;
        }
      });
    }
    if (incoming) {
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === next.id) {
          slide.isAnimated = true;
          slide.isDefAnimatedIn = true;
          slide.isCustomAnimatedIn = true;
        }
      });
    }
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.carouselService.slidesData.forEach((slide) => {
      if (slide.id === id) {
        slide.left = "";
        slide.isAnimated = false;
        slide.isDefAnimatedOut = false;
        slide.isCustomAnimatedOut = false;
        slide.isDefAnimatedIn = false;
        slide.isCustomAnimatedIn = false;
        slide.classes = this.carouselService.setCurSlideClasses(slide);
      }
    });
    this.carouselService.onTransitionEnd();
  }
  static \u0275fac = function AnimateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimateService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimateService,
    factory: _AnimateService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var AutoHeightService = class _AutoHeightService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  autoHeightSubscription;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoHeightSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      } else {
        this.carouselService.slidesData.forEach((slide) => slide.heightState = "full");
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight && data.property.name === "position") {
        this.update();
      }
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      }
    }));
    const autoHeight$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$).pipe(tap(() => {
      this.carouselService.slidesData.forEach((slide) => slide.classes = this.carouselService.setCurSlideClasses(slide));
      this.carouselService.sendChanges();
    }));
    this.autoHeightSubscription = autoHeight$.subscribe(() => {
    });
  }
  /**
   * Updates the prop 'heightState' of slides
   */
  update() {
    const items = this.carouselService.settings.items;
    let start = this.carouselService.current(), end = start + items;
    if (this.carouselService.settings.center) {
      start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
      end = items % 2 === 1 ? start + items : start + items + 1;
    }
    this.carouselService.slidesData.forEach((slide, i) => {
      slide.heightState = i >= start && i < end ? "full" : "nulled";
    });
  }
  static \u0275fac = function AutoHeightService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AutoHeightService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoHeightService,
    factory: _AutoHeightService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoHeightService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var HashService = class _HashService {
  carouselService;
  route;
  router;
  /**
   * Subscription to merge Observable from CarouselService
   */
  hashSubscription;
  /**
   * Current url fragment (hash)
   */
  currentHashFragment;
  constructor(carouselService, route, router) {
    this.carouselService = carouselService;
    this.route = route;
    this.router = router;
    this.spyDataStreams();
    if (!this.route) {
      this.route = {
        fragment: of("no route").pipe(take(1))
      };
    }
    ;
    if (!this.router) {
      this.router = {
        navigate: (commands, extras) => {
          return;
        }
      };
    }
  }
  ngOnDestroy() {
    this.hashSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => this.listenToRoute()));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.URLhashListener && data.property.name === "position") {
        const newCurSlide = this.carouselService.current();
        const newCurFragment = this.carouselService.slidesData[newCurSlide].hashFragment;
        if (!newCurFragment || newCurFragment === this.currentHashFragment) {
          return;
        }
        this.router.navigate(["./"], {
          fragment: newCurFragment,
          relativeTo: this.route
        });
      }
    }));
    const hashFragment$ = merge(initializedCarousel$, changedSettings$);
    this.hashSubscription = hashFragment$.subscribe(() => {
    });
  }
  /**
   * rewinds carousel to slide which has the same hashFragment as fragment of current url
   * @param fragment fragment of url
   */
  rewind(fragment) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.hashFragment === fragment && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  /**
   * Initiate listening to ActivatedRoute.fragment
   */
  listenToRoute() {
    const count = this.carouselService.settings.startPosition === "URLHash" ? 0 : 2;
    this.route.fragment.pipe(skip(count)).subscribe((fragment) => {
      this.currentHashFragment = fragment;
      this.rewind(fragment);
    });
  }
  static \u0275fac = function HashService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HashService)(\u0275\u0275inject(CarouselService), \u0275\u0275inject(ActivatedRoute, 8), \u0275\u0275inject(Router, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HashService,
    factory: _HashService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HashService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: ActivatedRoute,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var nextId = 0;
var CarouselSlideDirective = class _CarouselSlideDirective {
  tplRef;
  /**
   * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
   * Will be auto-generated if not provided.
   */
  id = input(`owl-slide-${nextId++}`, ...ngDevMode ? [{
    debugName: "id"
  }] : []);
  /**
   * Defines how much widths of common slide will current slide have
   * e.g. if dataMerge=2, the slide will twice wider then slides with dataMerge=1
   */
  dataMerge = input(1, ...ngDevMode ? [{
    debugName: "dataMerge",
    transform: (data) => {
      return +data || 1;
    }
  }] : [{
    transform: (data) => {
      return +data || 1;
    }
  }]);
  /**
   * Width of slide
   */
  width = input(0, ...ngDevMode ? [{
    debugName: "width"
  }] : []);
  /**
   * Inner content of dot for certain slide; can be html-markup
   */
  dotContent = input("", ...ngDevMode ? [{
    debugName: "dotContent"
  }] : []);
  /**
   * Hash (fragment) of url which corresponds to certain slide
   */
  dataHash = input("", ...ngDevMode ? [{
    debugName: "dataHash"
  }] : []);
  constructor(tplRef) {
    this.tplRef = tplRef;
  }
  /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param - The input to be tested
     * @returns - An indication if the input is a Number or can be coerced to a Number
     */
  isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  static \u0275fac = function CarouselSlideDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselSlideDirective)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CarouselSlideDirective,
    selectors: [["ng-template", "carouselSlide", ""]],
    inputs: {
      id: [1, "id"],
      dataMerge: [1, "dataMerge"],
      width: [1, "width"],
      dotContent: [1, "dotContent"],
      dataHash: [1, "dataHash"]
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselSlideDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[carouselSlide]",
      standalone: false
    }]
  }], () => [{
    type: TemplateRef
  }], {
    id: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "id",
        required: false
      }]
    }],
    dataMerge: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dataMerge",
        required: false
      }]
    }],
    width: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "width",
        required: false
      }]
    }],
    dotContent: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dotContent",
        required: false
      }]
    }],
    dataHash: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "dataHash",
        required: false
      }]
    }]
  });
})();
var ResizeService = class _ResizeService {
  resizeObservable$;
  docRef;
  /**
   * Makes resizeSubject become Observable
   * @returns Observable of resizeSubject
   */
  get onResize$() {
    return this.resizeObservable$.pipe(filter(() => !this.docRef?.fullscreenElement));
  }
  constructor(winRef, docRef, platformId) {
    this.docRef = docRef;
    this.resizeObservable$ = isPlatformBrowser(platformId) ? fromEvent(winRef, "resize") : new Subject().asObservable();
  }
  static \u0275fac = function ResizeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeService)(\u0275\u0275inject(WINDOW), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ResizeService,
    factory: _ResizeService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var StageComponent = class _StageComponent {
  zone;
  el;
  renderer;
  carouselService;
  animateService;
  /**
   * Object with settings which make carousel draggable by touch or mouse
   */
  owlDraggable = input(...ngDevMode ? [void 0, {
    debugName: "owlDraggable"
  }] : []);
  /**
   * Data of owl-stage
   */
  stageData = input(...ngDevMode ? [void 0, {
    debugName: "stageData"
  }] : []);
  /**
   *  Data of every slide
   */
  slidesData = input(...ngDevMode ? [void 0, {
    debugName: "slidesData"
  }] : []);
  /**
   *  The number of actual slides without cloned ones
   */
  slidesCount = computed(() => this.slidesData()?.filter((slide) => !slide.isCloned)?.length, ...ngDevMode ? [{
    debugName: "slidesCount"
  }] : []);
  /**
   * Function wich will be returned after attaching listener to 'mousemove' event
   */
  listenerMouseMove;
  /**
   * Function wich will be returned after attaching listener to 'touchmove' event
   */
  listenerTouchMove;
  /**
   * Function wich will be returned after attaching listener to 'mousemove' event
   */
  listenerOneMouseMove;
  /**
   * Function wich will be returned after attaching listener to 'touchmove' event
   */
  listenerOneTouchMove;
  /**
   * Function wich will be returned after attaching listener to 'mouseup' event
   */
  listenerMouseUp;
  /**
   * Function wich will be returned after attaching listener to 'touchend' event
   */
  listenerTouchEnd;
  /**
   * Function wich will be returned after attaching listener to 'click' event
   */
  listenerOneClick;
  listenerATag;
  /**
   * Object with data needed for dragging
   */
  _drag = {
    time: null,
    target: null,
    pointer: null,
    stage: {
      start: null,
      current: null
    },
    direction: null,
    active: false,
    moving: false
  };
  /**
   * Subject for notification when the carousel's rebuilding caused by resize event starts
   */
  _oneDragMove$ = new Subject();
  /**
   * Subsctiption to _oneDragMove$ Subject
   */
  _oneMoveSubsription;
  preparePublicSlide = (slide) => {
    const newSlide = __spreadValues({}, slide);
    delete newSlide.tplRef;
    return newSlide;
  };
  constructor(zone, el, renderer, carouselService, animateService) {
    this.zone = zone;
    this.el = el;
    this.renderer = renderer;
    this.carouselService = carouselService;
    this.animateService = animateService;
  }
  onMouseDown(event) {
    if (this.owlDraggable()?.isMouseDragable) {
      this._onDragStart(event);
    }
  }
  onTouchStart(event) {
    if (event.targetTouches.length >= 2) {
      return false;
    }
    if (this.owlDraggable()?.isTouchDragable) {
      this._onDragStart(event);
    }
  }
  onTouchCancel(event) {
    this._onDragEnd(event);
  }
  onDragStart() {
    if (this.owlDraggable()?.isMouseDragable) {
      return false;
    }
  }
  onSelectStart() {
    if (this.owlDraggable()?.isMouseDragable) {
      return false;
    }
  }
  ngOnInit() {
    this._oneMoveSubsription = this._oneDragMove$.pipe(first()).subscribe(() => {
      this._sendChanges();
    });
  }
  ngOnDestroy() {
    this._oneMoveSubsription.unsubscribe();
  }
  /**
   * Passes this to _oneMouseTouchMove();
   */
  bindOneMouseTouchMove = (ev) => {
    this._oneMouseTouchMove(ev);
  };
  /**
   * Passes this to _onDragMove();
   */
  bindOnDragMove = (ev) => {
    this._onDragMove(ev);
  };
  /**
   * Passes this to _onDragMove();
   */
  bindOnDragEnd = (ev) => {
    this._onDragEnd(ev);
  };
  /**
   * Handles `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @param event - The event arguments.
   */
  _onDragStart(event) {
    if (event.which === 3) {
      return;
    }
    const stage = this._prepareDragging(event);
    this._drag.time = (/* @__PURE__ */ new Date()).getTime();
    this._drag.target = event.target;
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this._pointer(event);
    this.listenerMouseUp = this.renderer.listen(document, "mouseup", this.bindOnDragEnd);
    this.listenerTouchEnd = this.renderer.listen(document, "touchend", this.bindOnDragEnd);
    this.zone.runOutsideAngular(() => {
      this.listenerOneMouseMove = this.renderer.listen(document, "mousemove", this.bindOneMouseTouchMove);
      this.listenerOneTouchMove = this.renderer.listen(document, "touchmove", this.bindOneMouseTouchMove);
    });
  }
  /**
   * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
   * @param event event objech of mouse or touch event
   */
  _oneMouseTouchMove(event) {
    const delta = this._difference(this._drag.pointer, this._pointer(event));
    if (this.listenerATag) {
      this.listenerATag();
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is("valid")) {
      return;
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is("valid")) {
      return;
    }
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    this._drag.moving = true;
    this.blockClickAnchorInDragging(event);
    this.listenerMouseMove = this.renderer.listen(document, "mousemove", this.bindOnDragMove);
    this.listenerTouchMove = this.renderer.listen(document, "touchmove", this.bindOnDragMove);
    event.preventDefault();
    this._enterDragging();
    this._oneDragMove$.next(event);
  }
  /**
   * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
   * @param event event object
   */
  blockClickAnchorInDragging(event) {
    let target = event.target;
    while (target && !(target instanceof HTMLAnchorElement)) {
      target = target.parentElement;
    }
    if (target instanceof HTMLAnchorElement) {
      this.listenerATag = this.renderer.listen(target, "click", () => false);
    }
  }
  /**
  * Handles the `touchmove` and `mousemove` events.
  * @todo #261
  * @param event - The event arguments.
  */
  _onDragMove(event) {
    let stage;
    const stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);
    if (stageOrExit === false) {
      return;
    }
    stage = stageOrExit;
    event.preventDefault();
    this._drag.stage.current = stage;
    this._animate(stage.x - this._drag.stage.start.x);
  }
  /**
   * Moves .owl-stage left-right
   * @param coordinate coordinate to be set to .owl-stage
   */
  _animate(coordinate) {
    this.renderer.setStyle(this.el.nativeElement.children[0], "transform", `translate3d(${coordinate}px,0px,0px`);
    this.renderer.setStyle(this.el.nativeElement.children[0], "transition", "0s");
  }
  /**
   * Handles the `touchend` and `mouseup` events.
   * @todo #261
   * @todo Threshold for click event
   * @param event - The event arguments.
   */
  _onDragEnd(event) {
    this.carouselService.owlDOMData.isGrab = false;
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    if (this._drag.moving) {
      this.renderer.setStyle(this.el.nativeElement.children[0], "transform", ``);
      this.renderer.setStyle(this.el.nativeElement.children[0], "transition", this.carouselService.speed(+(this.carouselService?.settings?.dragEndSpeed || 0) || this.carouselService.settings.smartSpeed) / 1e3 + "s");
      this._finishDragging(event);
      this.listenerMouseMove();
      this.listenerTouchMove();
    }
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null,
      active: false,
      moving: false
    };
    this.listenerMouseUp();
    this.listenerTouchEnd();
  }
  /**
   * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
   * @param event - The event arguments.
   * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
   */
  _prepareDragging(event) {
    return this.carouselService.prepareDragging(event);
  }
  /**
   * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
   */
  _oneClickHandler = () => {
    this.listenerOneClick = this.renderer.listen(this._drag.target, "click", () => false);
    this.listenerOneClick();
  };
  /**
   * Finishes dragging
   * @param event object event of 'mouseUp' of 'touchend' events
   */
  _finishDragging(event) {
    this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
  }
  /**
   * Gets unified pointer coordinates from event.
   * @param event The `mousedown` or `touchstart` event.
   * @returns Contains `x` and `y` coordinates of current pointer position.
   */
  _pointer(event) {
    return this.carouselService.pointer(event);
  }
  /**
   * Gets the difference of two vectors.
   * @param first The first vector.
   * @param second The second vector.
   * @returns The difference.
   */
  _difference(firstC, second) {
    return this.carouselService.difference(firstC, second);
  }
  /**
   * Checks whether the carousel is in a specific state or not.
   * @param specificState The state to check.
   * @returns The flag which indicates if the carousel is busy.
   */
  _is(specificState) {
    return this.carouselService.is(specificState);
  }
  /**
  * Enters a state.
  * @param name The state name.
  */
  _enter(name) {
    this.carouselService.enter(name);
  }
  /**
   * Sends all data needed for View.
   */
  _sendChanges() {
    this.carouselService.sendChanges();
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
   * Enters into a 'dragging' state
   */
  _enterDragging() {
    this.carouselService.enterDragging();
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.animateService.clear(id);
  }
  getActualSlideNumber(slideId) {
    const originalId = slideId.replace("cloned-", "").replace("-append", "");
    const index = this.slidesData()?.filter((el) => !el.isCloned)?.findIndex((slide) => slide.id === originalId);
    return (index || 0) + 1;
  }
  static \u0275fac = function StageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StageComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(CarouselService), \u0275\u0275directiveInject(AnimateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StageComponent,
    selectors: [["owl-stage"]],
    hostBindings: function StageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
          return ctx.onMouseDown($event);
        })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
          return ctx.onTouchCancel($event);
        })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
          return ctx.onDragStart();
        })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
          return ctx.onSelectStart();
        });
      }
    },
    inputs: {
      owlDraggable: [1, "owlDraggable"],
      stageData: [1, "stageData"],
      slidesData: [1, "slidesData"]
    },
    standalone: false,
    decls: 4,
    vars: 7,
    consts: [[1, "owl-stage", 3, "transitionend", "ngStyle"], ["role", "group", 1, "owl-item", 3, "ngClass", "ngStyle", "id"], ["role", "group", 1, "owl-item", 3, "animationend", "ngClass", "ngStyle", "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0);
        \u0275\u0275listener("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
          return ctx.onTransitionEnd();
        });
        \u0275\u0275repeaterCreate(2, StageComponent_For_3_Template, 2, 11, "div", 1, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction5(1, _c0, ctx.stageData().width + "px", ctx.stageData().transform, ctx.stageData().transition, ctx.stageData().paddingL ? ctx.stageData().paddingL + "px" : "", ctx.stageData().paddingR ? ctx.stageData().paddingR + "px" : ""));
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.slidesData());
      }
    },
    dependencies: [NgClass, NgTemplateOutlet, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StageComponent, [{
    type: Component,
    args: [{
      selector: "owl-stage",
      template: `
    <div>
      <div class="owl-stage" [ngStyle]="{'width': stageData().width + 'px',
                                        'transform': stageData().transform,
                                        'transition': stageData().transition,
                                        'padding-left': stageData().paddingL ? stageData().paddingL + 'px' : '',
                                        'padding-right': stageData().paddingR ? stageData().paddingR + 'px' : '' }"
          (transitionend)="onTransitionEnd()"
      >

        @for(slide of slidesData(); track slide.id; let i = $index) {
          <div class="owl-item" [ngClass]="slide.classes"
                                [ngStyle]="{'width': slide.width + 'px',
                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',
                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',
                                            'left': slide.left}"
                                (animationend)="clear(slide.id)"
                                [id]="slide.id"
                                role="group"
                                [attr.aria-label]="'Slide ' + getActualSlideNumber(slide.id) + ' of ' + slidesCount()"
                                [attr.aria-hidden]="!slide.isActive ? 'true' : null">
              @if(slide.load) {
                <ng-template  [ngTemplateOutlet]="slide.tplRef" [ngTemplateOutletContext]="{ 
                  $implicit: preparePublicSlide(slide), 
                  index: i
                }">
                </ng-template>
              }
          </div><!-- /.owl-item -->
        }  
      
      </div><!-- /.owl-stage -->
    </div>
  `,
      standalone: false
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: CarouselService
  }, {
    type: AnimateService
  }], {
    owlDraggable: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "owlDraggable",
        required: false
      }]
    }],
    stageData: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "stageData",
        required: false
      }]
    }],
    slidesData: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "slidesData",
        required: false
      }]
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onTouchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    onTouchCancel: [{
      type: HostListener,
      args: ["touchcancel", ["$event"]]
    }],
    onDragStart: [{
      type: HostListener,
      args: ["dragstart"]
    }],
    onSelectStart: [{
      type: HostListener,
      args: ["selectstart"]
    }]
  });
})();
var CarouselComponent = class _CarouselComponent {
  el;
  resizeService;
  carouselService;
  navigationService;
  autoplayService;
  lazyLoadService;
  animateService;
  autoHeightService;
  hashService;
  logger;
  changeDetectorRef;
  //  Cannot implement via contentChildren() because of inputs are a little bit late and I get default input values
  // in the case of converting slides to Observable and subscribing to it 
  // when using effect I get endless loop, because it also uses options() input and they fire one after another
  slides;
  dots = viewChildren("dot", ...ngDevMode ? [{
    debugName: "dots"
  }] : []);
  navButtons = viewChildren("navBtn", ...ngDevMode ? [{
    debugName: "navButtons"
  }] : []);
  translated = output();
  dragging = output();
  change = output();
  changed = output();
  initialized = output();
  /**
   * Width of carousel window (tag with class .owl-carousel), in wich we can see moving sliders
   */
  carouselWindowWidth;
  /**
   * Subscription to 'resize' event
   */
  resizeSubscription;
  /**
   * Subscription merge Observable, which merges all Observables in the component except 'resize' Observable and this.slides.changes()
   */
  _allObservSubscription;
  /**
   * Subscription to `this.slides.changes().
   * It could be included in 'this._allObservSubscription', but that subcription get created during the initializing of component
   * and 'this.slides' are undefined at that moment. So it's needed to wait for initialization of content.
   */
  _slidesChangesSubscription;
  /**
   * Current settings for the carousel.
   */
  _owlDOMData = signal(null, ...ngDevMode ? [{
    debugName: "_owlDOMData"
  }] : []);
  owlDOMData = this._owlDOMData.asReadonly();
  /**
   * Data of owl-stage
   */
  _stageData = signal(null, ...ngDevMode ? [{
    debugName: "_stageData"
  }] : []);
  stageData = this._stageData.asReadonly();
  /**
   *  Data of every slide
   */
  _slidesData = signal([], ...ngDevMode ? [{
    debugName: "_slidesData"
  }] : []);
  slidesData = this._slidesData.asReadonly();
  /**
   * Data of navigation block
   */
  _navData = signal(null, ...ngDevMode ? [{
    debugName: "_navData"
  }] : []);
  navData = this._navData.asReadonly();
  /**
   * Data of dots block
   */
  _dotsData = signal(null, ...ngDevMode ? [{
    debugName: "_dotsData"
  }] : []);
  dotsData = this._dotsData.asReadonly();
  /**
   * Data, wich are passed out of carousel after ending of transioning of carousel
   */
  slidesOutputData;
  /**
   * Shows whether carousel is loaded of not.
   */
  _carouselLoaded = signal(false, ...ngDevMode ? [{
    debugName: "_carouselLoaded"
  }] : []);
  carouselLoaded = this._carouselLoaded.asReadonly();
  /**
   * User's options
   */
  options = input(...ngDevMode ? [void 0, {
    debugName: "options"
  }] : []);
  /**
   * Observable for user's options
   * It is used to track changes of options and re-render carousel if needed
   */
  _options$ = toObservable(this.options);
  /**
   * Previous options, used for checking whether options were changed
   */
  _optionsPrevAndCur$;
  /**
   * Observable for getting current View Settings
   */
  _viewCurSettings$;
  /**
   * Observable for catching the end of transition of carousel
   */
  _translatedCarousel$;
  /**
   * Observable for catching the start of dragging of the carousel
   */
  _draggingCarousel$;
  /**
   * Observable for catching the start of changing of the carousel
   */
  _changeCarousel$;
  /**
   * Observable for catching the moment when the data about slides changed, more exactly when the position changed.
   */
  _changedCarousel$;
  /**
   * Observable for catching the initialization of changing the carousel
   */
  _initializedCarousel$;
  /**
   * Observable for merging all Observables and creating one subscription
   */
  _carouselMerge$;
  docRef;
  constructor(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
    this.el = el;
    this.resizeService = resizeService;
    this.carouselService = carouselService;
    this.navigationService = navigationService;
    this.autoplayService = autoplayService;
    this.lazyLoadService = lazyLoadService;
    this.animateService = animateService;
    this.autoHeightService = autoHeightService;
    this.hashService = hashService;
    this.logger = logger;
    this.changeDetectorRef = changeDetectorRef;
    this.docRef = docRef;
  }
  onVisibilityChange(ev) {
    if (!this.carouselService.settings.autoplay) return;
    switch (this.docRef.visibilityState) {
      case "visible":
        !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
        break;
      case "hidden":
        this.autoplayService.pause();
        break;
      default:
        break;
    }
  }
  ngOnInit() {
    this.spyDataStreams();
    this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
  }
  ngAfterContentInit() {
    if (this.slides.toArray().length) {
      this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options());
      this.carouselService.initialize(this.slides.toArray());
      this._winResizeWatcher();
    } else {
      this.logger.log(`There are no slides to show. So the carousel won't be rendered`);
    }
    this._slidesChangesSubscription = this.slides.changes.pipe(tap((slides) => {
      this.carouselService.setup(this.carouselWindowWidth, slides.toArray(), this.options());
      this.carouselService.initialize(slides.toArray());
      if (!slides.toArray().length) {
        this._carouselLoaded.set(false);
      }
      if (slides.toArray().length && !this.resizeSubscription) {
        this._winResizeWatcher();
      }
    })).subscribe(() => {
    });
  }
  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    if (this._slidesChangesSubscription) {
      this._slidesChangesSubscription.unsubscribe();
    }
    if (this._allObservSubscription) {
      this._allObservSubscription.unsubscribe();
    }
  }
  /**
   * Joins the observable login in one place: sets values to some observables, merges this observables and
   * subcribes to merge func
   */
  spyDataStreams() {
    this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(tap((data) => {
      this._owlDOMData.set(data.owlDOMData);
      this._stageData.set(data.stageData);
      this._slidesData.set(data.slidesData);
      if (!this._carouselLoaded()) {
        this._carouselLoaded.set(true);
      }
      this._navData.set(data.navData);
      this._dotsData.set(data.dotsData);
      this.changeDetectorRef.markForCheck();
    }));
    this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.initialized.emit(this.slidesOutputData);
    }));
    this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.translated.emit(this.slidesOutputData);
    }));
    this._changeCarousel$ = this.carouselService.getChangeState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.change.emit(this.slidesOutputData);
    }));
    this._changedCarousel$ = this.carouselService.getChangeState().pipe(switchMap((value) => {
      const changedPosition = of(value).pipe(filter(() => value.property.name === "position"), switchMap(() => from(this._slidesData())), skip(value.property.value), take(this.carouselService?.settings?.items || 0), map((slide) => {
        const clonedIdPrefix = this.carouselService.clonedIdPrefix;
        const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
        return __spreadProps(__spreadValues({}, slide), {
          id,
          isActive: true
        });
      }), toArray(), map((slides) => {
        return {
          slides,
          startPosition: this.carouselService.relative(value.property.value)
        };
      }));
      return merge(changedPosition);
    }), tap((slidesData) => {
      this.gatherTranslatedData();
      this.changed.emit(slidesData?.slides?.length ? slidesData : this.slidesOutputData);
    }));
    this._draggingCarousel$ = this.carouselService.getDragState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.dragging.emit({
        dragging: true,
        data: this.slidesOutputData
      });
    }), switchMap(() => this.carouselService.getDraggedState().pipe(map(() => !!this.carouselService.is("animating")))), switchMap((anim) => {
      if (anim) {
        return this.carouselService.getTranslatedState().pipe(first());
      } else {
        return of("not animating");
      }
    }), tap(() => {
      this.dragging.emit({
        dragging: false,
        data: this.slidesOutputData
      });
    }));
    this._optionsPrevAndCur$ = this._options$.pipe(pairwise(), tap(([prev, cur]) => {
      const slides = this.slides.toArray();
      if (prev) {
        this.carouselService.setup(this.carouselWindowWidth, slides, cur);
        this.carouselService.initialize(slides);
      }
      if (prev && !slides.length) {
        this.logger.log(`There are no slides to show.`);
        this._carouselLoaded.set(false);
      }
      if (!prev) {
        this._carouselLoaded.set(false);
      }
    }));
    this._carouselMerge$ = merge(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$, this._optionsPrevAndCur$);
    this._allObservSubscription = this._carouselMerge$.subscribe(() => {
    });
  }
  /**
   * Init subscription to resize event and attaches handler for this event
   */
  _winResizeWatcher() {
    if (Object.keys(this.carouselService?._options?.responsive || {}).length) {
      this.resizeSubscription = this.resizeService.onResize$.pipe(filter(() => this.carouselWindowWidth !== this.el.nativeElement.querySelector(".owl-carousel").clientWidth), delay(this.carouselService.settings.responsiveRefreshRate || 200)).subscribe(() => {
        this.carouselService.onResize(this.el.nativeElement.querySelector(".owl-carousel").clientWidth);
        this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
      });
    }
  }
  _hasADotFocus() {
    const activeEl = this.docRef?.activeElement;
    return this.dots().some((dotEl) => dotEl.nativeElement === activeEl);
  }
  defineTabIndexForDots(dot) {
    if (!this._carouselLoaded()) return -1;
    if (!this._hasADotFocus() && dot.active) {
      return 0;
    }
    const focusedElId = this.docRef?.activeElement?.id;
    if (this._hasADotFocus() && focusedElId === dot.id) {
      return 0;
    }
    return -1;
  }
  _onArrowKeydown(event, elems, targetId) {
    if (!this._carouselLoaded()) return;
    const isArrowLeft = event.key === "ArrowLeft" || event.code === "ArrowLeft";
    const isArrowRight = event.key === "ArrowRight" || event.code === "ArrowRight";
    if (!isArrowLeft && !isArrowRight) {
      return;
    }
    const curIndex = elems.findIndex((el) => el.nativeElement.id === targetId);
    const futureIndex = isArrowLeft ? (curIndex - 1 + elems.length) % elems.length : (curIndex + 1) % elems.length;
    elems?.[futureIndex]?.nativeElement?.focus();
    return false;
  }
  onDotKeydown(event, dotId) {
    if (!this._carouselLoaded()) return;
    if (event.key === "Enter" || event.code === "Enter") {
      this.navigationService.moveByDot(dotId);
      return false;
    }
    this._onArrowKeydown(event, this.dots() || [], dotId);
  }
  onNavKeydown(event, navId) {
    if (!this._carouselLoaded()) return;
    if (event.key === "Enter" || event.code === "Enter") {
      const navFunctions = {
        "owl-next": () => this.next(),
        "owl-prev": () => this.prev()
      };
      navFunctions[navId]?.();
      return false;
    }
    this._onArrowKeydown(event, this.navButtons() || [], navId);
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
   * Handler for click event, attached to next button
   */
  next() {
    if (!this._carouselLoaded() || this.navData()?.next?.disabled) return;
    this.navigationService.next(this.carouselService.settings.navSpeed || false);
    return false;
  }
  /**
   * Handler for click event, attached to prev button
   */
  prev() {
    if (!this._carouselLoaded() || this.navData()?.prev?.disabled) return;
    this.navigationService.prev(this.carouselService.settings.navSpeed || false);
    return false;
  }
  /**
   * Handler for click event, attached to dots
   */
  moveByDot(dotId) {
    if (!this._carouselLoaded()) return;
    this.navigationService.moveByDot(dotId);
    return false;
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id fragment of url
   */
  to(id) {
    if (!this._carouselLoaded()) return;
    this.navigationService.toSlideById(id);
  }
  /**
   * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
   */
  gatherTranslatedData() {
    let startPosition;
    const clonedIdPrefix = this.carouselService.clonedIdPrefix;
    const activeSlides = this._slidesData().filter((slide) => slide.isActive === true).map((slide) => {
      const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
      return {
        id,
        width: slide.width,
        marginL: slide.marginL,
        marginR: slide.marginR,
        center: slide.isCentered
      };
    });
    startPosition = this.carouselService.relative(this.carouselService.current());
    this.slidesOutputData = {
      startPosition,
      slides: activeSlides
    };
  }
  /**
   * Starts pausing
   */
  startPausing() {
    this.autoplayService.startPausing();
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayML() {
    this.autoplayService.startPlayingMouseLeave();
  }
  /**
   * Starts playing after touch ends
   */
  startPlayTE() {
    this.autoplayService.startPlayingTouchEnd();
  }
  stopAutoplay() {
    this.autoplayService.isAutoplayStopped = true;
    this.autoplayService.stop();
  }
  startAutoplay() {
    this.autoplayService.isAutoplayStopped = false;
    this.autoplayService.play();
  }
  static \u0275fac = function CarouselComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ResizeService), \u0275\u0275directiveInject(CarouselService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(AutoplayService), \u0275\u0275directiveInject(LazyLoadService), \u0275\u0275directiveInject(AnimateService), \u0275\u0275directiveInject(AutoHeightService), \u0275\u0275directiveInject(HashService), \u0275\u0275directiveInject(OwlLogger), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselComponent,
    selectors: [["owl-carousel-o"]],
    contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CarouselSlideDirective, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slides = _t);
      }
    },
    viewQuery: function CarouselComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.dots, _c3, 5);
        \u0275\u0275viewQuerySignal(ctx.navButtons, _c4, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
          return ctx.onVisibilityChange($event);
        }, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      options: [1, "options"]
    },
    outputs: {
      translated: "translated",
      dragging: "dragging",
      change: "change",
      changed: "changed",
      initialized: "initialized"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService])],
    decls: 7,
    vars: 11,
    consts: [["owlCarousel", ""], ["navBtn", ""], ["dot", ""], ["role", "region", "aria-label", "Carousel", 1, "owl-carousel", "owl-theme", 3, "mouseover", "mouseleave", "touchstart", "touchend", "ngClass"], [1, "owl-carousel-inner"], ["id", "owl-prev", "type", "button", "aria-label", "Previous Slide", 1, "owl-prev", 3, "ngClass", "innerHTML", "disabled"], [1, "owl-stage-outer"], ["id", "owl-next", "type", "button", "aria-label", "Next Slide", 1, "owl-next", 3, "ngClass", "innerHTML", "disabled"], ["aria-label", "Carousel Dots Pagination", 1, "owl-dots", 3, "ngClass"], ["id", "owl-prev", "type", "button", "aria-label", "Previous Slide", 1, "owl-prev", 3, "click", "keydown", "ngClass", "innerHTML", "disabled"], [3, "owlDraggable", "stageData", "slidesData"], ["id", "owl-next", "type", "button", "aria-label", "Next Slide", 1, "owl-next", 3, "click", "keydown", "ngClass", "innerHTML", "disabled"], ["type", "button", 1, "owl-dot", 3, "id", "ngClass"], ["type", "button", 1, "owl-dot", 3, "click", "keydown", "id", "ngClass"], [3, "innerHTML"]],
    template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3, 0);
        \u0275\u0275listener("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPausing());
        })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPlayML());
        })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPausing());
        })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPlayTE());
        });
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275conditionalCreate(3, CarouselComponent_Conditional_3_Template, 2, 5, "button", 5);
        \u0275\u0275conditionalCreate(4, CarouselComponent_Conditional_4_Template, 2, 6, "div", 6);
        \u0275\u0275conditionalCreate(5, CarouselComponent_Conditional_5_Template, 2, 5, "button", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, CarouselComponent_Conditional_6_Template, 3, 3, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_4_0;
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(5, _c5, (tmp_1_0 = ctx.owlDOMData()) == null ? null : tmp_1_0.rtl, (tmp_1_0 = ctx.owlDOMData()) == null ? null : tmp_1_0.isLoaded, (tmp_1_0 = ctx.owlDOMData()) == null ? null : tmp_1_0.isResponsive, (tmp_1_0 = ctx.owlDOMData()) == null ? null : tmp_1_0.isMouseDragable, (tmp_1_0 = ctx.owlDOMData()) == null ? null : tmp_1_0.isGrab));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.slides.toArray().length && !((tmp_2_0 = ctx.navData()) == null ? null : tmp_2_0.disabled) ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.carouselLoaded() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.slides.toArray().length && !((tmp_4_0 = ctx.navData()) == null ? null : tmp_4_0.disabled) ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.slides.toArray().length ? 6 : -1);
      }
    },
    dependencies: [NgClass, StageComponent],
    styles: [".owl-theme[_ngcontent-%COMP%]{display:block}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "owl-carousel-o",
      template: `
    <div role="region" aria-label="Carousel" class="owl-carousel owl-theme" #owlCarousel
      [ngClass]="{'owl-rtl': owlDOMData()?.rtl,
                  'owl-loaded': owlDOMData()?.isLoaded,
                  'owl-responsive': owlDOMData()?.isResponsive,
                  'owl-drag': owlDOMData()?.isMouseDragable,
                  'owl-grab': owlDOMData()?.isGrab}"
      (mouseover)="startPausing()"
      (mouseleave)="startPlayML()"
      (touchstart)="startPausing()"
      (touchend)="startPlayTE()">

      <div class="owl-carousel-inner">
        @if(slides.toArray().length && !navData()?.disabled) {
          <button 
            #navBtn
            id="owl-prev"
            type="button" 
            aria-label="Previous Slide" 
            class="owl-prev" 
            [ngClass]="{'disabled': navData()?.prev?.disabled}" 
            (click)="prev()" 
            [innerHTML]="navData()?.prev?.htmlText" 
            (keydown)="onNavKeydown($event, 'owl-prev');"
            [disabled]="navData()?.prev?.disabled">
          </button>
        }

      @if(carouselLoaded()) {
        <div class="owl-stage-outer">
          <owl-stage [owlDraggable]="{
                        'isMouseDragable': owlDOMData()?.isMouseDragable, 
                        'isTouchDragable': owlDOMData()?.isTouchDragable
                      }"
                      [stageData]="stageData()"
                      [slidesData]="slidesData()"></owl-stage>
        </div> <!-- /.owl-stage-outer -->
      }
      @if(slides.toArray().length && !navData()?.disabled) {
        <button  
          #navBtn
          id="owl-next"
          type="button" 
          aria-label="Next Slide" 
          class="owl-next" 
          [ngClass]="{'disabled': navData()?.next?.disabled}" 
          (click)="next()" 
          [innerHTML]="navData()?.next?.htmlText" 
          (keydown)="onNavKeydown($event, 'owl-next');"
          [disabled]="navData()?.next?.disabled">
        </button>
      }
    </div>

    @if(slides.toArray().length) {
        <div class="owl-dots" [ngClass]="{'disabled': dotsData()?.disabled}" aria-label="Carousel Dots Pagination">

          @for (dot of dotsData()?.dots; track dot.id; let i = $index) {
            <button 
              #dot 
              [id]="dot.id"
              type="button" 
              [attr.aria-label]="'Carousel Dot ' + (i+1)"
              [attr.aria-current]="dot.active ? 'true' : null"
              class="owl-dot"
              [ngClass]="{'active': dot.active, 'owl-dot-text': dot.showInnerContent}" 
              (click)="moveByDot(dot.id)" 
              (keydown)="onDotKeydown($event, dot.id);"
              [attr.tabindex]="defineTabIndexForDots(dot)">
              <span [innerHTML]="dot.innerContent"></span>
            </button>
          }
          
        </div> <!-- /.owl-dots -->
    }
    </div> <!-- /.owl-carousel owl-loaded -->
  `,
      providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      styles: [".owl-theme{display:block}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ResizeService
  }, {
    type: CarouselService
  }, {
    type: NavigationService
  }, {
    type: AutoplayService
  }, {
    type: LazyLoadService
  }, {
    type: AnimateService
  }, {
    type: AutoHeightService
  }, {
    type: HashService
  }, {
    type: OwlLogger
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    slides: [{
      type: ContentChildren,
      args: [CarouselSlideDirective]
    }],
    dots: [{
      type: ViewChildren,
      args: ["dot", {
        isSignal: true
      }]
    }],
    navButtons: [{
      type: ViewChildren,
      args: ["navBtn", {
        isSignal: true
      }]
    }],
    translated: [{
      type: Output,
      args: ["translated"]
    }],
    dragging: [{
      type: Output,
      args: ["dragging"]
    }],
    change: [{
      type: Output,
      args: ["change"]
    }],
    changed: [{
      type: Output,
      args: ["changed"]
    }],
    initialized: [{
      type: Output,
      args: ["initialized"]
    }],
    options: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "options",
        required: false
      }]
    }],
    onVisibilityChange: [{
      type: HostListener,
      args: ["document:visibilitychange", ["$event"]]
    }]
  });
})();
var OwlRouterLinkDirective = class _OwlRouterLinkDirective {
  router;
  route;
  // TODO(issue/24571): remove '!'.
  queryParams;
  // TODO(issue/24571): remove '!'.
  fragment;
  // TODO(issue/24571): remove '!'.
  queryParamsHandling;
  // TODO(issue/24571): remove '!'.
  preserveFragment;
  // TODO(issue/24571): remove '!'.
  skipLocationChange;
  // TODO(issue/24571): remove '!'.
  replaceUrl;
  stopLink = false;
  commands = [];
  // TODO(issue/24571): remove '!'.
  preserve;
  constructor(router, route, tabIndex, renderer, el) {
    this.router = router;
    this.route = route;
    if (tabIndex == null) {
      renderer.setAttribute(el.nativeElement, "tabindex", "0");
    }
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  /**
   * @deprecated 4.0.0 use `queryParamsHandling` instead.
   */
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  onClick() {
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    if (this.stopLink) {
      return false;
    }
    this.router.navigateByUrl(this.urlTree, extras);
    return true;
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
  static \u0275fac = function OwlRouterLinkDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwlRouterLinkDirective)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OwlRouterLinkDirective,
    selectors: [["", "owlRouterLink", "", 5, "a"]],
    hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      stopLink: "stopLink",
      owlRouterLink: "owlRouterLink",
      preserveQueryParams: "preserveQueryParams"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a)[owlRouterLink]",
      standalone: false
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var OwlRouterLinkWithHrefDirective = class _OwlRouterLinkWithHrefDirective {
  router;
  route;
  locationStrategy;
  // TODO(issue/24571): remove '!'.
  target;
  // TODO(issue/24571): remove '!'.
  queryParams;
  // TODO(issue/24571): remove '!'.
  fragment;
  // TODO(issue/24571): remove '!'.
  queryParamsHandling;
  // TODO(issue/24571): remove '!'.
  preserveFragment;
  // TODO(issue/24571): remove '!'.
  skipLocationChange;
  // TODO(issue/24571): remove '!'.
  replaceUrl;
  stopLink = false;
  commands = [];
  subscription;
  // TODO(issue/24571): remove '!'.
  preserve;
  // the url displayed on the anchor element.
  // TODO(issue/24571): remove '!'.
  href;
  constructor(router, route, locationStrategy) {
    this.router = router;
    this.route = route;
    this.locationStrategy = locationStrategy;
    this.subscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.updateTargetUrlAndHref();
      }
    });
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  ngOnChanges(changes) {
    this.updateTargetUrlAndHref();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClick(button, ctrlKey, metaKey, shiftKey) {
    if (button !== 0 || ctrlKey || metaKey || shiftKey) {
      return true;
    }
    if (typeof this.target === "string" && this.target !== "_self") {
      return true;
    }
    if (this.stopLink) {
      return false;
    }
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    this.router.navigateByUrl(this.urlTree, extras);
    return false;
  }
  updateTargetUrlAndHref() {
    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
  static \u0275fac = function OwlRouterLinkWithHrefDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OwlRouterLinkWithHrefDirective)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OwlRouterLinkWithHrefDirective,
    selectors: [["a", "owlRouterLink", ""]],
    hostVars: 2,
    hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("href", ctx.href, \u0275\u0275sanitizeUrl);
        \u0275\u0275attribute("target", ctx.target);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      stopLink: "stopLink",
      owlRouterLink: "owlRouterLink",
      preserveQueryParams: "preserveQueryParams"
    },
    standalone: false,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkWithHrefDirective, [{
    type: Directive,
    args: [{
      selector: "a[owlRouterLink]",
      standalone: false
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    href: [{
      type: HostBinding
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.metaKey", "$event.shiftKey"]]
    }]
  });
})();
function attrBoolValue(s) {
  return s === "" || !!s;
}
var CarouselModule = class _CarouselModule {
  static \u0275fac = function CarouselModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CarouselModule,
    declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
    imports: [CommonModule],
    exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule
        // RouterModule.forChild(routes)
      ],
      declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
    }]
  }], null, null);
})();

// src/app/pages/home/sections/featured-projects-section/featured-projects-section.ts
var _c02 = ["imgContainer"];
function FeaturedProjectsSection_For_10_Conditional_1_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21, 0);
    \u0275\u0275element(2, "img", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r2 = \u0275\u0275nextContext().$implicit;
    const project_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", img_r2, \u0275\u0275sanitizeUrl)("alt", project_r3.Title);
  }
}
function FeaturedProjectsSection_For_10_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FeaturedProjectsSection_For_10_Conditional_1_For_2_ng_template_0_Template, 3, 2, "ng-template", 20);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    const project_r3 = ctx_r3.$implicit;
    const \u0275$index_16_r5 = ctx_r3.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("id", project_r3.Title + ctx_r5.slide + \u0275$index_16_r5);
  }
}
function FeaturedProjectsSection_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 8);
    \u0275\u0275repeaterCreate(1, FeaturedProjectsSection_For_10_Conditional_1_For_2_Template, 1, 1, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r5.customOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater(project_r3.imgs);
  }
}
function FeaturedProjectsSection_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 23)(2, "div", 24);
    \u0275\u0275element(3, "img", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", project_r3.imgs[0], \u0275\u0275sanitizeUrl)("alt", project_r3.imgs[0]);
  }
}
function FeaturedProjectsSection_For_10_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const technology_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(technology_r7);
  }
}
function FeaturedProjectsSection_For_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", project_r3["ghLink"], \u0275\u0275sanitizeUrl);
  }
}
function FeaturedProjectsSection_For_10_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", project_r3["demoLink"], \u0275\u0275sanitizeUrl);
  }
}
function FeaturedProjectsSection_For_10_Conditional_18_For_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r8 = \u0275\u0275nextContext().$implicit;
    const project_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r8, \u0275\u0275sanitizeUrl)("alt", project_r3.Title);
  }
}
function FeaturedProjectsSection_For_10_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FeaturedProjectsSection_For_10_Conditional_18_For_2_ng_template_0_Template, 2, 2, "ng-template", 20);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    const project_r3 = ctx_r3.$implicit;
    const \u0275$index_16_r5 = ctx_r3.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("id", project_r3.Title + ctx_r5.slide + \u0275$index_16_r5);
  }
}
function FeaturedProjectsSection_For_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "owl-carousel-o", 8);
    \u0275\u0275repeaterCreate(1, FeaturedProjectsSection_For_10_Conditional_18_For_2_Template, 1, 1, null, 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r5.customOptions);
    \u0275\u0275advance();
    \u0275\u0275repeater(project_r3.imgs);
  }
}
function FeaturedProjectsSection_For_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 23)(2, "div", 24);
    \u0275\u0275element(3, "img", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", project_r3.imgs[0], \u0275\u0275sanitizeUrl)("alt", project_r3.imgs[0]);
  }
}
function FeaturedProjectsSection_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, FeaturedProjectsSection_For_10_Conditional_1_Template, 3, 1, "owl-carousel-o", 8);
    \u0275\u0275conditionalCreate(2, FeaturedProjectsSection_For_10_Conditional_2_Template, 4, 2, "div", 9);
    \u0275\u0275elementStart(3, "div", 10)(4, "div", 11)(5, "h4", 12);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 14);
    \u0275\u0275listener("click", function FeaturedProjectsSection_For_10_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.debug());
    });
    \u0275\u0275element(11, "p", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 16);
    \u0275\u0275repeaterCreate(13, FeaturedProjectsSection_For_10_For_14_Template, 3, 1, "li", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 18);
    \u0275\u0275conditionalCreate(16, FeaturedProjectsSection_For_10_Conditional_16_Template, 2, 1, "a", 19);
    \u0275\u0275conditionalCreate(17, FeaturedProjectsSection_For_10_Conditional_17_Template, 2, 1, "a", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, FeaturedProjectsSection_For_10_Conditional_18_Template, 3, 1, "owl-carousel-o", 8);
    \u0275\u0275conditionalCreate(19, FeaturedProjectsSection_For_10_Conditional_19_Template, 4, 2, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r3 = ctx.$implicit;
    const \u0275$index_16_r5 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_16_r5 % 2 === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_16_r5 % 2 === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image: url('", project_r3.img, "');"));
    \u0275\u0275classProp("proyect-info-right", \u0275$index_16_r5 % 2 === 0)("proyect-info-left", \u0275$index_16_r5 % 2 !== 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-right", \u0275$index_16_r5 % 2 === 0)("text-left", \u0275$index_16_r5 % 2 !== 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 32, "FeatureProjects.Label"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-right", \u0275$index_16_r5 % 2 === 0)("text-left", \u0275$index_16_r5 % 2 !== 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r3.Title);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", project_r3.Description, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275classProp("justify-content-end", \u0275$index_16_r5 % 2 === 0)("justify-content-start", \u0275$index_16_r5 % 2 !== 0);
    \u0275\u0275advance();
    \u0275\u0275repeater(project_r3.Technologies);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-right", \u0275$index_16_r5 % 2 === 0)("text-left", \u0275$index_16_r5 % 2 !== 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r3["ghLink"] ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(project_r3["demoLink"] ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_16_r5 % 2 !== 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_16_r5 % 2 !== 0 ? 19 : -1);
  }
}
var _FeaturedProjectsSection = class _FeaturedProjectsSection {
  constructor() {
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      navSpeed: 700,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3e3
    };
    this.imgContainer = viewChild("imgContainer", ...ngDevMode ? [{ debugName: "imgContainer" }] : []);
  }
  debug() {
    this.imgContainer().nativeElement.scroll({
      top: this.imgContainer().nativeElement.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
  }
};
_FeaturedProjectsSection.\u0275fac = function FeaturedProjectsSection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeaturedProjectsSection)();
};
_FeaturedProjectsSection.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturedProjectsSection, selectors: [["app-featured-projects-section"]], viewQuery: function FeaturedProjectsSection_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.imgContainer, _c02, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, decls: 12, vars: 5, consts: [["imgContainer", ""], ["id", "proyects", 1, "section", "proyects"], [1, "container"], [1, "section-box"], ["data-aos", "fade-up", "data-aos-duration", "1000"], [1, "section-title"], [1, "n-section-title"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "d-flex", "proyect-container"], [1, "owl-carousel-o", 3, "options"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "img-feature-proyect-container"], [1, "h-100"], [1, "proyect-box"], [1, "feature-proyect"], [1, "proyect-name"], [1, "proyect-description-box", 3, "click"], [1, "mb-0", 3, "innerHTML"], [1, "proyect-skills"], [1, "ml-3"], [1, "proyect-links"], ["target", "_blank", 2, "color", "inherit", 3, "href"], ["carouselSlide", "", 3, "id"], [1, "img-container"], [1, "img-feature-proyect", "rounded", 3, "src", "alt"], [1, "img-feature-proyect-box"], [1, "img-container", 2, "width", "auto"], ["width", "600px", 1, "img-feature-proyect", "rounded", 3, "src", "alt"], [1, "underline", "technology"], [1, "ml-3", "fab", "fa-github"], [1, "ml-3", "fas", "fa-external-link-alt"]], template: function FeaturedProjectsSection_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h3", 5)(5, "span", 6);
    \u0275\u0275text(6, "03.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(9, FeaturedProjectsSection_For_10_Template, 20, 34, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 1, "FeatureProjects.Title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 3, "FeatureProjects.Projects"));
  }
}, dependencies: [CarouselModule, CarouselComponent, CarouselSlideDirective, TranslatePipe], styles: ["\n\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%] {\n  height: 360px;\n  margin: 100px 0;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: -57px;\n  margin-left: 0px;\n  display: table;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: -57px;\n  margin-right: 0px;\n  display: table;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .feature-proyect[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  color: #64ffda;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  margin-top: 10px;\n  padding-top: 0;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-name[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin: 0 0 20px;\n  color: #ccd6f6;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-description-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  background-color: #112240;\n  color: #a8b2d1;\n  font-size: 18px;\n  border-radius: 3px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 25px 0 10px;\n  list-style: none;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 13px;\n  color: #8892b0;\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .technology[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-links[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%]   .proyect-links[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.owl-carousel-o[_ngcontent-%COMP%] {\n  width: 600px;\n}\n.img-feature-proyect-container[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 1300px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .img-feature-proyect-container[_ngcontent-%COMP%] {\n    width: 50%;\n    display: table !important;\n    height: -webkit-fill-available;\n  }\n  .img-feature-proyect-container[_ngcontent-%COMP%]   .img-feature-proyect-box[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .img-feature-proyect-container[_ngcontent-%COMP%]   .img-feature-proyect[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .proyect-info-right[_ngcontent-%COMP%], \n   .proyect-info-left[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .proyect-info-right[_ngcontent-%COMP%], \n   .proyect-info-left[_ngcontent-%COMP%] {\n    background-image: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .owl-carousel-o[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%] {\n    height: 100% !important;\n    margin: 33px 0 !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-description-box[_ngcontent-%COMP%] {\n    padding: 0px !important;\n    box-shadow: none !important;\n    position: relative;\n    z-index: 2;\n    padding: 25px;\n    background-color: transparent !important;\n    color: #a8b2d1;\n    font-size: 18px;\n    border-radius: 3px;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%], \n   .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    display: block !important;\n    margin: 0px !important;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 3px;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%], \n   .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-container[_ngcontent-%COMP%]   .img-feature-proyect-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%], \n   .proyects[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n  .proyects[_ngcontent-%COMP%]   .text-right[_ngcontent-%COMP%], \n   .proyects[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\n    text-align: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .justify-content-start[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  .proyects[_ngcontent-%COMP%]   .proyect-info-right[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%], \n   .proyects[_ngcontent-%COMP%]   .proyect-info-left[_ngcontent-%COMP%]   .proyect-box[_ngcontent-%COMP%] {\n    padding: 20px;\n    background: rgba(10, 25, 47, 0.8901960784);\n  }\n}\n  .owl-theme .owl-dots .owl-dot.active span, \n  .owl-theme .owl-dots .owl-dot:hover span {\n  background-color: white !important;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  background: rgba(255, 255, 255, 0.2);\n}\n.img-container[_ngcontent-%COMP%] {\n  width: 600px;\n  max-height: 320px;\n  overflow: auto;\n  border-radius: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #8892b0;\n  border-radius: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #64ffda;\n  border-radius: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #64ffda;\n}\n/*# sourceMappingURL=featured-projects-section-ZB7UY6SM.css.map */"] });
var FeaturedProjectsSection = _FeaturedProjectsSection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturedProjectsSection, [{
    type: Component,
    args: [{ selector: "app-featured-projects-section", imports: [CarouselModule, TranslatePipe], template: `<section class="section proyects" id="proyects">
  <div class="container">
    <div class="section-box">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h3 class="section-title">
          <span class="n-section-title">03.</span> {{ "FeatureProjects.Title" | translate }}
        </h3>
      </div>

      @for (project of "FeatureProjects.Projects" | translate; track project; let i = $index) {
      <div class="d-flex proyect-container" data-aos="fade-up" data-aos-duration="1000">
        @if (i%2 === 0) {
        <owl-carousel-o class="owl-carousel-o" [options]="customOptions">
          @for (img of project.imgs; track img) {
          <ng-template carouselSlide [id]="project.Title+slide+i">
            <div #imgContainer class="img-container">
              <img class="img-feature-proyect rounded" [src]="img" [alt]="project.Title" />
            </div>
          </ng-template>
          }
        </owl-carousel-o>
        } @if (i%2 === 0) {
        <div class="img-feature-proyect-container" data-aos="fade-up" data-aos-duration="1000">
          <div class="img-feature-proyect-box">
            <div class="img-container" style="width: auto">
              <img class="img-feature-proyect rounded" [src]="project.imgs[0]" [alt]="project.imgs[0]" width="600px" />
            </div>
          </div>
        </div>
        }
        <div
          [class.proyect-info-right]="i%2 === 0"
          [class.proyect-info-left]="i%2 !== 0"
          class="h-100"
          style="background-image: url('{{project.img}}');"
        >
          <div class="proyect-box">
            <h4 [class.text-right]="i%2 === 0" [class.text-left]="i%2 !== 0" class="feature-proyect">
              {{"FeatureProjects.Label" | translate}}
            </h4>
            <h5 [class.text-right]="i%2 === 0" [class.text-left]="i%2 !== 0" class="proyect-name">{{project.Title}}</h5>
            <div class="proyect-description-box" (click)="debug()">
              <p class="mb-0" [innerHTML]="project.Description"></p>
            </div>
            <ul
              [class.justify-content-end]="i%2 === 0"
              [class.justify-content-start]="i%2 !== 0"
              class="proyect-skills"
            >
              @for (technology of project.Technologies; track technology) {
              <li class="ml-3">
                <span class="underline technology">{{technology}}</span>
              </li>
              }
            </ul>
            <div [class.text-right]="i%2 === 0" [class.text-left]="i%2 !== 0" class="proyect-links">
              @if (project['ghLink']) {
              <a style="color: inherit" [href]="project['ghLink']" target="_blank"
                ><i class="ml-3 fab fa-github"></i
              ></a>
              } @if (project['demoLink']) {
              <a style="color: inherit" [href]="project['demoLink']" target="_blank"
                ><i class="ml-3 fas fa-external-link-alt"></i
              ></a>
              }
            </div>
          </div>
        </div>
        @if (i%2 !== 0) {
        <owl-carousel-o class="owl-carousel-o" [options]="customOptions">
          @for (img of project.imgs; track img) {
          <ng-template carouselSlide [id]="project.Title+slide+i">
            <div class="img-container">
              <img class="img-feature-proyect rounded" [src]="img" [alt]="project.Title" />
            </div>
          </ng-template>
          }
        </owl-carousel-o>
        } @if (i%2 !== 0) {
        <div class="img-feature-proyect-container" data-aos="fade-up" data-aos-duration="1000">
          <div class="img-feature-proyect-box">
            <div class="img-container" style="width: auto">
              <img class="img-feature-proyect rounded" [src]="project.imgs[0]" [alt]="project.imgs[0]" width="600px" />
            </div>
          </div>
        </div>
        }
      </div>
      }
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/home/sections/featured-projects-section/featured-projects-section.scss */\n.proyects .proyect-container {\n  height: 360px;\n  margin: 100px 0;\n}\n.proyects .proyect-container .proyect-info-left {\n  width: 50%;\n  margin-right: -57px;\n  margin-left: 0px;\n  display: table;\n}\n.proyects .proyect-container .proyect-info-right {\n  width: 50%;\n  margin-left: -57px;\n  margin-right: 0px;\n  display: table;\n}\n.proyects .proyect-container .proyect-box {\n  display: table-cell;\n  vertical-align: middle;\n}\n.proyects .proyect-container .proyect-box .feature-proyect {\n  font-size: 13px;\n  font-weight: normal;\n  color: #64ffda;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  margin-top: 10px;\n  padding-top: 0;\n}\n.proyects .proyect-container .proyect-box .proyect-name {\n  font-size: 28px;\n  margin: 0 0 20px;\n  color: #ccd6f6;\n}\n.proyects .proyect-container .proyect-box .proyect-description-box {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  z-index: 2;\n  padding: 25px;\n  background-color: #112240;\n  color: #a8b2d1;\n  font-size: 18px;\n  border-radius: 3px;\n}\n.proyects .proyect-container .proyect-box .proyect-skills {\n  position: relative;\n  z-index: 2;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 25px 0 10px;\n  list-style: none;\n}\n.proyects .proyect-container .proyect-box .proyect-skills li {\n  margin-right: 0;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 13px;\n  color: #8892b0;\n  margin-bottom: 7px;\n  white-space: nowrap;\n}\n.proyects .proyect-container .proyect-box .proyect-skills li .technology {\n  padding-bottom: 5px;\n}\n.proyects .proyect-container .proyect-box .proyect-links {\n  margin-top: 10px;\n}\n.proyects .proyect-container .proyect-box .proyect-links i {\n  font-size: 22px;\n}\n.owl-carousel-o {\n  width: 600px;\n}\n.img-feature-proyect-container {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 1300px) {\n  .owl-carousel-o {\n    display: none;\n  }\n  .img-feature-proyect-container {\n    width: 50%;\n    display: table !important;\n    height: -webkit-fill-available;\n  }\n  .img-feature-proyect-container .img-feature-proyect-box {\n    display: table-cell;\n    vertical-align: middle;\n  }\n  .img-feature-proyect-container .img-feature-proyect {\n    width: 100%;\n  }\n  .proyect-info-right,\n  .proyect-info-left {\n    width: 50%;\n  }\n}\n@media (min-width: 768px) {\n  .proyect-info-right,\n  .proyect-info-left {\n    background-image: none !important;\n  }\n}\n@media (max-width: 768px) {\n  .owl-carousel-o {\n    display: none;\n  }\n  .proyects .proyect-container {\n    height: 100% !important;\n    margin: 33px 0 !important;\n  }\n  .proyects .proyect-container .proyect-info-left {\n    width: 100%;\n  }\n  .proyects .proyect-container .proyect-info-right {\n    width: 100%;\n  }\n  .proyects .proyect-container .proyect-description-box {\n    padding: 0px !important;\n    box-shadow: none !important;\n    position: relative;\n    z-index: 2;\n    padding: 25px;\n    background-color: transparent !important;\n    color: #a8b2d1;\n    font-size: 18px;\n    border-radius: 3px;\n  }\n  .proyects .proyect-container .proyect-info-right,\n  .proyects .proyect-container .proyect-info-left {\n    display: block !important;\n    margin: 0px !important;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 3px;\n  }\n  .proyects .proyect-container .proyect-info-right .proyect-box,\n  .proyects .proyect-container .proyect-info-left .proyect-box {\n    display: block;\n  }\n  .proyects .proyect-container .img-feature-proyect-container {\n    display: none;\n  }\n  .proyects .proyect-info-right,\n  .proyects .proyect-info-left {\n    padding: 0px;\n  }\n  .proyects .text-right,\n  .proyects .text-left {\n    text-align: center !important;\n  }\n  .proyects .justify-content-end {\n    justify-content: center !important;\n  }\n  .proyects .justify-content-start {\n    justify-content: center !important;\n  }\n  .proyects .proyect-info-right .proyect-box,\n  .proyects .proyect-info-left .proyect-box {\n    padding: 20px;\n    background: rgba(10, 25, 47, 0.8901960784);\n  }\n}\n::ng-deep .owl-theme .owl-dots .owl-dot.active span,\n::ng-deep .owl-theme .owl-dots .owl-dot:hover span {\n  background-color: white !important;\n}\n::ng-deep .owl-theme .owl-dots .owl-dot span {\n  background: rgba(255, 255, 255, 0.2);\n}\n.img-container {\n  width: 600px;\n  max-height: 320px;\n  overflow: auto;\n  border-radius: 3px;\n}\n::-webkit-scrollbar {\n  width: 7px;\n}\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #8892b0;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb {\n  background: #64ffda;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #64ffda;\n}\n/*# sourceMappingURL=featured-projects-section-ZB7UY6SM.css.map */\n"] }]
  }], null, { imgContainer: [{ type: ViewChild, args: ["imgContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturedProjectsSection, { className: "FeaturedProjectsSection", filePath: "src/app/pages/home/sections/featured-projects-section/featured-projects-section.ts", lineNumber: 11 });
})();

// src/app/pages/home/sections/more-projects-section/more-projects-section.ts
function MoreProjectsSection_For_12_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li")(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const technology_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(technology_r4);
  }
}
function MoreProjectsSection_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 9);
    \u0275\u0275domListener("click", function MoreProjectsSection_For_12_Template_div_click_0_listener($event) {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.redirect(project_r2["demoLink"], $event));
    });
    \u0275\u0275domElementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275domElement(4, "img", 13);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 14)(6, "a", 15);
    \u0275\u0275domListener("click", function MoreProjectsSection_For_12_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.analyticsApi.sendAnalyticEvent("click_pokemonlist_external_link", "proyects", "click"));
    });
    \u0275\u0275domElement(7, "i", 16);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "a", 15);
    \u0275\u0275domListener("click", function MoreProjectsSection_For_12_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.analyticsApi.sendAnalyticEvent("click_pokemonlist_github", "proyects", "click"));
    });
    \u0275\u0275domElement(9, "i", 17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(10, "h5", 18);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "p", 19);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "div")(15, "ul", 20);
    \u0275\u0275repeaterCreate(16, MoreProjectsSection_For_12_For_17_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275domProperty("href", project_r2["demoLink"], \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("href", project_r2["ghLink"], \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.Title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r2.Description);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(project_r2.Technologies);
  }
}
var _MoreProjectsSection = class _MoreProjectsSection {
  constructor() {
    this.router = inject(Router);
    this.analyticsApi = inject(AnalyticsApi);
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  redirect(route, event) {
    const id = event.target.id;
    if (id == "demoLink" || id == "ghLink") {
      return;
    }
    window.open(route, "_blank");
  }
};
_MoreProjectsSection.\u0275fac = function MoreProjectsSection_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MoreProjectsSection)();
};
_MoreProjectsSection.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MoreProjectsSection, selectors: [["app-more-projects-section"]], decls: 14, vars: 5, consts: [[1, "section", "more-proyects"], [1, "container"], [1, "section-box"], [1, ""], [1, "section-title"], [1, "n-section-title"], [1, "mt-5"], [1, "row", "p-0"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "proyect-col"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "col-12", "col-md-6", "col-lg-6", "col-xl-4", "proyect-col", 3, "click"], [1, "more-proyect-box"], [1, "row", "w-100", "text-left", "m-0", "p-0"], [1, "col-6", "p-0"], ["src", "icons/folder.svg", "width", "40"], [1, "col-6", "d-flex", "p-0", "justify-content-end"], ["target", "_blank", 2, "color", "inherit", 3, "click", "href"], ["id", "demoLink", 1, "ml-3", "fas", "fa-external-link-alt"], ["id", "ghLink", 1, "ml-4", "fab", "fa-github"], [1, "other-proyect-title", "mt-4"], [1, "other-proyect-description"], [1, "more-proyects-skills"], [1, "underline"]], template: function MoreProjectsSection_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4)(5, "span", 5);
    \u0275\u0275text(6, "04.");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 6)(10, "div", 7);
    \u0275\u0275repeaterCreate(11, MoreProjectsSection_For_12_Template, 18, 4, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 1, "OtherProjects.Title"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(13, 3, "OtherProjects.Projects"));
  }
}, dependencies: [TranslatePipe], styles: ["\n\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 400px;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: flex-start;\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover {\n  -webkit-transform: translateY(-5px);\n  -ms-transform: translateY(-5px);\n  transform: translateY(-5px);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:hover, \n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  color: #64ffda;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #ccd6f6;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .other-proyect-description[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: flex-end;\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n}\n.more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%]   .more-proyect-box[_ngcontent-%COMP%]   .more-proyects-skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  padding-bottom: 3.5px;\n}\n@media (max-width: 1300px) {\n  .more-proyects[_ngcontent-%COMP%]   .proyect-col[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=more-projects-section-KMSTV5W3.css.map */"] });
var MoreProjectsSection = _MoreProjectsSection;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MoreProjectsSection, [{
    type: Component,
    args: [{ selector: "app-more-projects-section", imports: [TranslatePipe], template: `<section class="section more-proyects">
  <div class="container">
    <div class="section-box">
      <div class="">
        <h3 class="section-title"><span class="n-section-title">04.</span> {{"OtherProjects.Title" | translate}}</h3>
      </div>
      <div class="mt-5">
        <div class="row p-0">
          @for (project of "OtherProjects.Projects" | translate; track project; let i = $index) {
          <div
            (click)="redirect(project['demoLink'], $event)"
            class="col-12 col-md-6 col-lg-6 col-xl-4 proyect-col"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="more-proyect-box">
              <div class="row w-100 text-left m-0 p-0">
                <div class="col-6 p-0">
                  <img src="icons/folder.svg" width="40" />
                </div>
                <div class="col-6 d-flex p-0 justify-content-end">
                  <a
                    (click)='analyticsApi.sendAnalyticEvent("click_pokemonlist_external_link", "proyects", "click")'
                    style="color: inherit"
                    [href]="project['demoLink']"
                    target="_blank"
                  >
                    <i id="demoLink" class="ml-3 fas fa-external-link-alt"></i>
                  </a>
                  <a
                    (click)='analyticsApi.sendAnalyticEvent("click_pokemonlist_github", "proyects", "click")'
                    style="color: inherit"
                    [href]="project['ghLink']"
                    target="_blank"
                  >
                    <i id="ghLink" class="ml-4 fab fa-github"></i>
                  </a>
                </div>
                <h5 class="other-proyect-title mt-4">{{ project.Title }}</h5>
                <p class="other-proyect-description">{{ project.Description }}</p>
              </div>
              <div>
                <ul class="more-proyects-skills">
                  @for (technology of project.Technologies; track technology) {
                  <li>
                    <span class="underline">{{ technology }}</span>
                  </li>
                  }
                </ul>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/home/sections/more-projects-section/more-projects-section.scss */\n.more-proyects .proyect-col {\n  padding: 10px;\n  height: 400px;\n}\n.more-proyects .proyect-col .more-proyect-box {\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-align-items: flex-start;\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  position: relative;\n  padding: 2rem 1.75rem;\n  height: 100%;\n  border-radius: 3px;\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-color: #112240;\n  cursor: pointer;\n}\n.more-proyects .proyect-col .more-proyect-box:hover {\n  -webkit-transform: translateY(-5px);\n  -ms-transform: translateY(-5px);\n  transform: translateY(-5px);\n}\n.more-proyects .proyect-col .more-proyect-box:hover,\n.more-proyects .proyect-col .more-proyect-box:focus {\n  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);\n}\n.more-proyects .proyect-col .more-proyect-box svg {\n  width: 40px;\n  height: 40px;\n  color: #64ffda;\n}\n.more-proyects .proyect-col .more-proyect-box .other-proyect-title {\n  margin: 0 0 10px;\n  font-size: 22px;\n  color: #ccd6f6;\n}\n.more-proyects .proyect-col .more-proyect-box .other-proyect-description {\n  font-size: 17px;\n  color: #a8b2d1;\n}\n.more-proyects .proyect-col .more-proyect-box .more-proyects-skills {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: flex-end;\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 20px 0 0 0;\n  list-style: none;\n}\n.more-proyects .proyect-col .more-proyect-box .more-proyects-skills li {\n  font-size: 12px;\n  color: #8892b0;\n  line-height: 1.75;\n  margin-right: 15px;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n}\n.more-proyects .proyect-col .more-proyect-box .more-proyects-skills li .underline {\n  padding-bottom: 3.5px;\n}\n@media (max-width: 1300px) {\n  .more-proyects .proyect-col {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=more-projects-section-KMSTV5W3.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MoreProjectsSection, { className: "MoreProjectsSection", filePath: "src/app/pages/home/sections/more-projects-section/more-projects-section.ts", lineNumber: 12 });
})();

// src/app/pages/home/home.ts
var _Home = class _Home {
  constructor() {
    this.analyticsApi = inject(AnalyticsApi);
  }
  ngOnInit() {
    this.analyticsApi.sendAnalyticPageView("/inicio", "Se entro a inicio");
  }
};
_Home.\u0275fac = function Home_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Home)();
};
_Home.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 7, vars: 0, template: function Home_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main");
    \u0275\u0275element(1, "app-banner-section")(2, "app-about-section")(3, "app-experience-section")(4, "app-featured-projects-section")(5, "app-more-projects-section")(6, "app-contact-section");
    \u0275\u0275elementEnd();
  }
}, dependencies: [
  AboutSection,
  BannerSection,
  ContactSection,
  FeaturedProjectsSection,
  ExperienceSection,
  MoreProjectsSection
], encapsulation: 2 });
var Home = _Home;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", imports: [
      AboutSection,
      BannerSection,
      ContactSection,
      FeaturedProjectsSection,
      ExperienceSection,
      MoreProjectsSection
    ], template: "<main>\n  <app-banner-section></app-banner-section>\n  <app-about-section></app-about-section>\n  <app-experience-section></app-experience-section>\n  <app-featured-projects-section></app-featured-projects-section>\n  <app-more-projects-section></app-more-projects-section>\n  <app-contact-section></app-contact-section>\n</main>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/pages/home/home.ts", lineNumber: 23 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-AN3LH7RB.js.map
