var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Country } from "../models/Country.js";
import { getAllCountries } from "../services/apiService.js";
import countryList from "../models/countryList.js";
function populateCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const countries = yield getAllCountries();
            for (const country of countries) {
                const thisCountry = new Country(country.flags, country.name, country.cca3, country.region, country.population, country.languages, country.capital);
                countryList.addCountry(thisCountry);
            }
            countryList.display();
        }
        catch (error) {
            throw new Error(String(error));
        }
    });
}
export default populateCountries;
