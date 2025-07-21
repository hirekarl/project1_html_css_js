import { Country } from "./Country.js"
import { CountryDetail } from "./CountryDetail.js"

interface CountryListInterface {
  countries: Country[]
  sort(): void
  addCountry(country: Country): void
  addCountryDetail(countryDetail: CountryDetail): void
  getCountryByCCA3(cca3: string): Country
}

export const countryList: CountryListInterface = {
  countries: [],
  sort: function (): void {
    this.countries.sort((a, b) =>
      a.getCommonName().localeCompare(b.getCommonName())
    )
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
}
