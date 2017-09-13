// import DOMNodeCollection from './dom_node_collection.js';
//
// window.$k = $k;
// window.document.addEventListener("DOMContentLoaded", e => {
//
// let submitButton = $k('.todo_button');
//
// submitButton.on('click', (e) => {
//   e.preventDefault();
//
//   let body = $k('.todo_button').el[0].value;
//   debugger
//   createTodoListItem(body);
//   $('.todo_input').els[0].value="";
// });
//
// }
//
// const createTodoListItem = (body) => {
//   $k('#todo-list').append(
//     `<li>${body}</li>`
//   );
// };
//
// function $k (selector) {
//   let els;
//   const array = [];
//   const funcs = [];
//
//   if (selector instanceof String) {
//     els = document.querySelectorAll(selector);
//       array.push(els);
//     }
//     return new DOMNodeCollection(array);
//   } else if (selector instanceof HTMLElement) {
//       els = [selector];
//       return new DOMNodeCollection(els);
//   } else if (selector instanceof Function) {
//       funcs.push(selector);
//   }
//
// document.addEventListener("DOMContentLoaded", e => {
//     funcs.forEach(func => {
//       debugger;
//       func();
//     });
//   });
// }
