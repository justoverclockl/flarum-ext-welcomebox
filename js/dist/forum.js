module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/common/components/WelcomeBoxWidget.js":
/*!***************************************************!*\
  !*** ./src/common/components/WelcomeBoxWidget.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WelcomeBoxWidget; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/components/Widget */ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/formatNumber */ "flarum/utils/formatNumber");
/* harmony import */ var flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/AvatarEditor */ "flarum/components/AvatarEditor");
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/SignUpModal */ "flarum/components/SignUpModal");
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_8__);










var WelcomeBoxWidget = /*#__PURE__*/function (_Widget) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(WelcomeBoxWidget, _Widget);

  function WelcomeBoxWidget() {
    return _Widget.apply(this, arguments) || this;
  }

  var _proto = WelcomeBoxWidget.prototype;

  _proto.oninit = function oninit(vnode) {
    _Widget.prototype.oninit.call(this, vnode);
  };

  _proto.oncreate = function oncreate(vnode) {};

  _proto.className = function className() {
    // css class for the container
    return 'welcomebox-widget';
  };

  _proto.icon = function icon() {
    // Widget icon.
    return 'fas fa-user-tie';
  };

  _proto.content = function content() {
    var user = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session.user;
    var SettingsLink = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route('settings');
    var ImgAvatar = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('imgUrl') || flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/no-avatar.png';

    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('justoverclock-welcomebox.UseWidget') === true) {
      if (user) {
        var lastseenAt = user.data.attributes.lastSeenAt.slice(0, 10);
        return m('div', {
          className: 'containerwb'
        }, m('div', {
          className: 'backgrwb'
        }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
          icon: 'fas fa-sign-out-alt logoutt',
          title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.forum.header.log_out_button'),
          className: 'Dropdown-toggle Button logwbox',
          onclick: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session.logout.bind(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.session)
        }), [m('div', m('a', {
          href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route.user(user)
        }, m('div', {
          className: 'avatarwb'
        }, flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_6___default.a.component({
          user: user
        })))), m('div', {
          className: 'contentwb'
        }, m('div', {
          className: 'textinfo'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-ext-welcomebox.forum.wback'), m('br'), m('strong', flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user))), m('div', {
          className: 'cont'
        }, m('div', {
          className: 'circletop'
        }, [m('a', {
          href: SettingsLink,
          title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.forum.settings.title')
        }, m('i', {
          className: 'menuicon fas fa-tasks'
        })), m('a', {
          href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route.user(user),
          title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-ext-welcomebox.forum.tooltipProfile')
        }, m('i', {
          className: 'menuicon far fa-user'
        })), m('a', {
          href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route.user(user) + '/mentions',
          title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-ext-welcomebox.forum.tooltipMentions')
        }, m('i', {
          className: 'menuicon fas fa-at'
        })), m('a', {
          href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.route.user(user) + '/discussions',
          title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-ext-welcomebox.forum.tooltipDisclist')
        }, m('i', {
          className: 'menuicon far fa-list-alt'
        }))]))), m('div', {
          className: 'iconbadge'
        }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default()(user.badges().toArray())), m('.ulwb', {
          className: 'contentwb'
        }, [m('li', [m('label', {
          className: 'textinfo'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-ext-welcomebox.forum.npost')), ': ', m('strong', {
          className: 'textinfo'
        }, flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default()(user.commentCount()))]), m('li', [m('label', {
          className: 'textinfo'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-ext-welcomebox.forum.discussion')), ': ', m('strong', {
          className: 'textinfo'
        }, flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default()(user.discussionCount()))])])]));
      } else if (!user && flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.forum.attribute('HideGuestBox') === true) {
        return m('div', {
          className: 'containerwb'
        }, m('div', {
          className: 'backgrwbguest'
        }, [m('img', {
          className: 'guestavatarimg',
          src: ImgAvatar
        }), m('div', {
          className: 'guesttext'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')), m('p', {
          className: 'guestdesc'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('flarum-ext-welcomebox.forum.notregistered')), m('button', {
          className: '.SplitDropdown-button Button Button--primary hasIcon',
          type: 'button',
          onclick: function onclick(componentClass, attrs) {
            return flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.modal.show(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_7___default.a, attrs);
          }
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default.a.translator.trans('core.forum.header.sign_up_link')), m('div', {
          className: 'contentwb'
        })]));
      }
    }
  };

  return WelcomeBoxWidget;
}(flarum_extensions_afrux_forum_widgets_core_common_components_Widget__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/common/registerWidget.js":
/*!**************************************!*\
  !*** ./src/common/registerWidget.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets */ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets");
/* harmony import */ var flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_WelcomeBoxWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/WelcomeBoxWidget */ "./src/common/components/WelcomeBoxWidget.js");


/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  new flarum_extensions_afrux_forum_widgets_core_common_extend_Widgets__WEBPACK_IMPORTED_MODULE_0___default.a().add({
    key: 'WelcomeBoxWdg',
    component: _components_WelcomeBoxWidget__WEBPACK_IMPORTED_MODULE_1__["default"],
    isDisabled: false,
    isUnique: true,
    placement: 'end',
    position: 1
  }).extend(app, 'justoverclock-welcomebox');
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/formatNumber */ "flarum/utils/formatNumber");
/* harmony import */ var flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/AvatarEditor */ "flarum/components/AvatarEditor");
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/SignUpModal */ "flarum/components/SignUpModal");
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_registerWidget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/registerWidget */ "./src/common/registerWidget.js");












flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('justoverclock/flarum-ext-welcomebox', function () {
  Object(_common_registerWidget__WEBPACK_IMPORTED_MODULE_11__["default"])(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'sidebarItems', function (items) {
    var user = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    var SettingsLink = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('settings');

    if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('justoverclock-welcomebox.UseWidget') === false) {
      if (user) {
        var lastseenAt = user.data.attributes.lastSeenAt.slice(0, 10);
        var badges = user.badges().toArray();
        items.add('welcomeBox', m("div", {
          className: "containerwb"
        }, m("div", {
          className: "backgrwb"
        }, m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
          icon: "fas fa-sign-out-alt logoutt",
          className: "Dropdown-toggle Button logwbox",
          onclick: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.logout.bind(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session),
          title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.header.log_out_button')
        }), m("div", null, m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(user)
        }, m("div", {
          className: "avatarwb"
        }, flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_7___default.a.component({
          user: user
        })))), m("div", {
          className: "contentwb"
        }, m("div", {
          className: "textinfo"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-welcomebox.forum.wback'), m("br", null), m("strong", null, flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user))), m("div", {
          className: "cont"
        }, m("div", {
          className: "circletop"
        }, m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: SettingsLink,
          title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.settings.title')
        }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-tasks menuicon')), m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(user),
          title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.settings.tooltipProfile')
        }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-user menuicon')), m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user.mentions', {
            username: user.slug()
          }),
          title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.settings.tooltipMentions')
        }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-at menuicon')), m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.route('user.discussions', {
            username: user.slug()
          }),
          title: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.settings.tooltipDisclist')
        }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_4___default()('fas fa-list-alt menuicon'))))), m("div", {
          className: "iconbadge"
        }, badges.length ? m("ul", {
          className: "UserCard-badges badges"
        }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_6___default()(badges)) : ''), m("div", {
          className: "ulwb contentwb"
        }, m("li", null, m("label", {
          className: "textinfo"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-welcomebox.forum.npost')), ': ', m("strong", {
          className: "textinfo"
        }, flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5___default()(user.commentCount()))), m("li", null, m("label", {
          className: "textinfo"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-welcomebox.forum.discussion')), ': ', m("strong", {
          className: "textinfo"
        }, flarum_utils_formatNumber__WEBPACK_IMPORTED_MODULE_5___default()(user.discussionCount()))), m("li", null, m("label", {
          className: "textinfo"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-welcomebox.forum.lastSeen')), ': ', m("strong", {
          className: "textinfo"
        }, lastseenAt))))), 20);
      }
    }
  });
});
Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'sidebarItems', function (items) {
  var ImgAvatar = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('imgUrl') || flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-welcomebox/no-avatar.png';

  if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('justoverclock-welcomebox.UseWidget') === false) {
    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user) {
      if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('HideGuestBox') === true) {
        items.add('welcomeBoxGuest', m("div", {
          className: "containerwb"
        }, m("div", {
          className: "backgrwbguest"
        }, m("img", {
          "class": "guestavatarimg",
          src: ImgAvatar
        }), m("div", {
          "class": "guesttext"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-welcomebox.forum.welcomeguest')), m("p", {
          className: "guestdesc"
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('flarum-ext-welcomebox.forum.notregistered')), m(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: "Button Button--primary welcomeBox-LoginButton",
          onclick: function onclick() {
            return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_8___default.a);
          }
        }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.header.sign_up_link')))), 20);
      }
    }
  }
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/components/AvatarEditor":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/AvatarEditor']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AvatarEditor'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/SignUpModal":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/SignUpModal']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SignUpModal'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/components/Widget":
/*!*****************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget']" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/components/Widget'];

/***/ }),

/***/ "flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets":
/*!**************************************************************************************************!*\
  !*** external "flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets']" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extensions/afrux-forum-widgets-core/common/extend/Widgets'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/utils/formatNumber":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/formatNumber']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/formatNumber'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map