import { LitElement, html } from "lit-element";
import { fetchAndLogCountries } from "./services/api";
import { NotificationElement } from "../node_modules/@vaadin/vaadin-notification/vaadin-notification.js";
/* import { NotificationElement } from "../node_modules/@vaadin/vaadin-notification/vaadin-notification.js"; */

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
      <form>
        <input
          @input="${this.showCountriesData}"
          type="text"
          class="input-name input-js"
          placeholder="Write the country name..."
        />
        <ul class="alert-list"></ul>

        <section class="country-description country-description-js"></section>
      </form>
    `;
  }

  markupCountry(country) {
    return `<p class="country-name">${country.name}</p>
          <div class="description">
            <div>
             <p><span class="headline">Capital:</span> ${country.capital}</p>
              <p><span class="headline">Population:</span> ${
                country.population
              }</p>
              Languages:
              ${country.languages
                .map(language => `<li>${language.name}</li>`)
                .join(" ")}
            </div>
            <img src="${
              country.flag
            }" alt="This is the flag!" class="flag" width="300px"></div>`;
  }

  markupCountriesNames(country) {
    return `${country
      .map(country => `<div class="country-name">${country.name}</div>`)
      .join(" ")}`;
  }

  removeListItems() {
    const alertList = this.shadowRoot.querySelector(".alert-list");
    alertList.innerHTML = "";
    const list = this.shadowRoot.querySelector(".country-description-js");
    list.innerHTML = "";
  }

  async showCountriesData(event) {
    event.preventDefault();
    const input = this.shadowRoot.querySelector("input");
    const inputValue = input.value.toLowerCase();

    await fetchAndLogCountries(inputValue)
      .then(countries =>
        countries.filter(country =>
          country.name.toLowerCase().includes(inputValue)
        )
      )
      .then(result => {
        const resultArr = Array.from(result);
        console.log("resultArr:", resultArr);
        if (resultArr.length === 0) {
          console.log("warningMissingMatches");
          this.NotificationElement.open();
        } else if (inputValue.length === 0) {
          this.removeListItems();
        } else if (resultArr.length === 1) {
          this.removeListItems();
          const list = this.shadowRoot.querySelector(".country-description-js");
          list.insertAdjacentHTML("beforeend", this.markupCountry(result[0]));
        } else if (resultArr.length > 1 && resultArr.length <= 10) {
          this.removeListItems();
          const alertList = this.shadowRoot.querySelector(".alert-list");
          alertList.insertAdjacentHTML(
            "beforeend",
            this.markupCountriesNames(result)
          );
        } else {
          this.removeListItems();
          console.log("warningTooManyMatches");
        }
      });
  }
}
customElements.define("searcher-element", SearcherElement);
