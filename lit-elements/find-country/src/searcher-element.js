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
          border-radius: 4px;
          box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
          transition: transform 0.15s ease-in, box-shadow 0.3s linear,
            border-radius linear, background linear;
          /* transition: all 0.5s ease-in-out; */
        }

        .country-name:hover {
          transform: scale(1.05);
          box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          background: linear-gradient(
            90deg,
            rgba(10, 0, 36, 1) 0%,
            rgba(9, 74, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          /*   transform: scale(1.05);
          color: grey;
          background: linear-gradient(
            90deg,
            rgba(10, 0, 36, 1) 0%,
            rgba(9, 74, 121, 1) 35%,
            rgba(0, 212, 255, 1) 100%
          );
          border-radius: 20px;
          padding: 2px; */
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
          @input="${this.showCountriesData}"
          type="text"
          class="input-name input-js"
          placeholder="Write the country name..."
        />
        <ul class="alert-list"></ul>
        <section
          class="country__description--css country__description--js"
        ></section>
      </form>

      <alert-matches-element class="match-alert"></alert-matches-element>
    `;
  }

  get matchAlert() {
    return this.shadowRoot.querySelector(".match-alert");
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
      .map(
        country =>
          `<div class="country-name @click=${this.qwe(country.name)}">${
            country.name
          }</div>`
      )
      .join(" ")}`;
  }

  qwe(countryName) {
    console.log(countryName);
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
          this.matchAlert.open("No matches!");
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
          this.matchAlert.open("Too many matches!");
        }
      });
  }
}
customElements.define("searcher-element", SearcherElement);
