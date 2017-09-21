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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_dom_node_collection__ = __webpack_require__(1);


const funcs = [];
function $k (selector) {
  let els;
  const array = [];

  if (typeof(selector) === "string") {
    els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      array.push(els[i]);
    }
    return new __WEBPACK_IMPORTED_MODULE_0__lib_dom_node_collection__["a" /* default */](array);

  } else if (selector instanceof HTMLElement) {
    els = [selector];
    return new __WEBPACK_IMPORTED_MODULE_0__lib_dom_node_collection__["a" /* default */](els);
  } else if (selector instanceof Function) {
    funcs.push(selector);
  }

}

window.$k = $k;

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM loaded");

  // invokes functions when document is ready
  funcs.forEach(func => {
    func();
  });

  // Add To do //
  const submitButton = $k("button").htmlElements[3];
  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    getInput();
  });

  const getInput = function() {
    const inputTag = $k("input").htmlElements[0];
    const todo = $k("input").htmlElements[0].value;

    appendInput(todo);
    $k("input").htmlElements[0].value = "";
  };

  const appendInput = function(todo) {
    let ul = $k("ul");
    let li = document.createElement("li");
    let elTodo = document.createTextNode(todo);

    li.appendChild(elTodo);
    ul.append(li);
  };

  // Add styling //
  const styleHeader = $k("button").htmlElements[0];
  styleHeader.addEventListener("click", function(e) {
    e.preventDefault();
    let header = $k("h2");
    header.addClass("header");
  });

  const styleInput = $k("button").htmlElements[1];
  styleInput.addEventListener("click", function(e) {
    e.preventDefault();
    let input = $k("input");
    input.addClass("input");
  });

  const styleButton = $k("button").htmlElements[2];
  styleButton.addEventListener("click", function(e) {
    e.preventDefault();
    let button = $k("button");
    button.addClass("button");
  });

});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DOMNodeCollection {

  constructor(htmlElements) {
    this.htmlElements = htmlElements;
    this.htmlElements.forEach( node => node.callbacks = {} );

    this.html = this.html.bind(this);
    this.empty = this.empty.bind(this);
    this.remove = this.remove.bind(this);
    this.attr = this.attr.bind(this);
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.find = this.find.bind(this);
    this.children = this.children.bind(this);
    this.parent = this.parent.bind(this);
    this.append = this.append.bind(this);
  }

  html(str) {
    if(str) {
      this.htmlElements.forEach(function(el) {
        el.innerHTML = str;
      });
    } else {
      return this.htmlElements[0].innerHTML;
    }
  }

  empty() {
    this.htmlElements.forEach(function(el) {
      el.innerHTML = "";
    });
  }
  
  append(arg) {
    if (arg instanceof HTMLElement) {
      this.htmlElements.forEach(function(el) {
        el.innerHTML += arg.outerHTML;
      });
    } else if (typeof arg === "string" ) {
      this.htmlElements.forEach(function(el) {
        el.innerHTML += arg;
      });
    } else if (arg instanceof DOMNodeCollection) {
      this.htmlElements.forEach(function(el) {
        arg.htmlElements.forEach(function(argEl) {
          el.innerHTML += argEl.outerHTML;
        });
      });
    }
  }

  remove(selector) {
    if (typeof selector === "string" ) {
      this.htmlElements.forEach(function(el) {
        if (el.matches(selector)) {
          el.remove();
        }
      });
    } else {
      this.htmlElements.forEach(function(el) {
        el.remove();
      });
    }
  }

  attr(attrName) {
    if (this.htmlElements.length === 0) { return undefined; }
    return this.htmlElements[0].getAttribute(attrName);
  }

  addClass(arg) {
    var cName = this.htmlElements;
    cName.forEach( function(node) {
      if (node.className === "") {
        node.className = arg;
      } else {
        node.className += ` ${arg}`;
      }
    });
  }

  removeClass(arg) {
    var cName = this.htmlElements;
    cName.forEach( node => node.classList.remove(arg));
  }

  find(selector) {
    const res = [];
    this.htmlElements.forEach(function(el) {
      const matched = el.querySelectorAll(selector);
      for (let i = 0; i < matched.length; i++) {
        res.push(matched[i]);
      }
    });
    return new DOMNodeCollection(res);
  }

  children() {
    const res = [];
    this.htmlElements.forEach(function(el) {
      let children = el.children;
      for (let i = 0; i < children.length; i++) {
        res.push(children[i]);
      }
    });
    return new DOMNodeCollection(res);
  }

  parent() {
    const res = [];
    this.htmlElements.forEach(function(child) {
      res.push(child.parentNode);
    });
    return new DOMNodeCollection(res);
  }

  on(eventName, callback) {
    this.htmlElements.forEach(function(node) {
      node.addEventListener(eventName, callback);
      if (!node.callbacks[eventName]) {
        node.callbacks[eventName] = [callback];
      } else {
        node.callbacks[eventName].push(callback);
      }
    });
  }

  off(eventName) {
    this.htmlElements.forEach(function(node) {
        node.removeEventListener(eventName, node.callback);
      });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (DOMNodeCollection);


/***/ })
/******/ ]);