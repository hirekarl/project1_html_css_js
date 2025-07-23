var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CountryDetail, } from "../models/CountryDetail.js";
import countryList from "../models/countryList.js";
import { getCountryDetail } from "../services/apiService.js";
import { modalFlagContainer, modalInfoContainer, } from "../constants/constants.js";
function handleCountry(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const countryElement = event.target.closest("[data-cca3]");
        if (countryElement === null || !(countryElement instanceof HTMLElement)) {
            return;
        }
        const cca3 = countryElement.dataset.cca3;
        const country = countryList.getCountryByCCA3(cca3);
        let countryDetail;
        // Only run a new API call if the Countryis not an instance of CountryDetail.
        // Otherwise, use country as an instance of CountryDetail.
        try {
            if (!(country instanceof CountryDetail)) {
                const countryDetailInterface = yield getCountryDetail(country);
                countryDetail = new CountryDetail(country.flags, country.name, country.cca3, country.region, country.population, country.languages, country.capital, countryDetailInterface.tld, countryDetailInterface.currencies, countryDetailInterface.subregion, countryDetailInterface.borders);
            }
            else {
                countryDetail = country;
            }
        }
        catch (error) {
            throw new Error(String(error));
        }
        countryList.addCountryDetail(countryDetail);
        modalFlagContainer.textContent = "";
        const countryDetailFlagImg = document.createElement("img");
        countryDetailFlagImg.setAttribute("src", countryDetail.getFlagPNGURL());
        countryDetailFlagImg.setAttribute("alt", `Flag for ${countryDetail.getCommonName()}.`);
        countryDetailFlagImg.classList.add("img-fluid", "w-100");
        modalFlagContainer.appendChild(countryDetailFlagImg);
        modalInfoContainer.textContent = "";
        const countryName = document.createElement("h1");
        countryName.classList.add("fs-3", "fw-bold", "my-4");
        countryName.innerText = countryDetail.getCommonName();
        modalInfoContainer.appendChild(countryName);
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("row");
        const infoCol = document.createElement("div");
        infoCol.classList.add("col-xl-6", "col-lg-6", "col-md-12");
        infoDiv.appendChild(infoCol);
        const infoUL = document.createElement("ul");
        infoUL.classList.add("list-unstyled");
        infoCol.appendChild(infoUL);
        const nativeNameLI = document.createElement("li");
        nativeNameLI.classList.add("mb-2");
        nativeNameLI.innerHTML = `<strong>Native Name:</strong> ${countryDetail.getNativeName()}`;
        infoUL.appendChild(nativeNameLI);
        const populationLI = document.createElement("li");
        populationLI.classList.add("mb-2");
        populationLI.innerHTML = `<strong>Population:</strong> ${countryDetail.displayPopulation()}`;
        infoUL.appendChild(populationLI);
        const regionLI = document.createElement("li");
        regionLI.classList.add("mb-2");
        regionLI.innerHTML = `<strong>Region:</strong> ${countryDetail.getRegion()}`;
        infoUL.appendChild(regionLI);
        const subregionLI = document.createElement("li");
        subregionLI.classList.add("mb-2");
        subregionLI.innerHTML = `<strong>Sub Region:</strong> ${countryDetail.getSubregion()}`;
        infoUL.appendChild(subregionLI);
        const capitalLI = document.createElement("li");
        capitalLI.classList.add("mb-2");
        capitalLI.innerHTML = `<strong>Capital:</strong> ${countryDetail.getCapital()}`;
        infoUL.appendChild(capitalLI);
        const tldLI = document.createElement("li");
        tldLI.classList.add("mb-2");
        tldLI.innerHTML = `<strong>Top Level Domain:</strong> ${countryDetail.displayTLDs()}`;
        infoUL.appendChild(tldLI);
        const currenciesLI = document.createElement("li");
        currenciesLI.classList.add("mb-2");
        currenciesLI.innerHTML = `<strong>Currencies:</strong> ${countryDetail.displayCurrencies()}`;
        infoUL.appendChild(currenciesLI);
        const languagesLI = document.createElement("li");
        languagesLI.classList.add("mb-2");
        languagesLI.innerHTML = `<strong>Languages:</strong> ${countryDetail.displayLanguages()}`;
        infoUL.appendChild(languagesLI);
        modalInfoContainer.appendChild(infoDiv);
        const bordersDiv = document.createElement("div");
        bordersDiv.innerHTML = `<strong>Border Countries:</strong>`;
        // An array of tuples where index 0 is the CCA3 code and
        // index 1 is the country common name.
        const borderCountries = countryDetail.getBorderCountries();
        if (borderCountries.length > 0) {
            borderCountries.forEach((countryTuple) => {
                const countryButton = document.createElement("button");
                countryButton.classList.add("btn", "btn-sm", "btn-tertiary", "border", "mx-1", "my-1", "country-button");
                countryButton.dataset.cca3 = countryTuple[0];
                countryButton.innerText = countryTuple[1];
                bordersDiv.appendChild(countryButton);
            });
        }
        else {
            // Display "N/A" in the case of no border countries
            bordersDiv.append(" N/A");
        }
        modalInfoContainer.appendChild(bordersDiv);
        // I don't believe this recursive event handler will cause a memory leak,
        // but finding out for sure will have to wait for a refactor.
        modalInfoContainer.addEventListener("click", (event) => handleCountry(event));
    });
}
export default handleCountry;
