/*  SIMPLE FETCH()
const baseUrl = "https://restcountries.eu/rest/v2/";
const fetchAndLogCountries = () =>
  fetch(baseUrl).then(response => response.json());
export { fetchAndLogCountries };
 */
const baseUrl = "https://restcountries.eu/rest/v2/";

async function fetchAndLogCountries() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
}

export { fetchAndLogCountries };
