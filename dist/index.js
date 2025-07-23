var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { darkModeToggleButton, darkModeToggleButtonModal, regionSelect, countriesContainer, countrySearch, } from "./constants/constants.js";
import populateCountries from "./utils/populateCountries.js";
import populateRegions from "./utils/populateRegions.js";
import handleDarkModeToggleButton from "./eventHandlers/handleDarkModeToggleButton.js";
import handleRegionSelect from "./eventHandlers/handleRegionSelect.js";
import handleCountry from "./eventHandlers/handleCountry.js";
import handleCountrySearch from "./eventHandlers/handleCountrySearch.js";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield populateCountries();
        }
        catch (error) {
            throw new Error(String(error));
        }
        populateRegions();
        countrySearch.addEventListener("input", (event) => handleCountrySearch(event));
        const darkModeToggleButtons = [
            darkModeToggleButton,
            darkModeToggleButtonModal,
        ];
        darkModeToggleButtons.forEach((button) => {
            button.addEventListener("click", handleDarkModeToggleButton);
        });
        regionSelect.addEventListener("change", (event) => handleRegionSelect(event));
        countriesContainer.addEventListener("click", (event) => handleCountry(event));
    });
}
document.addEventListener("DOMContentLoaded", () => {
    try {
        main();
    }
    catch (error) {
        console.error(String(error));
    }
});
