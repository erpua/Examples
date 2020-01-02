"use strict";

//pattern innumerable
const buttonActions = {
  EDIT: "edit",
  DELETE: "delete"
};

const data = [
  {
    id: "id-1",
    body:
      "malesuada Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quidem architecto. Eum libero illo quia beatae laborum, fugit porro praesentium debitis incidunt quidem dolores sed ullam velit nostrum vitae."
  },
  {
    id: "id-2",
    body:
      "blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quidem architecto. Eum libero illo quia beatae laborum, fugit porro praesentium debitis incidunt quidem dolores sed ullam velit nostrum vitae."
  },
  {
    id: "id-3",
    body:
      "fish Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quidem architecto. Eum libero illo quia beatae laborum, fugit porro praesentium debitis incidunt quidem dolores sed ullam velit nostrum vitae."
  }
];

class Model {
  static generateUniqueId = () =>
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  constructor(items = []) {
    this._items = items;
  }

  save(text) {
    const newItem = {
      id: Model.generateUniqueId(),
      body: text
    };
    this._items.push(newItem);
    return newItem;
  }

  filter(query = "") {
    return this._items.filter(item =>
      item.body.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }
}

const model = new Model(data);

//Refs
const refs = {
  list: document.querySelector(".list"),
  editor: document.querySelector(".editor"),
  filter: document.querySelector(".filter")
};

//UI
const createListItem = ({ id, body }) => {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.dataset.id = id;

  const text = document.createElement("p");
  text.classList.add("text");
  text.textContent = body;

  const actionsContainer = document.createElement("div");
  actionsContainer.classList.add("actions");

  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.textContent = "Edit";
  editButton.dataset.action = buttonActions.EDIT;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.delete = buttonActions.DELETE;

  actionsContainer.append(editButton, deleteButton);

  listItem.append(text, actionsContainer);

  return listItem;
};

const renderListitems = (listRef, items) => {
  const listItems = items.map(item => createListItem(item));

  listRef.innerHTML = "";

  listRef.append(...listItems);
};

renderListitems(refs.list, data);

const addItemToList = (listRef, item) => {
  const listItem = createListItem(item);

  listRef.appendChild(listItem);

  console.log(listItem);
};

//Handlers
const handleEditorSubmit = event => {
  event.preventDefault();

  const [input] = event.currentTarget.elements;

  const inputValue = input.value;

  if (inputValue.trim() === "") {
    return alert("no input!");
  }

  const savedItem = model.save(inputValue);

  addItemToList(refs.list, savedItem);

  event.currentTarget.reset();

  console.log("inputValue: ", inputValue);
  console.log("event: ", event);
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
  console.log("event.target.children: ", event.target.children);
  console.log("event.target.elements: ", event.target.elements);
};

const handleFilterChange = event => {
  console.log("event.target.value: ", event.target.value);

  const filtereditems = model.filter(event.target.value);

  renderListitems(refs.list, filtereditems);

  console.table(filtereditems);
};

//Listeners
refs.editor.addEventListener("submit", handleEditorSubmit);
refs.filter.addEventListener("input", handleFilterChange);
