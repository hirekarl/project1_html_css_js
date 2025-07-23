var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://restcountries.com/v3.1/all";
const BASE_FIELDS = [
    "flags",
    "name",
    "cca3",
    "region",
    "population",
    "languages",
    "capital",
];
const DETAIL_URL = "https://restcountries.com/v3.1/alpha";
const DETAIL_FIELDS = ["tld", "currencies", "subregion", "borders"];
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
        const fields = concatFields(BASE_FIELDS);
        try {
            const response = yield fetch(`${BASE_URL}?fields=${fields}`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw new APIError(`${error.name} on getAllCountries(): ${error.message}`);
        }
    });
}
function getCountryDetail(country) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fields = concatFields(DETAIL_FIELDS);
            const response = yield fetch(`${DETAIL_URL}/${country.cca3}?fields=${fields}`);
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw new APIError(`${error.name} on getCountryDetail(): ${error.message}`);
        }
    });
}
export { getAllCountries, getCountryDetail };
