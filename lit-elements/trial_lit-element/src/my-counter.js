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
          background: linear-gradient(
            90deg,
            rgba(10, 0, 36, 1) 0%,
            rgba(9, 74, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          color: white;
        }
        div {
          border: 3px solid black;
          padding: 10px;
        }

        .w {
          background: linear-gradient(
            90deg,
            rgba(10, 0, 36, 1) 0%,
            rgba(9, 74, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          color: white;
          border: 3px solid black;
          padding: 10px;
          margin-bottom: 10px;
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

  get feedback() {
    return this.shadowRoot.querySelector(".feedback");
  }

  incrementar() {
    this.counter++;
    if (this.counter == 2) {
      this.feedback.open("has llegado a 2 clicks");
    }
  }

  /* //for each click
  incrementar() {
           this.counter++;
           this.shadowRoot
             .querySelector(".feedback")
             .open(`has llegado a ${this.counter} clicks`);
         } */
  decrementar() {
    this.counter--;
    if (this.counter == 0) {
      this.feedback.open("has reseteado los clicks");
    }
  }
}
customElements.define("my-counter", MyCounter);
