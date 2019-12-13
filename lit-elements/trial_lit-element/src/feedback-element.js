import { LitElement, html } from "lit-element";

export class FeedbackElement extends LitElement {
  static get properties() {
    return {
      msg: { type: String },
      opened: { type: Boolean }
    };
  }
  render() {
    return html`
      <style>
        div {
          position: fixed;
          bottom: 100px;
          left: 10%;
          overflow: hidden;
          height: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            90deg,
            rgba(10, 0, 36, 1) 0%,
            rgba(9, 74, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          color: white;
          width: 80%;
          transition: all 1s ease-in;
          font-size: 1px;
        }

        .opened {
          height: 50px;
          font-size: 2em;
        }
      </style>

      <div class="${this.opened ? "opened" : ""}">
        ${this.msg}
      </div>
    `;
  }

  open(mensaje) {
    this.msg = mensaje;
    this.opened = true;

    setTimeout(() => (this.opened = false), 2000);
  }
}
customElements.define("feedback-element", FeedbackElement);
