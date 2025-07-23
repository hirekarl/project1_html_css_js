// The API has a limit of 10 fields for requests, so CountryDetail
// is an extension of Country that allows for the additional
// field queries when the user clicks on a Country card for more
// detail. Implementation is lazy in that API calls for the
// extra fields are only made when new data is necessary.
import { Country } from "./Country.js";
import countryList from "./countryList.js";
export class CountryDetail extends Country {
    constructor(flags, name, cca3, region, population, languages, capital, tld, currencies, subregion, borders) {
        super(flags, name, cca3, region, population, languages, capital);
        this.tld = tld;
        this.currencies = currencies;
        this.subregion = subregion;
        this.borders = borders;
    }
    getTLD() {
        return this.tld || ["N/A"];
    }
    displayTLDs() {
        return this.getTLD().join(", ");
    }
    getCurrencies() {
        const currenciesArray = [];
        for (const currency of Object.values(this.currencies)) {
            currenciesArray.push(currency.name);
        }
        if (currenciesArray.length > 0) {
            return currenciesArray;
        }
        else {
            return ["N/A"];
        }
    }
    displayCurrencies() {
        return this.getCurrencies().join(", ");
    }
    getSubregion() {
        return this.subregion || "N/A";
    }
    // To get and use the border countries, it was useful to grab
    // both the CCA3 (country code) value and the common name:
    // the CCA3 to reference the Country instance, and the
    // common name to be printed inside the button, so this
    // returns a list of [string, string] tuples, where index 0
    // of each tuple is the CCA3 and index 1 is the common name.
    getBorderCountries() {
        const borderCountries = [];
        this.borders.forEach((cca3) => {
            const borderTuple = ["", ""];
            borderTuple[0] = cca3;
            const country = countryList.getCountryByCCA3(cca3);
            borderTuple[1] = country.name.common;
            borderCountries.push(borderTuple);
        });
        return borderCountries;
    }
}
