const countryCodes = require("./countryCodes");

/*
 * Allowed continent names:
 * africa
 * asia
 * europe
 * northamerica
 * oceania
 * southamerica
 * antarctica
 */
function getCountriesByContinent(continent) {
  const filteredCountries = codes.filter((country) => country.continent.toLowerCase() === continent.toLowerCase());
  return filteredCountries;
}
