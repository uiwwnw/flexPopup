/*
  flexPopup v0.1.0
  http:/github.com/uiwwnw/flexPopup/
  copyright uiwwnw
*/
var flexPopup = function (e) {
  var _this = this;
  var ctr = {};
  ctr.bool = false;
  ctr.css = {
    padding: 20
  };
  ctr.el = document.getElementById(e);
  ctr.header = ctr.el.querySelector('.flexPopupHeader');
  ctr.contents = ctr.el.querySelector('.flexPopupContents');
  ctr.position = ctr.el.querySelector('.flexPopupPosition');
  ctr.footer = ctr.el.querySelector('.flexPopupFooter');
  ctr.dim = document.createElement('i');
  ctr.dim.classList.add('flexPopupDim')
  ctr.el.appendChild(ctr.dim);
  ctr.headerHeight;
  ctr.footerHeight;
  ctr.elStyle;
  var fnReady = function (ctr, fn) {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };
  // var fnHasClass = function(e, name) {
  //   var classs = e.getAttribute('class');
  //   if (classs === null || classs === undefined || classs === ' ') {
  //     return false;
  //   }
  //   if (classs.indexOf(name) === -1) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };
  var fnAddClass = function (e, name) {
    var classs = e.getAttribute('class');
    if (classs === null || classs === undefined || classs === ' ') {
      e.setAttribute('class', name);
      return false;
    }
    if (classs.indexOf(name) === -1) {
      e.setAttribute('class', classs + ' ' + name);
    }
  };
  var fnRemoveClass = function (e, name) {
    var classs = e.getAttribute('class');
    if (classs === null) {
      return false;
    }
    if (classs.indexOf(name) !== -1) {
      classs = classs.substr(0, classs.indexOf(name) - 1);
      e.setAttribute('class', classs);
    }
  };
  // var fnToggleClass = function() {
  //   var classs = ctr.el.getAttribute('class');
  //   var name = 'open';
  //   if (classs === null) {
  //     ctr.el.setAttribute('class', name);
  //     return false;
  //   }
  //   if (classs.indexOf(name) === -1) {
  //     ectr.el.setAttribute('class', classs + ' ' + name);
  //   } else {
  //     classs = classs.substr(0, classs.indexOf(name) - 1);
  //     ctr.el.setAttribute('class', classs);
  //   }
  // };
  this.dimClose = function () {
    ctr.dim.onclick = function () {
      _this.close();
    };
  }();
  this.applyHeight = function () {
    // 높이지정
    ctr.position.removeAttribute('style');
    ctr.position.setAttribute('style', 'height:' + ctr.contents.offsetHeight + 'px;');
  };

  this.open = function () {
    ctr.el.setAttribute('aria-hidden', 'false');
    fnAddClass(ctr.el, 'open');
    fnReady(ctr.contents, _this.applyHeight);
    ctr.headerHeight = ctr.header === null ? ctr.css.padding : ctr.header.offsetHeight + ctr.css.padding;
    ctr.footerHeight = ctr.footer === null ? ctr.css.padding : ctr.footer.offsetHeight + ctr.css.padding;
    ctr.elStyle = 'padding-top: ' + ctr.headerHeight + 'px; padding-bottom:' + ctr.footerHeight + 'px;';
    ctr.el.setAttribute('style', ctr.elStyle);
    // ctr.el.onmousemove = function(e) {
    //   e.preventDefault;
    // };
    if (ctr.header !== null) {
      fnAddClass(ctr.el, 'hasHeader');
    }
    if (ctr.footer !== null) {
      fnAddClass(ctr.el, 'hasFooter');
    }
    ctr.bool = true;
  };
  this.close = function () {
    ctr.el.setAttribute('aria-hidden', 'true');
    fnRemoveClass(ctr.el, 'open');
    ctr.bool = false;
  };
  this.callback = function () {
    return ctr;
  };
};

