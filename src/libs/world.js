const countryCodes = require("./countryCodes");

const getAllCountriesNames = () => {
  return countryCodes.map((x) => x.name);
};

const getAllCountriesCodes = () => {
  return countryCodes.map((x) => x.code);
};

const getCountryNameFromCountryCode = (countryCode) => {
  const country = countryCodes.find((item) => item.code.toUpperCase() === countryCode.toUpperCase());
  return country ? country.name : null;
};

const getCountryCodeFromCountryName = (countryName) => {
  const country = countryCodes.find((item) => item.name.toUpperCase() === countryName.toUpperCase());
  return country ? country.code : null;
};

module.exports = {
  getAllCountriesNames,
  getAllCountriesCodes,
  getCountryNameFromCountryCode,
  getCountryCodeFromCountryName,
};
