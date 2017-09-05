const DOMNodeCollection = require("./dom_node_collection.js");

// Core function
// selector is a string used to select dom elements
window.$k = function(arg) {
  let htmlElements;
  if (arg instanceof HTMLElement) {
    htmlElements = [arg];
  } else {
    htmlElements = document.querySelectorAll(arg);
  }
  return new DOMNodeCollection(htmlElements);
};
