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

  delete(id) {
    this._items = this._items.filter(item => item.id != id);
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

/*
refs.list.addEventListener("click", e => {
  //console.log("Clicked!");
  //console.log("e.target: ", e.target);
  console.log("e.currentTarget: ", e.currentTarget);
});
*/

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
  deleteButton.dataset.action = buttonActions.DELETE;

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

/*
const handleListClick = event => {
  console.log("event.target", event.target);
  console.log("event.target.nodeName", event.target.nodeName);
  if (event.target.nodeName !== 'BUTTON') return;
  const action = event.target.dataset.action;
  console.log("action: ", action);
};
*/
const removeListItem = element => {
  // console.log("deleted!!!");
  const parentListItem = element.closest(".list-item");
  //console.log("parentListItem:", parentListItem);
  const id = parentListItem.dataset.id;
  model.delete(id);
  console.log("id:", id);
  console.log("model._items:", model._items);
  parentListItem.remove();
};

const handleListClick = ({ target }) => {
  //console.log("event.target", target);
  //console.log("event.target.nodeName", target.nodeName);
  if (target.nodeName !== "BUTTON") return;
  console.log("target:", target);
  const action = target.dataset.action;
  console.log("action: ", action);
  switch (action) {
    case buttonActions.DELETE:
      removeListItem(target);
      console.log("deleted!");
      break;
    default:
      console.log("invalid action");
      break;
  }
  /*
  switch (action) {
    case buttonActions.DELETE:
      // console.log("deleted!!!");
      const parentListItem = target.closest(".list-item");
      //console.log("parentListItem:", parentListItem);
      const id = parentListItem.dataset.id;
      model.delete(id);
      console.log("id:", id);
      console.log("model._items:", model._items);
      parentListItem.remove();
      break;
    default:
      console.log("invalid action");
      break;
  }
  // */
};

//Listeners
refs.editor.addEventListener("submit", handleEditorSubmit);
//refs.filter.addEventListener("input", handleFilterChange); in case if you want input to filter - not to add new item in DOM
refs.list.addEventListener("click", handleListClick);
