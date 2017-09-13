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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_node_collection__ = __webpack_require__(1);


function $k (selector) {
  let els;
  const array = [];
  const funcs = [];

  if (typeof(selector) === "string") {

    els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      array.push(els[i]);
    }
    return new __WEBPACK_IMPORTED_MODULE_0__dom_node_collection__["a" /* default */](array);

  } else if (selector instanceof HTMLElement) {
    els = [selector];
    return new __WEBPACK_IMPORTED_MODULE_0__dom_node_collection__["a" /* default */](els);
  } else if (selector instanceof Function) {
    funcs.push(selector);
  }

}

window.$k = $k;

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM loaded");

  const submitButton = $k("button").htmlElements[0];
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

});



//WINDOW TEST

// window.document.addEventListener("DOMContentLoaded", e => {
//   let  submitTodoButton = ('.todo_button');
//
//   submitTodoButton.on('click', (e) => {
//
//
//     e.preventDefault();
//
//     let titleValue = $k('#todo-input-title').els[0].value;
//     let bodyValue = $k('#todo-textarea-body').els[0].value;
//
//     createTodoListItem(titleValue, bodyValue);
//     $k('#todo-input-title').els[0].value="";
//     $k('#todo-textarea-body').els[0].value="";
//   });
// });
//
//
// window.$k.extend = (...args) => {
//   args.slice(1).forEach(obj => {
//     Object.keys(obj).forEach(k => {
//       args[0][k] = obj[k];
//     });
//   });
//   return args[0];
// };
//
// window.$k.ajax = (options) => {
//   let defaultOpts = {
//     method: 'GET',
//     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//     data: {},
//     url: "http://api.giphy.com/v1/gifs/search?q=food&api_key=068e61e473a84c9698874654a0a581f3&limit=5",
//     success: data => {
//       console.log("Retrieved Data");
//       console.log(data);
//     },
//     error: err => {
//       console.error("An error occurred.");
//     }
//   };
//
//   $k.extend(defaultOpts, options);
//
//   const xhr = new XMLHttpRequest();
//   xhr.open(defaultOpts.method, defaultOpts.url);
//   xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       defaultOpts.success();
//     } else {
//       defaultOpts.error();
//     }
    // console.log(xhr.status);
    // console.log(xhr.reponseType);
    // console.log(xhr.response);
//   };
//
//   xhr.send(defaultOpts.data);
// };
// const DOMNodeCollection = require("./dom_node_collection.js");
// const queue = [];
//
// window. = function(arg) {
//   let htmlElements;
//   if(arg instanceof HTMLElement){
//     return new DOMNodeCollection([arg]);
//   } else if(typeof arg === "function") {
//     if(document.readyState === 'complete'){
//       arg();
//     } else {
//       queue.push(arg);
//     }
//   } else {
//     let NodeList = document.querySelectorAll(arg);
//     NodeList = Array.from(NodeList);
//     return new DOMNodeCollection(NodeList);
//   }
// };
//
// //extend is a function that merges any number of objects, resulting in all objects
// .extend = function(obj, ...otherObjs) {
//   otherObjs.forEach((arg) => {
//     let keys = Object.key(arg);
//     keys.forEach( key => {
//       obj[key] = arg[key];
//     });
//   });
// };
//
// function trigger (queueArray) {
//   queue.forEach(function(callback) {
//     callback();
//   });
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   trigger(queue);
// });
//
//
// addToQueryString = function(obj) {
//   let res = "";
//   for(let prop in obj){
//     if(obj.hasOwnProperty(prop)){
//       res += "=" + obj[prop] + "&";
//     }
//   }
//   return res.substring(0, res.length - 1);
// };
//
// .ajax = function(options = {}) {
//   const defaults = {
//     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//     method: "GET",
//     url: "",
//     success: () => {},
//     error: () => {},
//     data: {},
//   };
//   options = .extend(defaults, options);
//   options.method = options.method.toUpperCase();
//
//   if (options.method === "GET"){
//     options.url += "?" + addToQueryString(options.data);
//   }
//   const request = new XMLHttpRequest();
//   request.open(options.method, options.url, true);
//   request.onload = e => {
//
//     if (request.status >= 200 && request.status < 300) {
//       options.success(request.response);
//     } else {
//       options.error(request.response);
//     }
//   };
//   request.send(JSON.stringify(options.data));
// };


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

// $k("ul").append("<li>LOL</li>")
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
    debugger;
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