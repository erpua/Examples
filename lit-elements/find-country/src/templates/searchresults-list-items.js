import { LitElement, html } from "lit-element";

export default class SearchresultsListItems extends LitElement {
  render() {
    return html``;
  }
}
customElements.define("searchresults-list-items", SearchresultsListItems);
/* 
import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "lit-html/directives/repeat.js";

class ListItems extends LitElement {
  static get properties() {
    return {
      todoList: Array
    };
  }
  constructor() {
    super();
    console.dir(this);
  }

  render() {
    console.log(this.todoList);
    return html`
      <ul>
        ${repeat(
          this.todoList,
          todo =>
            html`
              <li>${todo.item}</li>
            `
        )}
      </ul>
    `;
  }
}

customElements.define("list-items", ListItems);
 */
