import { LitElement, html } from "lit-element";
import { fetchAndLogCountries } from "./services/api";
import { pWarning, pNotice } from "./utils/pnotify";
import { messages } from "./utils/messages";
import { debounce } from "../node_modules/lodash.debounce/index.js";

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
          border: dotted 2px black;
        }

        button {
          display: block;
          margin: 30px auto;
          width: 200px;
          height: 30px;
          border-radius: 20px;
        }

        form {
          max-width: 600px;
          margin: 100px auto;
        }

        .country__description--css {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.1)
            ),
            url("https://i.postimg.cc/fW1XCQPW/winter-bckrnd.jpg");
          background-size: cover;
          border-radius: 10px;
        }

        .country-name {
          text-align: center;
          font-size: 40px;
          font-weight: bold;
        }

        .headline {
          font-weight: bold;
          font-size: 20px;
          margin-left: 20px;
        }

        img {
          margin: 20px;
        }

        ul {
          list-style: none;
        }
      </style>

      <form>
        <input
          @input="${debounce(this.showCountriesData, 500)}"
          type="text"
          class="input-name input-js"
          placeholder="Write the country name..."
        />
        <ul class="alert-list"></ul>
        <section
          class="country__description--css country__description--js"
        ></section>
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
               <p><span class="headline">Languages:</span></p>
              <ul>
              ${country.languages
                .map(language => `<li>${language.name}</li>`)
                .join(" ")}</ul>
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
    const list = this.shadowRoot.querySelector(".country__description--js");
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
        if (resultArr.length === 0) {
          pWarning(messages.warningMissingMatches);
        } else if (inputValue.length === 0) {
          this.removeListItems();
        } else if (resultArr.length === 1) {
          this.removeListItems();
          const list = this.shadowRoot.querySelector(
            ".country__description--js"
          );
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
          pNotice(messages.warningTooManyMatches);
        }
      });
  }
}
customElements.define("searcher-element", SearcherElement);
