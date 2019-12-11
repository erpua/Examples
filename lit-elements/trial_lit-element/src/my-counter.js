import { LitElement, html } from "lit-element";

export class MyCounter extends LitElement {
  static get properties() {
    return {
      counter: { type: Number }
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
      <style>
        button {
          width: 100px;
          border: 2px solid black;
          border-radius: 10px;
          background-color: rgb(120, 120, 120);
          color: white;
        }
        div {
          border: 3px solid red;
        }

        .w {
          background-color: #525252;
          color: white;
          border: 4px solid blue;
        }
      </style>

      <div class="w">Llevas ${this.counter} clicks!</div>
      <div>
        <button @click="${this.incrementar}">+1</button>
        <button @click="${this.decrementar}">-1</button>
      </div>
      <feedback-element class="feedback"></feedback-element>
    `;
  }

  incrementar() {
    this.counter++;

    if (this.counter == 2) {
      this.shadowRoot.querySelector(".feedback").open("has llegado a 2 clicks");
    }
  }

  /*   

  //for each click

  incrementar() {
           this.counter++;

           this.shadowRoot
             .querySelector(".feedback")
             .open(`has llegado a ${this.counter} clicks`);
         } */

  decrementar() {
    this.counter--;
  }
}
customElements.define("my-counter", MyCounter);
