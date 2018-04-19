const hppingFont = function() {
    "use strict";

    const webfont = {
      defaultSetting: function(opt) {
        // console.log(opt);
        this.href = opt.href;
      },

      init: function(opt) {
        this.defaultSetting(opt);
        // console.log(localStorage.font_css_cache);
        if ((window.localStorage && localStorage.font_css_cache) || document.cookie.indexOf('font_css_cache') > -1) {
          if(localStorage.font_css_cache === '' && localStorage.font_css_cache === null &&
            localStorage.font_css_cache === undefined && localStorage.font_css_cache === 'undefined') {
            // console.log('localStorage가 없습니다.\nlocalStorage에 넣어줍니다.\n네트워크탭을 확인해 보세요.\nhpping.webfont.css를 다운로드 했습니다.');
            // console.log(localStorage);
            this.onEvent(window, 'load', this.injectFontsStylesheet);
          } else {
            // console.log('localStorage가 있습니다.\n네트워크탭을 확인해 보세요.\nhpping.webfont.css를 다운로드 하지 않았습니다.');
            // console.log(localStorage);
            this.injectFontsStylesheet();
          }
        } else {
          // console.log('localStorage가 없습니다.\nlocalStorage에 넣어줍니다.\n네트워크탭을 확인해 보세요.\nhpping.webfont.css를 다운로드 했습니다.');
          // console.log(localStorage);
          this.onEvent(window, 'load', this.injectFontsStylesheet);
        }
      },

      onEvent: function(el, ev, callback) {
        if(el.addEventListener) {
          el.addEventListener(ev, callback, false);
        }
      },

      isFileCached: function(href) {
        return (
          window.localStorage &&
          localStorage.font_css_cache &&
          (localStorage.font_css_cache_file === href)
        );
      },

      injectRawStyle: function(text) {
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = text;
        document.getElementsByTagName('head')[0].appendChild(style);
      },

      injectFontsStylesheet: function() {
        // console.log(webfont.isFileCached, webfont.href);
        if(webfont.isFileCached(webfont.href)) {
          webfont.injectRawStyle(localStorage.font_css_cache);
        } else {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', webfont.href, true);
          xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
              localStorage.font_css_cache = xhr.responseText;
              localStorage.font_css_cache_file = webfont.href;
            }
          };
          xhr.send();
        }
      },

    };

    return webfont;
};
