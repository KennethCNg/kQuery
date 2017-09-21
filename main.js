import DOMNodeCollection from './lib/dom_node_collection';

const funcs = [];
function $k (selector) {
  let els;
  const array = [];

  if (typeof(selector) === "string") {
    els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      array.push(els[i]);
    }
    return new DOMNodeCollection(array);

  } else if (selector instanceof HTMLElement) {
    els = [selector];
    return new DOMNodeCollection(els);
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
