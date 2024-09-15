const codes = [
  {
    name: "Afghanistan",
    code: "AF",
    continent: "asia",
  },
  {
    name: "Albania",
    code: "AL",
    continent: "europe",
  },
  {
    name: "Algeria",
    code: "DZ",
    continent: "africa",
  },
  {
    name: "American Samoa",
    code: "AS",
    continent: "oceania",
  },
  {
    name: "Andorra",
    code: "AD",
    continent: "europe",
  },
  {
    name: "Angola",
    code: "AO",
    continent: "africa",
  },
  {
    name: "Anguilla",
    code: "AI",
    continent: "northamerica",
  },
  {
    name: "Antarctica",
    code: "AQ",
    continent: "antarctica",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    continent: "northamerica",
  },
  {
    name: "Argentina",
    code: "AR",
    continent: "southamerica",
  },
  {
    name: "Armenia",
    code: "AM",
    continent: "asia",
  },
  {
    name: "Aruba",
    code: "AW",
    continent: "northamerica",
  },
  {
    name: "Australia",
    code: "AU",
    continent: "oceania",
  },
  {
    name: "Austria",
    code: "AT",
    continent: "europe",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    continent: "asia",
  },
  {
    name: "Bahamas",
    code: "BS",
    continent: "northamerica",
  },
  {
    name: "Bahrain",
    code: "BH",
    continent: "asia",
  },
  {
    name: "Bangladesh",
    code: "BD",
    continent: "asia",
  },
  {
    name: "Barbados",
    code: "BB",
    continent: "northamerica",
  },
  {
    name: "Belarus",
    code: "BY",
    continent: "europe",
  },
  {
    name: "Belgium",
    code: "BE",
    continent: "europe",
  },
  {
    name: "Belize",
    code: "BZ",
    continent: "northamerica",
  },
  {
    name: "Benin",
    code: "BJ",
    continent: "africa",
  },
  {
    name: "Bermuda",
    code: "BM",
    continent: "northamerica",
  },
  {
    name: "Bhutan",
    code: "BT",
    continent: "asia",
  },
  {
    name: "Bolivia, Plurinational State of",
    code: "BO",
    continent: "southamerica",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "BQ",
    continent: "northamerica",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    continent: "europe",
  },
  {
    name: "Botswana",
    code: "BW",
    continent: "africa",
  },
  {
    name: "Bouvet Island",
    code: "BV",
    continent: "antarctica",
  },
  {
    name: "Brazil",
    code: "BR",
    continent: "southamerica",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    continent: "asia",
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
    continent: "asia",
  },
  {
    name: "Bulgaria",
    code: "BG",
    continent: "europe",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    continent: "africa",
  },
  {
    name: "Burundi",
    code: "BI",
    continent: "africa",
  },
  {
    name: "Cambodia",
    code: "KH",
    continent: "asia",
  },
  {
    name: "Cameroon",
    code: "CM",
    continent: "africa",
  },
  {
    name: "Canada",
    code: "CA",
    continent: "northamerica",
  },
  {
    name: "Cape Verde",
    code: "CV",
    continent: "africa",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    continent: "northamerica",
  },
  {
    name: "Central African Republic",
    code: "CF",
    continent: "africa",
  },
  {
    name: "Chad",
    code: "TD",
    continent: "africa",
  },
  {
    name: "Chile",
    code: "CL",
    continent: "southamerica",
  },
  {
    name: "China",
    code: "CN",
    continent: "asia",
  },
  {
    name: "Christmas Island",
    code: "CX",
    continent: "asia",
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC",
    continent: "asia",
  },
  {
    name: "Colombia",
    code: "CO",
    continent: "southamerica",
  },
  {
    name: "Comoros",
    code: "KM",
    continent: "africa",
  },
  {
    name: "Congo",
    code: "CG",
    continent: "africa",
  },
  {
    name: "Congo, the Democratic Republic of the",
    code: "CD",
    continent: "africa",
  },
  {
    name: "Cook Islands",
    code: "CK",
    continent: "oceania",
  },
  {
    name: "Costa Rica",
    code: "CR",
    continent: "northamerica",
  },
  {
    name: "Croatia",
    code: "HR",
    continent: "europe",
  },
  {
    name: "Cuba",
    code: "CU",
    continent: "northamerica",
  },
  {
    name: "Curaçao",
    code: "CW",
    continent: "northamerica",
  },
  {
    name: "Cyprus",
    code: "CY",
    continent: "asia",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    continent: "europe",
  },
  {
    name: "Côte d'Ivoire",
    code: "CI",
    continent: "africa",
  },
  {
    name: "Denmark",
    code: "DK",
    continent: "europe",
  },
  {
    name: "Djibouti",
    code: "DJ",
    continent: "africa",
  },
  {
    name: "Dominica",
    code: "DM",
    continent: "northamerica",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    continent: "northamerica",
  },
  {
    name: "Ecuador",
    code: "EC",
    continent: "southamerica",
  },
  {
    name: "Egypt",
    code: "EG",
    continent: "africa",
  },
  {
    name: "El Salvador",
    code: "SV",
    continent: "northamerica",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    continent: "africa",
  },
  {
    name: "Eritrea",
    code: "ER",
    continent: "africa",
  },
  {
    name: "Estonia",
    code: "EE",
    continent: "europe",
  },
  {
    name: "Ethiopia",
    code: "ET",
    continent: "africa",
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
    continent: "southamerica",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    continent: "europe",
  },
  {
    name: "Fiji",
    code: "FJ",
    continent: "oceania",
  },
  {
    name: "Finland",
    code: "FI",
    continent: "europe",
  },
  {
    name: "France",
    code: "FR",
    continent: "europe",
  },
  {
    name: "French Guiana",
    code: "GF",
    continent: "southamerica",
  },
  {
    name: "French Polynesia",
    code: "PF",
    continent: "oceania",
  },
  {
    name: "French Southern Territories",
    code: "TF",
    continent: "antarctica",
  },
  {
    name: "Gabon",
    code: "GA",
    continent: "africa",
  },
  {
    name: "Gambia",
    code: "GM",
    continent: "africa",
  },
  {
    name: "Georgia",
    code: "GE",
    continent: "asia",
  },
  {
    name: "Germany",
    code: "DE",
    continent: "europe",
  },
  {
    name: "Ghana",
    code: "GH",
    continent: "africa",
  },
  {
    name: "Gibraltar",
    code: "GI",
    continent: "europe",
  },
  {
    name: "Greece",
    code: "GR",
    continent: "europe",
  },
  {
    name: "Greenland",
    code: "GL",
    continent: "northamerica",
  },
  {
    name: "Grenada",
    code: "GD",
    continent: "northamerica",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    continent: "northamerica",
  },
  {
    name: "Guam",
    code: "GU",
    continent: "oceania",
  },
  {
    name: "Guatemala",
    code: "GT",
    continent: "northamerica",
  },
  {
    name: "Guernsey",
    code: "GG",
    continent: "europe",
  },
  {
    name: "Guinea",
    code: "GN",
    continent: "africa",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    continent: "africa",
  },
  {
    name: "Guyana",
    code: "GY",
    continent: "southamerica",
  },
  {
    name: "Haiti",
    code: "HT",
    continent: "northamerica",
  },
  {
    name: "Heard Island and McDonald Islands",
    code: "HM",
    continent: "antarctica",
  },
  {
    name: "Holy See (Vatican City State)",
    code: "VA",
    continent: "europe",
  },
  {
    name: "Honduras",
    code: "HN",
    continent: "northamerica",
  },
  {
    name: "Hong Kong",
    code: "HK",
    continent: "asia",
  },
  {
    name: "Hungary",
    code: "HU",
    continent: "europe",
  },
  {
    name: "Iceland",
    code: "IS",
    continent: "europe",
  },
  {
    name: "India",
    code: "IN",
    continent: "asia",
  },
  {
    name: "Indonesia",
    code: "ID",
    continent: "asia",
  },
  {
    name: "Iran, Islamic Republic of",
    code: "IR",
    continent: "asia",
  },
  {
    name: "Iraq",
    code: "IQ",
    continent: "asia",
  },
  {
    name: "Ireland",
    code: "IE",
    continent: "europe",
  },
  {
    name: "Isle of Man",
    code: "IM",
    continent: "europe",
  },
  {
    name: "Israel",
    code: "IL",
    continent: "asia",
  },
  {
    name: "Italy",
    code: "IT",
    continent: "europe",
  },
  {
    name: "Jamaica",
    code: "JM",
    continent: "northamerica",
  },
  {
    name: "Japan",
    code: "JP",
    continent: "asia",
  },
  {
    name: "Jersey",
    code: "JE",
    continent: "europe",
  },
  {
    name: "Jordan",
    code: "JO",
    continent: "asia",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    continent: "asia",
  },
  {
    name: "Kenya",
    code: "KE",
    continent: "africa",
  },
  {
    name: "Kiribati",
    code: "KI",
    continent: "oceania",
  },
  {
    name: "Korea, Democratic People's Republic of",
    code: "KP",
    continent: "asia",
  },
  {
    name: "Korea, Republic of",
    code: "KR",
    continent: "asia",
  },
  {
    name: "Kuwait",
    code: "KW",
    continent: "asia",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    continent: "asia",
  },
  {
    name: "Lao People's Democratic Republic",
    code: "LA",
    continent: "asia",
  },
  {
    name: "Latvia",
    code: "LV",
    continent: "europe",
  },
  {
    name: "Lebanon",
    code: "LB",
    continent: "asia",
  },
  {
    name: "Lesotho",
    code: "LS",
    continent: "africa",
  },
  {
    name: "Liberia",
    code: "LR",
    continent: "africa",
  },
  {
    name: "Libya",
    code: "LY",
    continent: "africa",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    continent: "europe",
  },
  {
    name: "Lithuania",
    code: "LT",
    continent: "europe",
  },
  {
    name: "Luxembourg",
    code: "LU",
    continent: "europe",
  },
  {
    name: "Macao",
    code: "MO",
    continent: "asia",
  },
  {
    name: "Macedonia, the Former Yugoslav Republic of",
    code: "MK",
    continent: "europe",
  },
  {
    name: "Madagascar",
    code: "MG",
    continent: "africa",
  },
  {
    name: "Malawi",
    code: "MW",
    continent: "africa",
  },
  {
    name: "Malaysia",
    code: "MY",
    continent: "asia",
  },
  {
    name: "Maldives",
    code: "MV",
    continent: "asia",
  },
  {
    name: "Mali",
    code: "ML",
    continent: "africa",
  },
  {
    name: "Malta",
    code: "MT",
    continent: "europe",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    continent: "oceania",
  },
  {
    name: "Martinique",
    code: "MQ",
    continent: "northamerica",
  },
  {
    name: "Mauritania",
    code: "MR",
    continent: "africa",
  },
  {
    name: "Mauritius",
    code: "MU",
    continent: "africa",
  },
  {
    name: "Mayotte",
    code: "YT",
    continent: "africa",
  },
  {
    name: "Mexico",
    code: "MX",
    continent: "northamerica",
  },
  {
    name: "Micronesia, Federated States of",
    code: "FM",
    continent: "oceania",
  },
  {
    name: "Moldova, Republic of",
    code: "MD",
    continent: "europe",
  },
  {
    name: "Monaco",
    code: "MC",
    continent: "europe",
  },
  {
    name: "Mongolia",
    code: "MN",
    continent: "asia",
  },
  {
    name: "Montenegro",
    code: "ME",
    continent: "europe",
  },
  {
    name: "Montserrat",
    code: "MS",
    continent: "northamerica",
  },
  {
    name: "Morocco",
    code: "MA",
    continent: "africa",
  },
  {
    name: "Mozambique",
    code: "MZ",
    continent: "africa",
  },
  {
    name: "Myanmar",
    code: "MM",
    continent: "asia",
  },
  {
    name: "Namibia",
    code: "NA",
    continent: "africa",
  },
  {
    name: "Nauru",
    code: "NR",
    continent: "oceania",
  },
  {
    name: "Nepal",
    code: "NP",
    continent: "asia",
  },
  {
    name: "Netherlands",
    code: "NL",
    continent: "europe",
  },
  {
    name: "New Caledonia",
    code: "NC",
    continent: "oceania",
  },
  {
    name: "New Zealand",
    code: "NZ",
    continent: "oceania",
  },
  {
    name: "Nicaragua",
    code: "NI",
    continent: "northamerica",
  },
  {
    name: "Niger",
    code: "NE",
    continent: "africa",
  },
  {
    name: "Nigeria",
    code: "NG",
    continent: "africa",
  },
  {
    name: "Niue",
    code: "NU",
    continent: "oceania",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    continent: "oceania",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    continent: "oceania",
  },
  {
    name: "Norway",
    code: "NO",
    continent: "europe",
  },
  {
    name: "Oman",
    code: "OM",
    continent: "asia",
  },
  {
    name: "Pakistan",
    code: "PK",
    continent: "asia",
  },
  {
    name: "Palau",
    code: "PW",
    continent: "oceania",
  },
  {
    name: "Palestine, State of",
    code: "PS",
    continent: "asia",
  },
  {
    name: "Panama",
    code: "PA",
    continent: "northamerica",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    continent: "oceania",
  },
  {
    name: "Paraguay",
    code: "PY",
    continent: "southamerica",
  },
  {
    name: "Peru",
    code: "PE",
    continent: "southamerica",
  },
  {
    name: "Philippines",
    code: "PH",
    continent: "asia",
  },
  {
    name: "Pitcairn",
    code: "PN",
    continent: "oceania",
  },
  {
    name: "Poland",
    code: "PL",
    continent: "europe",
  },
  {
    name: "Portugal",
    code: "PT",
    continent: "europe",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    continent: "northamerica",
  },
  {
    name: "Qatar",
    code: "QA",
    continent: "asia",
  },
  {
    name: "Romania",
    code: "RO",
    continent: "europe",
  },
  {
    name: "Russian Federation",
    code: "RU",
    continent: "europe",
  },
  {
    name: "Rwanda",
    code: "RW",
    continent: "africa",
  },
  {
    name: "Réunion",
    code: "RE",
    continent: "africa",
  },
  {
    name: "Saint Barthélemy",
    code: "BL",
    continent: "northamerica",
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    code: "SH",
    continent: "africa",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    continent: "northamerica",
  },
  {
    name: "Saint Lucia",
    code: "LC",
    continent: "northamerica",
  },
  {
    name: "Saint Martin (French part)",
    code: "MF",
    continent: "northamerica",
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    continent: "northamerica",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    continent: "northamerica",
  },
  {
    name: "Samoa",
    code: "WS",
    continent: "oceania",
  },
  {
    name: "San Marino",
    code: "SM",
    continent: "europe",
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    continent: "africa",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    continent: "asia",
  },
  {
    name: "Senegal",
    code: "SN",
    continent: "africa",
  },
  {
    name: "Serbia",
    code: "RS",
    continent: "europe",
  },
  {
    name: "Seychelles",
    code: "SC",
    continent: "africa",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    continent: "africa",
  },
  {
    name: "Singapore",
    code: "SG",
    continent: "asia",
  },
  {
    name: "Sint Maarten (Dutch part)",
    code: "SX",
    continent: "northamerica",
  },
  {
    name: "Slovakia",
    code: "SK",
    continent: "europe",
  },
  {
    name: "Slovenia",
    code: "SI",
    continent: "europe",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    continent: "oceania",
  },
  {
    name: "Somalia",
    code: "SO",
    continent: "africa",
  },
  {
    name: "South Africa",
    code: "ZA",
    continent: "africa",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS",
    continent: "antarctica",
  },
  {
    name: "South Sudan",
    code: "SS",
    continent: "africa",
  },
  {
    name: "Spain",
    code: "ES",
    continent: "europe",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    continent: "asia",
  },
  {
    name: "Sudan",
    code: "SD",
    continent: "africa",
  },
  {
    name: "Suriname",
    code: "SR",
    continent: "southamerica",
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ",
    continent: "europe",
  },
  {
    name: "Swaziland",
    code: "SZ",
    continent: "africa",
  },
  {
    name: "Sweden",
    code: "SE",
    continent: "europe",
  },
  {
    name: "Switzerland",
    code: "CH",
    continent: "europe",
  },
  {
    name: "Syrian Arab Republic",
    code: "SY",
    continent: "asia",
  },
  {
    name: "Taiwan, Province of China",
    code: "TW",
    continent: "asia",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    continent: "asia",
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
    continent: "africa",
  },
  {
    name: "Thailand",
    code: "TH",
    continent: "asia",
  },
  {
    name: "Timor-Leste",
    code: "TL",
    continent: "asia",
  },
  {
    name: "Togo",
    code: "TG",
    continent: "africa",
  },
  {
    name: "Tokelau",
    code: "TK",
    continent: "oceania",
  },
  {
    name: "Tonga",
    code: "TO",
    continent: "oceania",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    continent: "northamerica",
  },
  {
    name: "Tunisia",
    code: "TN",
    continent: "africa",
  },
  {
    name: "Turkey",
    code: "TR",
    continent: "asia",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    continent: "asia",
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    continent: "northamerica",
  },
  {
    name: "Tuvalu",
    code: "TV",
    continent: "oceania",
  },
  {
    name: "Uganda",
    code: "UG",
    continent: "africa",
  },
  {
    name: "Ukraine",
    code: "UA",
    continent: "europe",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    continent: "asia",
  },
  {
    name: "United Kingdom",
    code: "GB",
    continent: "europe",
  },
  {
    name: "United States",
    code: "US",
    continent: "northamerica",
  },
  {
    name: "United States Minor Outlying Islands",
    code: "UM",
    continent: "oceania",
  },
  {
    name: "Uruguay",
    code: "UY",
    continent: "southamerica",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    continent: "asia",
  },
  {
    name: "Vanuatu",
    code: "VU",
    continent: "oceania",
  },
  {
    name: "Venezuela, Bolivarian Republic of",
    code: "VE",
    continent: "southamerica",
  },
  {
    name: "Viet Nam",
    code: "VN",
    continent: "asia",
  },
  {
    name: "Virgin Islands, British",
    code: "VG",
    continent: "northamerica",
  },
  {
    name: "Virgin Islands, U.S.",
    code: "VI",
    continent: "northamerica",
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    continent: "oceania",
  },
  {
    name: "Western Sahara",
    code: "EH",
    continent: "africa",
  },
  {
    name: "Yemen",
    code: "YE",
    continent: "asia",
  },
  {
    name: "Zambia",
    code: "ZM",
    continent: "africa",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    continent: "africa",
  },
  {
    name: "Åland Islands",
    code: "AX",
    continent: "europe",
  },
];

module.exports = codes;
