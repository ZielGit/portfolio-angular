import {
  AnalyticsApi,
  DEFAULT_LANGUAGE,
  HttpClient,
  LANGUAGE_CONFIGS,
  LanguageStore,
  Meta,
  NgStyle,
  NgbDropdown,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  Router,
  RouterLink,
  RouterOutlet,
  Title,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  bootstrapApplication,
  provideGoogleAnalytics,
  provideHttpClient,
  provideRouter,
  provideTranslateService,
  registerLocaleData,
  withInterceptorsFromDi
} from "./chunk-VNEUBNGT.js";
import {
  Component,
  HostListener,
  Inject,
  Injectable,
  LOCALE_ID,
  __commonJS,
  __toESM,
  computed,
  inject,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S262ZFIB.js";

// node_modules/aos/dist/aos.js
var require_aos = __commonJS({
  "node_modules/aos/dist/aos.js"(exports, module) {
    !(function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t();
    })(exports, function() {
      return (function(e) {
        function t(o) {
          if (n[o]) return n[o].exports;
          var i = n[o] = { exports: {}, id: o, loaded: false };
          return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
      })([function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        var i = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }, r = n(1), a = (o(r), n(6)), u4 = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e2 && (k = true), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
        }, O = function() {
          w = (0, h.default)(), j();
        }, M = function() {
          w.forEach(function(e2, t2) {
            e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
          });
        }, S = function(e2) {
          return e2 === true || "mobile" === e2 && p.default.mobile() || "phone" === e2 && p.default.phone() || "tablet" === e2 && p.default.tablet() || "function" == typeof e2 && e2() === true;
        }, _ = function(e2) {
          x = i(x, e2), w = (0, h.default)();
          var t2 = document.all && !window.atob;
          return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
            j(true);
          }) : document.addEventListener(x.startEvent, function() {
            j(true);
          }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u4.default)(function() {
            (0, b.default)(w, x.once);
          }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
        };
        e.exports = { init: _, refresh: j, refreshHard: O };
      }, function(e, t) {
      }, , , , , function(e, t) {
        (function(t2) {
          "use strict";
          function n(e2, t3, n2) {
            function o2(t4) {
              var n3 = b2, o3 = v2;
              return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
            }
            function r2(e3) {
              return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
            }
            function a2(e3) {
              var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
              return S ? j(i2, y2 - o3) : i2;
            }
            function c2(e3) {
              var n3 = e3 - w2, o3 = e3 - k2;
              return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
            }
            function f2() {
              var e3 = O();
              return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
            }
            function d2(e3) {
              return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
            }
            function l2() {
              void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
            }
            function p2() {
              return void 0 === h2 ? g2 : d2(O());
            }
            function m2() {
              var e3 = O(), n3 = c2(e3);
              if (b2 = arguments, v2 = this, w2 = e3, n3) {
                if (void 0 === h2) return r2(w2);
                if (S) return h2 = setTimeout(f2, t3), o2(w2);
              }
              return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
            }
            var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
            if ("function" != typeof e2) throw new TypeError(s);
            return t3 = u4(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u4(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
          }
          function o(e2, t3, o2) {
            var r2 = true, a2 = true;
            if ("function" != typeof e2) throw new TypeError(s);
            return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, { leading: r2, maxWait: t3, trailing: a2 });
          }
          function i(e2) {
            var t3 = "undefined" == typeof e2 ? "undefined" : c(e2);
            return !!e2 && ("object" == t3 || "function" == t3);
          }
          function r(e2) {
            return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : c(e2));
          }
          function a(e2) {
            return "symbol" == ("undefined" == typeof e2 ? "undefined" : c(e2)) || r(e2) && k.call(e2) == d;
          }
          function u4(e2) {
            if ("number" == typeof e2) return e2;
            if (a(e2)) return f;
            if (i(e2)) {
              var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
              e2 = i(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
            e2 = e2.replace(l, "");
            var n2 = m.test(e2);
            return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
          }
          var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t2 ? "undefined" : c(t2)) && t2 && t2.Object === Object && t2, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
            return h.Date.now();
          };
          e.exports = o;
        }).call(t, /* @__PURE__ */ (function() {
          return this;
        })());
      }, function(e, t) {
        (function(t2) {
          "use strict";
          function n(e2, t3, n2) {
            function i2(t4) {
              var n3 = b2, o2 = v2;
              return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
            }
            function r2(e3) {
              return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
            }
            function u5(e3) {
              var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
              return S ? x(i3, y2 - o2) : i3;
            }
            function s2(e3) {
              var n3 = e3 - w2, o2 = e3 - O;
              return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
            }
            function f2() {
              var e3 = j();
              return s2(e3) ? d2(e3) : void (h2 = setTimeout(f2, u5(e3)));
            }
            function d2(e3) {
              return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
            }
            function l2() {
              void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
            }
            function p2() {
              return void 0 === h2 ? g2 : d2(j());
            }
            function m2() {
              var e3 = j(), n3 = s2(e3);
              if (b2 = arguments, v2 = this, w2 = e3, n3) {
                if (void 0 === h2) return r2(w2);
                if (S) return h2 = setTimeout(f2, t3), i2(w2);
              }
              return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
            }
            var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
            if ("function" != typeof e2) throw new TypeError(c);
            return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
          }
          function o(e2) {
            var t3 = "undefined" == typeof e2 ? "undefined" : u4(e2);
            return !!e2 && ("object" == t3 || "function" == t3);
          }
          function i(e2) {
            return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : u4(e2));
          }
          function r(e2) {
            return "symbol" == ("undefined" == typeof e2 ? "undefined" : u4(e2)) || i(e2) && w.call(e2) == f;
          }
          function a(e2) {
            if ("number" == typeof e2) return e2;
            if (r(e2)) return s;
            if (o(e2)) {
              var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
              e2 = o(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
            e2 = e2.replace(d, "");
            var n2 = p.test(e2);
            return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s : +e2;
          }
          var u4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
            return typeof e2;
          } : function(e2) {
            return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
          }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t2 ? "undefined" : u4(t2)) && t2 && t2.Object === Object && t2, y = "object" == ("undefined" == typeof self ? "undefined" : u4(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
            return g.Date.now();
          };
          e.exports = n;
        }).call(t, /* @__PURE__ */ (function() {
          return this;
        })());
      }, function(e, t) {
        "use strict";
        function n(e2) {
          var t2 = void 0, o2 = void 0, i2 = void 0;
          for (t2 = 0; t2 < e2.length; t2 += 1) {
            if (o2 = e2[t2], o2.dataset && o2.dataset.aos) return true;
            if (i2 = o2.children && n(o2.children)) return true;
          }
          return false;
        }
        function o() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        function i() {
          return !!o();
        }
        function r(e2, t2) {
          var n2 = window.document, i2 = o(), r2 = new i2(a);
          u4 = t2, r2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
        }
        function a(e2) {
          e2 && e2.forEach(function(e3) {
            var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
            if (n(i2)) return u4();
          });
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var u4 = function() {
        };
        t.default = { isSupported: i, ready: r };
      }, function(e, t) {
        "use strict";
        function n(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        function o() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = /* @__PURE__ */ (function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var o2 = t2[n2];
              o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
            }
          }
          return function(t2, n2, o2) {
            return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
          };
        })(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u4 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = (function() {
          function e2() {
            n(this, e2);
          }
          return i(e2, [{ key: "phone", value: function() {
            var e3 = o();
            return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
          } }, { key: "mobile", value: function() {
            var e3 = o();
            return !(!u4.test(e3) && !c.test(e3.substr(0, 4)));
          } }, { key: "tablet", value: function() {
            return this.mobile() && !this.phone();
          } }]), e2;
        })();
        t.default = new s();
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2, t2, n2) {
          var o2 = e2.node.getAttribute("data-aos-once");
          t2 > e2.position ? e2.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n2 && "true" !== o2) && e2.node.classList.remove("aos-animate");
        }, o = function(e2, t2) {
          var o2 = window.pageYOffset, i = window.innerHeight;
          e2.forEach(function(e3, r) {
            n(e3, i + o2, t2);
          });
        };
        t.default = o;
      }, function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = n(12), r = o(i), a = function(e2, t2) {
          return e2.forEach(function(e3, n2) {
            e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
          }), e2;
        };
        t.default = a;
      }, function(e, t, n) {
        "use strict";
        function o(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var i = n(13), r = o(i), a = function(e2, t2) {
          var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = { offset: e2.getAttribute("data-aos-offset"), anchor: e2.getAttribute("data-aos-anchor"), anchorPlacement: e2.getAttribute("data-aos-anchor-placement") };
          switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
            case "top-bottom":
              break;
            case "center-bottom":
              n2 += e2.offsetHeight / 2;
              break;
            case "bottom-bottom":
              n2 += e2.offsetHeight;
              break;
            case "top-center":
              n2 += i2 / 2;
              break;
            case "bottom-center":
              n2 += i2 / 2 + e2.offsetHeight;
              break;
            case "center-center":
              n2 += i2 / 2 + e2.offsetHeight / 2;
              break;
            case "top-top":
              n2 += i2;
              break;
            case "bottom-top":
              n2 += e2.offsetHeight + i2;
              break;
            case "center-top":
              n2 += e2.offsetHeight / 2 + i2;
          }
          return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
        };
        t.default = a;
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2) {
          for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); ) t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
          return { top: n2, left: t2 };
        };
        t.default = n;
      }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var n = function(e2) {
          return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
            return { node: e3 };
          });
        };
        t.default = n;
      }]);
    });
  }
});

// src/app/app.ts
var AOS = __toESM(require_aos());

// src/app/layout/footer/footer.ts
var _Footer = class _Footer {
  constructor() {
    this.analyticsApi = inject(AnalyticsApi);
  }
};
_Footer.\u0275fac = function Footer_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Footer)();
};
_Footer.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Footer, selectors: [["app-footer"]], decls: 16, vars: 0, consts: [[1, "footer-animate"], [1, "footer-left-bar", "d-none", "d-md-block"], [1, "animate-item"], ["href", "https://github.com/ZielGit", "target", "_blank", 3, "click"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/frans-vilcahuaman/", "target", "_blank", 3, "click"], [1, "fab", "fa-linkedin-in"], [1, "footer-right-bar", "d-none", "d-md-block"], ["href", "mailto:frans_421_12@hotmail.com", "target", "_blank", 1, "animate-item", 3, "click"], [1, "footer-credits", "text-center"], ["href", "https://github.com/ZielGit/portfolio-angular", "target", "_blank", "rel", "nofollow noopener noreferrer", 3, "click"]], template: function Footer_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "footer")(1, "div", 0)(2, "ul", 1)(3, "li", 2)(4, "a", 3);
    \u0275\u0275domListener("click", function Footer_Template_a_click_4_listener() {
      return ctx.analyticsApi.sendAnalyticEvent("click_github", "footer", "github");
    });
    \u0275\u0275domElement(5, "i", 4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "li", 2)(7, "a", 5);
    \u0275\u0275domListener("click", function Footer_Template_a_click_7_listener() {
      return ctx.analyticsApi.sendAnalyticEvent("click_linkedin", "footer", "github");
    });
    \u0275\u0275domElement(8, "i", 6);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(9, "div", 7)(10, "a", 8);
    \u0275\u0275domListener("click", function Footer_Template_a_click_10_listener() {
      return ctx.analyticsApi.sendAnalyticEvent("click_send_mail", "footer", "email");
    });
    \u0275\u0275text(11, "frans_421_12@hotmail.com ");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(12, "div", 9)(13, "a", 10);
    \u0275\u0275domListener("click", function Footer_Template_a_click_13_listener() {
      return ctx.analyticsApi.sendAnalyticEvent("click_github_portfolio_andresjose", "footer", "click");
    });
    \u0275\u0275domElementStart(14, "div");
    \u0275\u0275text(15, "Built with Angular by Frans Vilcahuam\xE1n");
    \u0275\u0275domElementEnd()()()();
  }
}, styles: ['\n\n.footer-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(100%);\n  animation: _ngcontent-%COMP%_slideInFromBottom 250ms cubic-bezier(0.35, 0, 0.25, 1) forwards;\n}\n.footer-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0ms;\n}\n.footer-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 50ms;\n}\n@keyframes _ngcontent-%COMP%_slideInFromBottom {\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]:after, \nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]:after {\n  content: "";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 19px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nfooter[_ngcontent-%COMP%]   .footer-left-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 33px;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\nfooter[_ngcontent-%COMP%]   .footer-right-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  -webkit-writing-mode: vertical-rl;\n  -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #a8b2d1;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%] {\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a8b2d1;\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \nfooter[_ngcontent-%COMP%]   .footer-credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  color: #64ffda;\n}\n/*# sourceMappingURL=footer-VI2ZD35N.css.map */'] });
var Footer = _Footer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{ selector: "app-footer", imports: [], template: `<footer>
  <div class="footer-animate">
    <ul class="footer-left-bar d-none d-md-block">
      <li class="animate-item">
        <a
          (click)="analyticsApi.sendAnalyticEvent('click_github', 'footer', 'github')"
          href="https://github.com/ZielGit"
          target="_blank"
        >
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li class="animate-item">
        <a
          (click)="analyticsApi.sendAnalyticEvent('click_linkedin', 'footer', 'github')"
          href="https://www.linkedin.com/in/frans-vilcahuaman/"
          target="_blank"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </li>
    </ul>
    <div class="footer-right-bar d-none d-md-block">
      <a
        class="animate-item"
        (click)="analyticsApi.sendAnalyticEvent('click_send_mail', 'footer', 'email')"
        href="mailto:frans_421_12@hotmail.com"
        target="_blank"
        >frans_421_12&#64;hotmail.com
      </a>
    </div>
  </div>

  <div class="footer-credits text-center">
    <a
      (click)="analyticsApi.sendAnalyticEvent('click_github_portfolio_andresjose', 'footer', 'click')"
      href="https://github.com/ZielGit/portfolio-angular"
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <div>Built with Angular by Frans Vilcahuam\xE1n</div>
    </a>
  </div>
</footer>
`, styles: ['/* src/app/layout/footer/footer.scss */\n.footer-animate .animate-item {\n  opacity: 0;\n  transform: translateY(100%);\n  animation: slideInFromBottom 250ms cubic-bezier(0.35, 0, 0.25, 1) forwards;\n}\n.footer-animate .animate-item:nth-child(1) {\n  animation-delay: 0ms;\n}\n.footer-animate .animate-item:nth-child(2) {\n  animation-delay: 50ms;\n}\n@keyframes slideInFromBottom {\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\nfooter {\n  color: #a8b2d1;\n}\nfooter .footer-left-bar:after,\nfooter .footer-right-bar:after {\n  content: "";\n  display: block;\n  width: 1px;\n  height: 90px;\n  margin: 0 auto;\n  background-color: #a8b2d1;\n}\nfooter .footer-left-bar li,\nfooter .footer-right-bar li {\n  list-style: none;\n}\nfooter .footer-left-bar {\n  position: fixed;\n  bottom: -16px;\n  left: 51px;\n  padding: 0;\n}\nfooter .footer-left-bar i {\n  font-size: 19px;\n  color: #a8b2d1;\n}\nfooter .footer-left-bar li {\n  margin: 20px 0px;\n}\nfooter .footer-left-bar li:last-of-type {\n  margin-bottom: 33px;\n}\nfooter .footer-right-bar {\n  position: fixed;\n  bottom: 0px;\n  right: 41px;\n  padding: 0;\n}\nfooter .footer-right-bar li {\n  transform: rotate(90deg);\n}\nfooter .footer-right-bar a {\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 12px;\n  -webkit-letter-spacing: 0.1em;\n  -moz-letter-spacing: 0.1em;\n  -ms-letter-spacing: 0.1em;\n  letter-spacing: 0.1em;\n  -webkit-writing-mode: vertical-rl;\n  -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n  margin: 20px auto;\n  padding: 10px;\n  color: #a8b2d1;\n}\nfooter .footer-credits {\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  font-size: 12px;\n  line-height: 1;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  margin-top: -60px;\n}\nfooter .footer-credits a {\n  color: #a8b2d1;\n  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-property: all;\n  transition-duration: 0.25s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-delay: 0s;\n}\nfooter .footer-credits a:hover,\nfooter .footer-credits a:focus {\n  text-decoration: none;\n  color: #64ffda;\n}\n/*# sourceMappingURL=footer-VI2ZD35N.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Footer, { className: "Footer", filePath: "src/app/layout/footer/footer.ts", lineNumber: 10 });
})();

// src/app/layout/header/header.ts
var _c0 = (a0) => ({ "pointer-events": a0 });
var _forTrack0 = ($index, $item) => $item.code;
function Header_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "First content");
  }
}
function Header_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Second content");
  }
}
function Header_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Second content");
  }
}
function Header_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Second content");
  }
}
function Header_For_52_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function Header_For_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function Header_For_52_Template_div_click_0_listener() {
      const lang_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeLanguage(lang_r3.code));
    });
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Header_For_52_Conditional_4_Template, 2, 0, ":svg:svg", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    const \u0275$index_90_r5 = ctx.$index;
    const \u0275$count_90_r6 = ctx.$count;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.isLanguageActive(lang_r3.code))("first-item", \u0275$index_90_r5 === 0)("middle-item", !(\u0275$index_90_r5 === 0) && !(\u0275$index_90_r5 === \u0275$count_90_r6 - 1))("last-item", \u0275$index_90_r5 === \u0275$count_90_r6 - 1);
    \u0275\u0275property("disabled", ctx_r3.isLanguageActive(lang_r3.code));
    \u0275\u0275advance();
    \u0275\u0275property("src", lang_r3.flagUrl, \u0275\u0275sanitizeUrl)("alt", lang_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r3.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isLanguageActive(lang_r3.code) ? 4 : -1);
  }
}
function Header_For_90_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 31);
    \u0275\u0275element(1, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function Header_For_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function Header_For_90_Template_div_click_0_listener() {
      const lang_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeLanguage(lang_r8.code));
    });
    \u0275\u0275element(1, "img", 34);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Header_For_90_Conditional_4_Template, 2, 0, ":svg:svg", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lang_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.isLanguageActive(lang_r8.code));
    \u0275\u0275advance();
    \u0275\u0275property("src", lang_r8.flagUrl, \u0275\u0275sanitizeUrl)("alt", lang_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lang_r8.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.isLanguageActive(lang_r8.code) ? 4 : -1);
  }
}
var _Header = class _Header {
  constructor() {
    this.router = inject(Router);
    this.analyticsApi = inject(AnalyticsApi);
    this.languageStore = inject(LanguageStore);
    this.responsiveMenuVisible = false;
    this.currentLanguage = computed(() => this.languageStore.language(), ...ngDevMode ? [{ debugName: "currentLanguage" }] : []);
    this.currentLanguageConfig = computed(() => LANGUAGE_CONFIGS[this.currentLanguage()], ...ngDevMode ? [{ debugName: "currentLanguageConfig" }] : []);
    this.availableLanguages = computed(() => Object.values(LANGUAGE_CONFIGS), ...ngDevMode ? [{ debugName: "availableLanguages" }] : []);
    this.cvName = "";
  }
  scroll(el) {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      this.router.navigate([`/${this.currentLanguage()}`]).then(() => {
        setTimeout(() => {
          document.getElementById(el)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    }
    this.responsiveMenuVisible = false;
  }
  downloadCV() {
    this.languageStore.translateService.get("Header.cvName").subscribe((val) => {
      this.cvName = val;
      console.log(val);
      const url = window.location.href;
      window.open(url + "/../cv/" + this.cvName, "_blank");
    });
  }
  onWindowScroll() {
    this.pageYPosition = window.pageYOffset;
  }
  changeLanguage(language) {
    if (this.languageStore.isDifferentLanguage(language)) {
      this.languageStore.changeLanguage(language);
    }
  }
  isLanguageActive(language) {
    return this.currentLanguage() === language;
  }
};
_Header.\u0275fac = function Header_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Header)();
};
_Header.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], hostBindings: function Header_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("scroll", function Header_scroll_HostBindingHandler() {
      return ctx.onWindowScroll();
    }, \u0275\u0275resolveWindow);
  }
}, decls: 91, vars: 45, consts: [["nav", "ngbNav"], [1, "navbar", "main-navbar", "on-top", "menu-animate"], [1, "container"], [1, "navbar-brand", "text-light", "animate-item", 3, "routerLink"], ["src", "images/logo.png", "width", "50", "alt", "Logo"], ["ngbNav", "", 1, "menu-ul"], ["ngbNavItem", "", 1, "animate-item", 3, "click"], ["ngbNavLink", "", 3, "click"], [1, "nav-number"], [1, "underline", "nav-text"], ["ngbNavContent", ""], ["ngbNavItem", "", 1, "animate-item"], ["ngbNavLink", "", 1, "main-btn", "cv-btn", 3, "click"], [1, "animate-item"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownForm1", "ngbDropdownToggle", "", 1, "language-container"], ["width", "20px", 3, "src", "alt"], [1, "flag-text"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "arrow-language"], ["d", "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownForm1"], [1, "language-container", "language-container-selector", 3, "active", "first-item", "middle-item", "last-item", "disabled"], [1, "menu-wrapper"], [1, "hamburger-menu", 3, "click"], [1, "menu-responsive", 3, "ngStyle"], [1, "on-top"], [3, "click"], [1, "main-btn", "cv-btn", 3, "click"], [1, "language-container"], [1, "language-container", "language-container-selector", 3, "active"], [1, "language-container", "language-container-selector", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-check2", "arrow-active"], ["d", "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"], [1, "language-container", "language-container-selector", 3, "click"], [3, "src", "alt"]], template: function Header_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 1)(1, "div", 2)(2, "a", 3);
    \u0275\u0275element(3, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul", 5, 0)(6, "li", 6);
    \u0275\u0275listener("click", function Header_Template_li_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.analyticsApi.sendAnalyticEvent("click_about", "menu", "click"));
    });
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275listener("click", function Header_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scroll("about"));
    });
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "01. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, Header_ng_template_13_Template, 1, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li", 6);
    \u0275\u0275listener("click", function Header_Template_li_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.analyticsApi.sendAnalyticEvent("click_experience", "menu", "click"));
    });
    \u0275\u0275elementStart(15, "a", 7);
    \u0275\u0275listener("click", function Header_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scroll("jobs"));
    });
    \u0275\u0275elementStart(16, "span", 8);
    \u0275\u0275text(17, "02. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, Header_ng_template_21_Template, 1, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "li", 6);
    \u0275\u0275listener("click", function Header_Template_li_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.analyticsApi.sendAnalyticEvent("click_jobs", "menu", "click"));
    });
    \u0275\u0275elementStart(23, "a", 7);
    \u0275\u0275listener("click", function Header_Template_a_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scroll("proyects"));
    });
    \u0275\u0275elementStart(24, "span", 8);
    \u0275\u0275text(25, "03. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 9);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, Header_ng_template_29_Template, 1, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li", 6);
    \u0275\u0275listener("click", function Header_Template_li_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.analyticsApi.sendAnalyticEvent("click_contact", "menu", "click"));
    });
    \u0275\u0275elementStart(31, "a", 7);
    \u0275\u0275listener("click", function Header_Template_a_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scroll("contact"));
    });
    \u0275\u0275elementStart(32, "span", 8);
    \u0275\u0275text(33, "04. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 9);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, Header_ng_template_37_Template, 1, 0, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li", 11)(39, "a", 12);
    \u0275\u0275listener("click", function Header_Template_a_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadCV());
    });
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "li", 13)(43, "div", 14)(44, "div", 15);
    \u0275\u0275element(45, "img", 16);
    \u0275\u0275elementStart(46, "span", 17);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 18);
    \u0275\u0275element(49, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 20);
    \u0275\u0275repeaterCreate(51, Header_For_52_Template, 5, 13, "div", 21, _forTrack0);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(53, "div", 22)(54, "div", 23);
    \u0275\u0275listener("click", function Header_Template_div_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.responsiveMenuVisible = !ctx.responsiveMenuVisible);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 24)(56, "aside", 25)(57, "nav")(58, "ol")(59, "li", 26);
    \u0275\u0275listener("click", function Header_Template_li_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.analyticsApi.sendAnalyticEvent("click_about", "menu", "click"));
    });
    \u0275\u0275elementStart(60, "a", 26);
    \u0275\u0275listener("click", function Header_Template_a_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scroll("about"));
    });
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "01. ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "li", 26);
    \u0275\u0275listener("click", function Header_Template_li_click_65_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.analyticsApi.sendAnalyticEvent("click_experience", "menu", "click"));
    });
    \u0275\u0275elementStart(66, "a", 26);
    \u0275\u0275listener("click", function Header_Template_a_click_66_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scroll("jobs"));
    });
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68, "02. ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "li", 26);
    \u0275\u0275listener("click", function Header_Template_li_click_71_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.analyticsApi.sendAnalyticEvent("click_jobs", "menu", "click"));
    });
    \u0275\u0275elementStart(72, "a", 26);
    \u0275\u0275listener("click", function Header_Template_a_click_72_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scroll("proyects"));
    });
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74, "03. ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "li", 26);
    \u0275\u0275listener("click", function Header_Template_li_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.analyticsApi.sendAnalyticEvent("click_contact", "menu", "click"));
    });
    \u0275\u0275elementStart(78, "a", 26);
    \u0275\u0275listener("click", function Header_Template_a_click_78_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.scroll("proyects"));
    });
    \u0275\u0275elementStart(79, "span");
    \u0275\u0275text(80, "04. ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "li")(84, "a", 27);
    \u0275\u0275listener("click", function Header_Template_a_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadCV());
    });
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "li")(88, "div", 28);
    \u0275\u0275repeaterCreate(89, Header_For_90_Template, 5, 6, "div", 29, _forTrack0);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("nav-shadow", ctx.pageYPosition > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "inicio");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 23, "Header.Item1"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 25, "Header.Item2"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 27, "Header.Item3"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 29, "Header.Item4"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 31, "Header.cvBtn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx.currentLanguageConfig().flagUrl, \u0275\u0275sanitizeUrl)("alt", ctx.currentLanguageConfig().label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.currentLanguageConfig().label);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.availableLanguages());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("animate", ctx.responsiveMenuVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(43, _c0, !ctx.responsiveMenuVisible ? "none" : ""));
    \u0275\u0275advance();
    \u0275\u0275classProp("aside-show", ctx.responsiveMenuVisible)("nav-shadow", ctx.pageYPosition > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 33, "Header.Item1"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 35, "Header.Item2"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(76, 37, "Header.Item3"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(82, 39, "Header.Item4"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 41, "Header.cvBtn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.availableLanguages());
  }
}, dependencies: [
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
  TranslatePipe
], styles: ['\n\n.menu-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(-50%);\n  animation: _ngcontent-%COMP%_slideInFromTop 250ms cubic-bezier(0.35, 0, 0.25, 1) forwards;\n}\n.menu-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0ms;\n}\n.menu-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 50ms;\n}\n.menu-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 100ms;\n}\n.menu-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 150ms;\n}\n.menu-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 200ms;\n}\n.menu-animate[_ngcontent-%COMP%]   .animate-item[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 250ms;\n}\n@keyframes _ngcontent-%COMP%_slideInFromTop {\n  from {\n    opacity: 0;\n    transform: translateY(-50%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.main-navbar[_ngcontent-%COMP%] {\n  height: 70px;\n  background: #0a192f;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0px 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%] {\n  display: flex;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-responsive[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .language-container-selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.main-navbar[_ngcontent-%COMP%]   .aside-show[_ngcontent-%COMP%] {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  width: 75vw;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #112240;\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #ccd6f6;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64ffda;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%] {\n  padding: 7px 15px !important;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #64ffda;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-number[_ngcontent-%COMP%] {\n  color: #64ffda;\n  font-size: 12px;\n}\n.main-navbar[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%] {\n  color: #ccd6f6 !important;\n  padding-bottom: 4px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%], \n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after, \n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(25px);\n  background: #64ffda;\n  transition: all 0ms 300ms;\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: #64ffda;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: #64ffda;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar[_ngcontent-%COMP%]   .menu-wrapper[_ngcontent-%COMP%]   .hamburger-menu.animate[_ngcontent-%COMP%]:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.on-top[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.nav-shadow[_ngcontent-%COMP%] {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.flag-text[_ngcontent-%COMP%] {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n}\n.language-container[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.language-container-selector[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 10px 12px !important;\n  border: none;\n  border-bottom: 1px solid;\n  text-align: left;\n  background: #0a192f !important;\n}\n.language-container-selector[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #172a45 !important;\n}\n.language-container-selector.active[_ngcontent-%COMP%] {\n  background: #172a45 !important;\n}\n.language-container-selector.active[_ngcontent-%COMP%]   .arrow-active[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.language-container-selector.first-item[_ngcontent-%COMP%] {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.language-container-selector.middle-item[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.language-container-selector.last-item[_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.arrow-language[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n.arrow-active[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n  .dropdown-toggle::after {\n  display: none;\n}\n  .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n@media (max-width: 1000px) {\n  .main-navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper[_ngcontent-%COMP%], \n   .menu-responsive[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=header-KAMICXOI.css.map */'] });
var Header = _Header;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [
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
      TranslateModule
    ], template: `<nav class="navbar main-navbar on-top menu-animate" [class.nav-shadow]="pageYPosition > 0">
  <div class="container">
    <a class="navbar-brand text-light animate-item" [routerLink]="'inicio'">
      <img src="images/logo.png" width="50" alt="Logo" />
    </a>
    <ul ngbNav #nav="ngbNav" class="menu-ul">
      <li ngbNavItem class="animate-item" (click)='analyticsApi.sendAnalyticEvent("click_about", "menu", "click")'>
        <a ngbNavLink (click)='scroll("about")'>
          <span class="nav-number">01. </span>
          <span class="underline nav-text">{{ "Header.Item1" | translate }}</span>
        </a>
        <ng-template ngbNavContent>First content</ng-template>
      </li>
      <li ngbNavItem class="animate-item" (click)='analyticsApi.sendAnalyticEvent("click_experience", "menu", "click")'>
        <a ngbNavLink (click)='scroll("jobs")'>
          <span class="nav-number">02. </span>
          <span class="underline nav-text">{{ "Header.Item2" | translate }}</span>
        </a>
        <ng-template ngbNavContent>Second content</ng-template>
      </li>
      <li ngbNavItem class="animate-item" (click)='analyticsApi.sendAnalyticEvent("click_jobs", "menu", "click")'>
        <a ngbNavLink (click)='scroll("proyects")'>
          <span class="nav-number">03. </span>
          <span class="underline nav-text">{{ "Header.Item3" | translate }}</span>
        </a>
        <ng-template ngbNavContent>Second content</ng-template>
      </li>
      <li ngbNavItem class="animate-item" (click)='analyticsApi.sendAnalyticEvent("click_contact", "menu", "click")'>
        <a ngbNavLink (click)='scroll("contact")'>
          <span class="nav-number">04. </span>
          <span class="underline nav-text">{{ "Header.Item4" | translate }}</span>
        </a>
        <ng-template ngbNavContent>Second content</ng-template>
      </li>
      <li ngbNavItem class="animate-item">
        <a (click)="downloadCV()" class="main-btn cv-btn" ngbNavLink> {{ "Header.cvBtn" | translate }} </a>
      </li>
      <li class="animate-item">
        <div ngbDropdown class="d-inline-block">
          <div class="language-container" id="dropdownForm1" ngbDropdownToggle>
            <img width="20px" [src]="currentLanguageConfig().flagUrl" [alt]="currentLanguageConfig().label" />
            <span class="flag-text">{{ currentLanguageConfig().label }}</span>
            <svg class="arrow-language" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>

          <!-- Dropdown Menu -->
          <div ngbDropdownMenu aria-labelledby="dropdownForm1">
            @for (lang of availableLanguages(); track lang.code; let isFirst = $first; let isLast = $last) {
            <div
              (click)="changeLanguage(lang.code)"
              class="language-container language-container-selector"
              [class.active]="isLanguageActive(lang.code)"
              [class.first-item]="isFirst"
              [class.middle-item]="!isFirst && !isLast"
              [class.last-item]="isLast"
              [disabled]="isLanguageActive(lang.code)"
            >
              <img width="20px" [src]="lang.flagUrl" [alt]="lang.label" />
              <span class="flag-text">{{ lang.label }}</span>
              @if (isLanguageActive(lang.code)) {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check2 arrow-active"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
              }
            </div>
            }
          </div>
        </div>
      </li>
    </ul>

    <!-- Hamburger Menu Toggle -->
    <div class="menu-wrapper">
      <div
        [class.animate]="responsiveMenuVisible"
        (click)="responsiveMenuVisible = !responsiveMenuVisible"
        class="hamburger-menu"
      ></div>
    </div>

    <!-- Mobile/Responsive Menu -->
    <div class="menu-responsive" [ngStyle]="{'pointer-events': !responsiveMenuVisible ? 'none' : '' }">
      <aside [class.aside-show]="responsiveMenuVisible" [class.nav-shadow]="pageYPosition > 0" class="on-top">
        <nav>
          <ol>
            <li (click)='analyticsApi.sendAnalyticEvent("click_about", "menu", "click")'>
              <a (click)='scroll("about")'> <span>01. </span> {{ "Header.Item1" | translate }} </a>
            </li>
            <li (click)='analyticsApi.sendAnalyticEvent("click_experience", "menu", "click")'>
              <a (click)='scroll("jobs")'> <span>02. </span> {{ "Header.Item2" | translate }} </a>
            </li>
            <li (click)='analyticsApi.sendAnalyticEvent("click_jobs", "menu", "click")'>
              <a (click)='scroll("proyects")'> <span>03. </span> {{ "Header.Item3" | translate }} </a>
            </li>
            <li (click)='analyticsApi.sendAnalyticEvent("click_contact", "menu", "click")'>
              <a (click)='scroll("proyects")'> <span>04. </span> {{ "Header.Item4" | translate }} </a>
            </li>
            <li>
              <a (click)="downloadCV()" class="main-btn cv-btn"> {{ "Header.cvBtn" | translate }} </a>
            </li>
            <li>
              <div class="language-container">
                @for (lang of availableLanguages(); track lang.code; let isFirst = $first; let isLast = $last) {
                <div
                  (click)="changeLanguage(lang.code)"
                  class="language-container language-container-selector"
                  [class.active]="isLanguageActive(lang.code)"
                >
                  <img [src]="lang.flagUrl" [alt]="lang.label" />
                  <span class="flag-text">{{ lang.label }}</span>
                  @if (isLanguageActive(lang.code)) {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2 arrow-active"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  }
                </div>
                }
              </div>
            </li>
          </ol>
        </nav>
      </aside>
    </div>
  </div>
</nav>
`, styles: ['/* src/app/layout/header/header.scss */\n.menu-animate .animate-item {\n  opacity: 0;\n  transform: translateY(-50%);\n  animation: slideInFromTop 250ms cubic-bezier(0.35, 0, 0.25, 1) forwards;\n}\n.menu-animate .animate-item:nth-child(1) {\n  animation-delay: 0ms;\n}\n.menu-animate .animate-item:nth-child(2) {\n  animation-delay: 50ms;\n}\n.menu-animate .animate-item:nth-child(3) {\n  animation-delay: 100ms;\n}\n.menu-animate .animate-item:nth-child(4) {\n  animation-delay: 150ms;\n}\n.menu-animate .animate-item:nth-child(5) {\n  animation-delay: 200ms;\n}\n.menu-animate .animate-item:nth-child(6) {\n  animation-delay: 250ms;\n}\n@keyframes slideInFromTop {\n  from {\n    opacity: 0;\n    transform: translateY(-50%);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.main-navbar {\n  height: 70px;\n  background: #0a192f;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n}\n.main-navbar .menu-ul li {\n  margin: 0px 13px;\n}\n.main-navbar .menu-ul li:first-child {\n  margin-left: 0px;\n}\n.main-navbar .menu-ul li:last-child {\n  margin-right: 0px;\n}\n.main-navbar .menu-responsive {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  transform: translateX(0vw);\n  visibility: visible;\n  outline: 0px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar .menu-responsive li a {\n  display: flex !important;\n}\n.main-navbar .menu-responsive li .cv-btn {\n  width: fit-content !important;\n  margin-left: 20px;\n}\n.main-navbar .menu-responsive li .language-container {\n  width: 200px;\n  margin-left: 18px;\n  margin-top: 50px;\n  padding-left: 0px;\n  padding-bottom: 0px;\n}\n.main-navbar .menu-responsive li .language-container-selector {\n  display: flex;\n}\n.main-navbar .menu-responsive li .language-container-selector img {\n  width: 35px;\n}\n.main-navbar .aside-show {\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  right: 0px;\n}\n.main-navbar aside {\n  width: 75vw;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: #112240;\n  height: 100%;\n  position: relative;\n  right: -625px;\n  margin-left: auto;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n  box-shadow: rgba(2, 12, 27, 0.7) -10px 0px 30px -15px;\n  padding: 25px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.main-navbar aside nav {\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  align-items: center;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n  color: #ccd6f6;\n}\n.main-navbar aside nav ol {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n}\n.main-navbar aside nav ol li {\n  font-size: 16px;\n  margin: 0px auto 10px;\n}\n.main-navbar aside nav ol li span {\n  display: block;\n  color: #64ffda;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main-navbar aside nav ol li a {\n  display: inline-block;\n  text-decoration-skip-ink: auto;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n  width: 100%;\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n  padding: 3px 20px 20px;\n}\n.main-navbar .cv-btn {\n  padding: 7px 15px !important;\n}\n.main-navbar .nav-link {\n  padding: 5px 0px;\n  color: inherit;\n  margin: 0px;\n  font-size: 13px;\n}\n.main-navbar .nav-link:hover {\n  color: #64ffda;\n}\n.main-navbar .nav-number {\n  color: #64ffda;\n  font-size: 12px;\n}\n.main-navbar .nav-text {\n  color: #ccd6f6 !important;\n  padding-bottom: 4px;\n}\n.main-navbar .menu-wrapper {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 36px;\n  height: 60px;\n  cursor: pointer;\n  z-index: 11;\n}\n.main-navbar .menu-wrapper .hamburger-menu,\n.main-navbar .menu-wrapper .hamburger-menu:after,\n.main-navbar .menu-wrapper .hamburger-menu:before {\n  width: 36px;\n  height: 1.5px;\n}\n.main-navbar .menu-wrapper .hamburger-menu {\n  position: relative;\n  transform: translateY(25px);\n  background: #64ffda;\n  transition: all 0ms 300ms;\n}\n.main-navbar .menu-wrapper .hamburger-menu:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: 8px;\n  background: #64ffda;\n  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar .menu-wrapper .hamburger-menu:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 8px;\n  background: #64ffda;\n  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar .menu-wrapper .hamburger-menu.animate {\n  background: rgba(255, 255, 255, 0);\n}\n.main-navbar .menu-wrapper .hamburger-menu.animate:after {\n  top: 0;\n  transform: rotate(45deg);\n  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.main-navbar .menu-wrapper .hamburger-menu.animate:before {\n  bottom: 0;\n  transform: rotate(-45deg);\n  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.on-top {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n  height: 100px;\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.nav-shadow {\n  height: 70px;\n  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);\n  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;\n}\n.flag-text {\n  color: inherit;\n  margin: 0 10px;\n  font-size: 13px;\n  font-family:\n    SF Mono,\n    Fira Code,\n    Fira Mono,\n    Roboto Mono,\n    Lucida Console,\n    Monaco,\n    Monospace;\n}\n.language-container {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 4px;\n  background: #172a45;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.language-container-selector {\n  margin: 0 !important;\n  color: #cbd5f5 !important;\n  padding: 10px 12px !important;\n  border: none;\n  border-bottom: 1px solid;\n  text-align: left;\n  background: #0a192f !important;\n}\n.language-container-selector:hover:not(:disabled) {\n  background: #172a45 !important;\n}\n.language-container-selector.active {\n  background: #172a45 !important;\n}\n.language-container-selector.active .arrow-active {\n  visibility: visible;\n}\n.language-container-selector.first-item {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.language-container-selector.middle-item {\n  border-radius: 0;\n}\n.language-container-selector.last-item {\n  border-bottom: none;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.arrow-language {\n  font-size: 10px;\n  height: 10px;\n  width: 10px;\n  fill: #64ffda;\n}\n.arrow-active {\n  font-size: 20px;\n  height: 20px;\n  width: 25px;\n  fill: #64ffda;\n  visibility: hidden;\n}\n::ng-deep .dropdown-toggle::after {\n  display: none;\n}\n::ng-deep .dropdown-menu.show {\n  padding: 0 !important;\n  border-radius: 7px !important;\n  background: #ccd6f6 !important;\n  margin-top: 10px !important;\n  left: 20px !important;\n  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);\n}\n@media (max-width: 1000px) {\n  .main-navbar .nav-link {\n    margin: 0;\n    padding: 0.5rem 0.7rem;\n  }\n}\n@media (max-width: 827px) {\n  nav .nav {\n    display: none;\n  }\n}\n@media (min-width: 827px) {\n  .menu-wrapper,\n  .menu-responsive {\n    display: none;\n  }\n}\n/*# sourceMappingURL=header-KAMICXOI.css.map */\n'] }]
  }], null, { onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/layout/header/header.ts", lineNumber: 39 });
})();

// src/app/app.ts
var _App = class _App {
  constructor() {
    this.title = inject(Title);
    this.meta = inject(Meta);
    this.languageStore = inject(LanguageStore);
  }
  ngOnInit() {
    this.languageStore.initLanguage();
    this.title.setTitle("Frans Vilcahuam\xE1n | Full Stack Developer");
    this.meta.addTags([
      { name: "keywords", content: "Frontend, backend, software, developer" },
      {
        name: "description",
        content: "Con 5 a\xF1os de experiencia desarrollando sistemas para hacer de la web un lugar mejor. En mi trabajo me gusta liderar, proponer y ejecutar ideas, escribir y refactorizar c\xF3digo limpio, reutilizable y escalable."
      }
    ]);
    AOS.init();
  }
};
_App.\u0275fac = function App_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _App)();
};
_App.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 0, template: function App_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header")(1, "router-outlet")(2, "app-footer");
  }
}, dependencies: [Header, RouterOutlet, Footer], encapsulation: 2 });
var App = _App;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [Header, RouterOutlet, Footer], template: "<app-header />\n<router-outlet />\n<app-footer />\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 15 });
})();

// node_modules/@angular/common/locales/en.js
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length;
  if (i === 1 && v === 0)
    return 1;
  return 5;
}
var en_default = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], u, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} 'at' {0}", u], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", plural];

// node_modules/@angular/common/locales/es-PE.js
var u2 = void 0;
function plural2(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (n === 1)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var es_PE_default = ["es-PE", [["a.\xA0m.", "p.\xA0m."]], u2, [["d", "l", "m", "m", "j", "v", "s"], ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"], ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"], ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]], [["D", "L", "M", "M", "J", "V", "S"], ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"], ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"], ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]], [["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "set.", "oct.", "nov.", "dic."], ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"]], [["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.", "Jul.", "Ago.", "Set.", "Oct.", "Nov.", "Dic."], ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]], [["a. C.", "d. C."], u2, ["antes de Cristo", "despu\xE9s de Cristo"]], 0, [6, 0], ["d/MM/yy", "d MMM y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", "{1} {0}", "{1}, {0}", u2], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0\xA0%", "\xA4\xA0#,##0.00", "#E0"], "PEN", "S/", "sol peruano", { "AUD": [u2, "$"], "BRL": [u2, "R$"], "BYN": [u2, "\u0440."], "CAD": [u2, "$"], "CNY": [u2, "\xA5"], "ESP": ["\u20A7"], "EUR": [u2, "\u20AC"], "FKP": [u2, "FK\xA3"], "GBP": [u2, "\xA3"], "HKD": [u2, "$"], "ILS": [u2, "\u20AA"], "INR": [u2, "\u20B9"], "JPY": [u2, "\xA5"], "KRW": [u2, "\u20A9"], "MXN": [u2, "$"], "NZD": [u2, "$"], "PEN": ["S/"], "PHP": [u2, "\u20B1"], "RON": [u2, "L"], "SSP": [u2, "SD\xA3"], "SYP": [u2, "S\xA3"], "TWD": [u2, "NT$"], "USD": [u2, "$"], "VEF": [u2, "BsF"], "VND": [u2, "\u20AB"], "XAF": [], "XCD": [u2, "$"], "XOF": [] }, "ltr", plural2];

// node_modules/@angular/common/locales/pt.js
var u3 = void 0;
function plural3(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === Math.floor(i) && (i >= 0 && i <= 1))
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var pt_default = ["pt", [["AM", "PM"]], u3, [["D", "S", "T", "Q", "Q", "S", "S"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "s\xE1b."], ["domingo", "segunda-feira", "ter\xE7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xE1bado"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "s\xE1b."]], u3, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], ["janeiro", "fevereiro", "mar\xE7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]], u3, [["a.C.", "d.C."], u3, ["antes de Cristo", "depois de Cristo"]], 0, [6, 0], ["dd/MM/y", "d 'de' MMM 'de' y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u3, u3, u3], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4\xA0#,##0.00", "#E0"], "BRL", "R$", "Real brasileiro", { "AUD": ["AU$", "$"], "BYN": [u3, "\u0440."], "JPY": ["JP\xA5", "\xA5"], "PHP": [u3, "\u20B1"], "PTE": ["Esc."], "RON": [u3, "L"], "SYP": [u3, "S\xA3"], "THB": ["\u0E3F"], "TWD": ["NT$"], "USD": ["US$", "$"] }, "ltr", plural3];

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class _TranslateHttpLoader {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
  static \u0275fac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslateHttpLoader)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(String), \u0275\u0275inject(String));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TranslateHttpLoader,
    factory: _TranslateHttpLoader.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [String]
    }]
  }], null);
})();

// src/environments/environment.ts
var environment = {
  production: true,
  gaMeasurementID: "G-7HJ1YQEM33"
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: `/${DEFAULT_LANGUAGE}`, pathMatch: "full" },
  {
    path: ":lang",
    children: [
      { path: "", loadComponent: () => import("./chunk-AN3LH7RB.js").then((m) => m.Home) },
      { path: "projects", loadComponent: () => import("./chunk-E3ZA2XE2.js").then((m) => m.Project) }
    ]
  },
  { path: "**", redirectTo: `/${DEFAULT_LANGUAGE}` }
];

// src/app/app.config.ts
registerLocaleData(es_PE_default, "es-PE");
registerLocaleData(en_default, "en-US");
registerLocaleData(pt_default, "pt-BR");
var httpLoaderFactory = (http) => new TranslateHttpLoader(http, "./i18n/", ".json");
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideGoogleAnalytics(environment.gaMeasurementID),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    {
      provide: LOCALE_ID,
      useFactory: () => {
        const savedLang = localStorage.getItem("language") || DEFAULT_LANGUAGE;
        return savedLang;
      }
    }
  ]
};

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/common/locales/en.js:
@angular/common/locales/es-PE.js:
@angular/common/locales/pt.js:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
//# sourceMappingURL=main-TC4AFHZV.js.map
