var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://restcountries.com/v3.1";
const COUNTRY_URL = `${BASE_URL}/all`;
const COUNTRY_FIELDS = [
    "flags",
    "name",
    "cca3",
    "region",
    "population",
    "languages",
    "capital",
];
const COUNTRY_DETAIL_URL = `${BASE_URL}/alpha`;
const COUNTRY_DETAIL_FIELDS = [
    "tld",
    "currencies",
    "subregion",
    "borders",
];
class APIError extends Error {
    constructor(message) {
        super(message);
        this.name = "APIError";
    }
}
function concatFields(fields) {
    return fields.join(",");
}
function getAllCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        const countryFields = concatFields(COUNTRY_FIELDS);
        try {
            const response = yield fetch(`${COUNTRY_URL}?fields=${countryFields}`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw new APIError(`${error.name} on getAllCountries: ${error.message}`);
        }
    });
}
function getCountryDetail(country) {
    return __awaiter(this, void 0, void 0, function* () {
        const countryDetailFields = concatFields(COUNTRY_DETAIL_FIELDS);
        try {
            const response = yield fetch(`${COUNTRY_DETAIL_URL}/${country.getCCA3()}?fields=${countryDetailFields}`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw new APIError(`${error.name} on getCountryDetail with ${JSON.stringify(country.getCommonName())}: ${error.message}`);
        }
    });
}
export { getAllCountries, getCountryDetail };
