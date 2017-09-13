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

export default DOMNodeCollection;
