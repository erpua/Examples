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

  async showCountriesData(event) {
    event.preventDefault();
    const list = this.shadowRoot.querySelector(".country-description-js");
    const input = this.shadowRoot.querySelector("input");
    const inputValue = input.value.toLowerCase();

    const countryNamesData = await fetchAndLogCountries().then(data =>
      data.map(country => country.name)
    );
    console.log("countryNamesData:", countryNamesData);

    const lettersOfName = countryNamesData.map(i => i.split(""));
    console.log("lettersOfName:", lettersOfName);

    /*  
   
   // METHOD OF MATCHING INPUT.VALUE WITH COUNTRY.NAME ONE BY ONE
   
   if (inputValue === lettersOfName) {
    } 
    
    */

    const markupCountry = await fetchAndLogCountries().then(data => {
      return data
        .map(country => {
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
            }" alt="This is the flag!" class="flag" width="300px">
          </div>`;
        })
        .join(" ");
    });

    list.insertAdjacentHTML("beforeend", markupCountry);
  }
}
customElements.define("searcher-element", SearcherElement);
