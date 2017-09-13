export const createTodoListItem = (titleValue, bodyValue) => {
  $k('#todo-list').append(
    `<li>
    <h2>${titleValue}</h2>
    <p>${bodyValue}</p>
    </li>`
  );
};
