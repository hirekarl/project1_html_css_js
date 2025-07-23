import countryList from "../models/countryList.js";
import { regionSelect } from "../constants/constants.js";
function populateRegions() {
    const regions = new Set();
    countryList.countries.forEach((country) => {
        if (!regions.has(country.region)) {
            regions.add(country.region);
        }
    });
    const regionsArray = Array.from(regions);
    regionsArray.sort((a, b) => a.localeCompare(b));
    const regionOptionsDocFrag = new DocumentFragment();
    regionsArray.forEach((region) => {
        const regionOption = document.createElement("option");
        regionOption.classList.add("region-select-option");
        regionOption.value = region;
        regionOption.innerText = region;
        regionOptionsDocFrag.appendChild(regionOption);
    });
    regionSelect.appendChild(regionOptionsDocFrag);
}
export default populateRegions;
