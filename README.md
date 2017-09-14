# kQuery

kQuery is a lightweight library built using vanilla JavaScript. The goal was to replicate the important functionalities of jQuery without the fluff.

## Get Started

Download/clone the repo and include the script tag shown below:

```JS
<head>
  <title>kQuery</title>
  <script type="text/javascript" src="./kQuery.js"></script>
  ...
</head>
```

## Core Functionalities
`$k(selector)` takes either a string, an HTMLElement or a function.

Passing in a string or HTML element searches the DOM for the argument, and stores them in an array wrapped in a DOMNodeCollection object.

Passing in a function stores the function in an array, and called after DOMContentLoaded.

## DOM Manipulation and Traversal

`html(string)` replaces the inner HTML of each element of the called upon node. If no arguments are given, it will return the inner HTML of the first node of the array.

`empty()` clears the content of all nodes in the array.

`append(arg)` takes an HTMLElement, string, or instance of DOMNodeCollection. The argument is then appended to each element of the HTMLElement called upon.

`attr(attrName)` returns the HTML class

`addClass(className)` adds a class from the selected nodes

`removeClass(className)` removes class names from all selected nodes

`children(node)` returns all children of passed in node

`parent(node)` returns the immediate parent of passed in node

`find(selector)` returns a DOMNodeCollection of all nodes matching the selector passed in as an argument

`remove()` removes the html of all nodes from the DOM

## Implementation

This To-do is made by implementing kQuery. The all four buttons have an event listener on them. The 'styling buttons' add classes to the preset html tags.
