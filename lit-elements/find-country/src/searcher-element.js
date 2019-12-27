import { LitElement, html } from "lit-element";
import { fetchAndLogCountries } from "./services/api";

export class SearcherElement extends LitElement {
  render() {
    return html`
      <style>
        input {
          display: block;
          margin: 0 auto;
          width: 300px;
          font-size: 24px;
          padding: 14px;
          border-radius: 20px;
          border: solid 2px black;
        }

        button {
          display: block;
          margin: 30px auto;
          width: 200px;
          height: 30px;
          border-radius: 20px;
        }
      </style>
      <form name="form1">
        <input type="text" placeholder="Write the country name..." />
        <button @click="${this.showCountriesData}">
          Fetch and log countries
        </button>

        <textarea
          class="data-base"
          name="area"
          rows="40"
          cols="90"
          name="description"
        ></textarea>
      </form>
    `;
  }

  showCountriesData(event) {
    event.preventDefault();
    fetchAndLogCountries();
    const textArea = this.shadowRoot.querySelector(".data-base");
    const baseUrl = "https://restcountries.eu/rest/v2/";
    const countriesData = fetch(baseUrl).then(response =>
      console.log("---", response.json())
    );
    textArea.textContent = JSON.stringify(countriesData);
  }
}
customElements.define("searcher-element", SearcherElement);
