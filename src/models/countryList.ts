import { Country } from "./Country.js"
import { CountryDetail } from "./CountryDetail.js"

const countriesContainer = document.getElementById("countries-container")

interface CountryListInterface {
  domElement: HTMLDivElement
  countries: Country[]
  sort(): void
  display(): void
  displayRegion(region: string): void
  displaySearchResults(searchTerm: string): void
  addCountry(country: Country): void
  addCountryDetail(countryDetail: CountryDetail): void
  getCountryByCCA3(cca3: string): Country
  getCountriesByRegion(region: string): Country[]
  getCountriesBySearchTerm(searchTerm: string): Country[]
}

const countryList: CountryListInterface = {
  domElement: countriesContainer as HTMLDivElement,
  countries: [],
  sort: function (): void {
    this.countries.sort((a, b) =>
      // Sort in alphabetical order, ascending
      a.getCommonName().localeCompare(b.getCommonName())
    )
  },
  display: function (): void {
    this.sort()
    this.domElement.innerText = ""
    const countriesDocFrag = new DocumentFragment()
    this.countries.forEach((country) =>
      countriesDocFrag.appendChild(country.getDomElement())
    )
    this.domElement.appendChild(countriesDocFrag)
  },
  displayRegion: function (region: string): void {
    const regionResults = this.getCountriesByRegion(region)
    regionResults.sort((a, b) =>
      a.getCommonName().localeCompare(b.getCommonName())
    )
    this.domElement.innerText = ""
    const countriesDocFrag = new DocumentFragment()
    regionResults.forEach((country) =>
      countriesDocFrag.appendChild(country.getDomElement())
    )
    this.domElement.appendChild(countriesDocFrag)
  },
  displaySearchResults: function (searchTerm: string): void {
    const searchResults = this.getCountriesBySearchTerm(searchTerm)
    this.domElement.innerText = ""
    const searchResultsDocFrag = new DocumentFragment()
    searchResults.forEach((country) =>
      searchResultsDocFrag.appendChild(country.getDomElement())
    )
    this.domElement.appendChild(searchResultsDocFrag)
  },
  addCountry: function (country: Country): void {
    this.countries.push(country)
  },
  addCountryDetail: function (countryDetail: CountryDetail): void {
    const country: Country = this.getCountryByCCA3(countryDetail.cca3)
    this.countries.splice(this.countries.indexOf(country), 1, countryDetail)
  },
  getCountryByCCA3: function (cca3: string): Country {
    const country: Country = this.countries.find(
      (country) => country.cca3 === cca3
    ) as Country
    return country
  },
  getCountriesByRegion: function (region: string): Country[] {
    const regionResults: Country[] = this.countries.filter(
      (country) => country.region === region
    )
    return regionResults
  },
  getCountriesBySearchTerm: function (searchTerm: string): Country[] {
    // With more time, I'd implement a search that, in addition to being
    // case-insensitive, is agnostic to accents, diacritics, and other marks.
    const searchResults: Country[] = this.countries.filter((country) =>
      country.getCommonName().toLowerCase().includes(searchTerm.toLowerCase())
    )
    return searchResults
  },
}

export default countryList
