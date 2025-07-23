const countriesContainer = document.getElementById("countries-container");
const countryList = {
    domElement: countriesContainer,
    countries: [],
    sort: function () {
        this.countries.sort((a, b) => 
        // Sort in alphabetical order, ascending
        a.getCommonName().localeCompare(b.getCommonName()));
    },
    display: function () {
        this.sort();
        this.domElement.innerText = "";
        const countriesDocFrag = new DocumentFragment();
        this.countries.forEach((country) => countriesDocFrag.appendChild(country.getDomElement()));
        this.domElement.appendChild(countriesDocFrag);
    },
    displayRegion: function (region) {
        const regionResults = this.getCountriesByRegion(region);
        regionResults.sort((a, b) => a.getCommonName().localeCompare(b.getCommonName()));
        this.domElement.innerText = "";
        const countriesDocFrag = new DocumentFragment();
        regionResults.forEach((country) => countriesDocFrag.appendChild(country.getDomElement()));
        this.domElement.appendChild(countriesDocFrag);
    },
    displaySearchResults: function (searchTerm) {
        const searchResults = this.getCountriesBySearchTerm(searchTerm);
        this.domElement.innerText = "";
        const searchResultsDocFrag = new DocumentFragment();
        searchResults.forEach((country) => searchResultsDocFrag.appendChild(country.getDomElement()));
        this.domElement.appendChild(searchResultsDocFrag);
    },
    addCountry: function (country) {
        this.countries.push(country);
    },
    addCountryDetail: function (countryDetail) {
        const country = this.getCountryByCCA3(countryDetail.cca3);
        this.countries.splice(this.countries.indexOf(country), 1, countryDetail);
    },
    getCountryByCCA3: function (cca3) {
        const country = this.countries.find((country) => country.cca3 === cca3);
        return country;
    },
    getCountriesByRegion: function (region) {
        const regionResults = this.countries.filter((country) => country.region === region);
        return regionResults;
    },
    getCountriesBySearchTerm: function (searchTerm) {
        // With more time, I'd implement a search that, in addition to being
        // case-insensitive, is agnostic to accents, diacritics, and other marks.
        const searchResults = this.countries.filter((country) => country.getCommonName().toLowerCase().includes(searchTerm.toLowerCase()));
        return searchResults;
    },
};
export default countryList;
