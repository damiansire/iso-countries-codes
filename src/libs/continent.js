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
const getCountriesByContinent = (continent) => {
  const filteredCountries = codes.filter((country) => country.continent.toLowerCase() === continent.toLowerCase());
  return filteredCountries;
};

const getContinentByCountryCode = (countryCode) => {
  const country = countryCodes.find((country) => country.code === countryCode.toUpperCase());
  return country ? country : null;
};

const getAllCountriesByContinent = (countryCodes) => {
  return countryCodes.reduce((continents, country) => {
    const continent = country.continent;

    if (!continents[continent]) {
      continents[continent] = {
        continent: continent,
        countries: [],
      };
    }

    continents[continent].countries.push(country.name);

    return continents;
  }, {});
};

module.exports = {
  getCountriesByContinent,
  getContinentByCountryCode,
  getAllCountriesByContinent,
};
