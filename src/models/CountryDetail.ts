import { Name, Flags, Languages, Country } from "./Country.js"
import countryList from "./countryList.js"

export type Currencies = {
  [key: string]: { name: string; symbol: string }
}

export interface CountryDetailInterface {
  tld: string[]
  currencies: Currencies
  subregion: string
  borders: string[]
}

export class CountryDetail extends Country implements CountryDetailInterface {
  readonly tld: string[]
  readonly currencies: Currencies
  readonly subregion: string
  readonly borders: string[]

  constructor(
    flags: Flags,
    name: Name,
    cca3: string,
    region: string,
    population: number,
    languages: Languages,
    capital: string[],
    tld: string[],
    currencies: Currencies,
    subregion: string,
    borders: string[]
  ) {
    super(flags, name, cca3, region, population, languages, capital)
    this.tld = tld
    this.currencies = currencies
    this.subregion = subregion
    this.borders = borders
  }

  getTLD(): string[] {
    return this.tld || ["N/A"]
  }

  displayTLDs(): string {
    return this.getTLD().join(", ")
  }

  getCurrencies(): string[] {
    const currenciesArray = []
    for (const currency of Object.values(this.currencies)) {
      currenciesArray.push(currency.name)
    }
    if (currenciesArray.length > 0) {
      return currenciesArray
    } else {
      return ["N/A"]
    }
  }

  displayCurrencies(): string {
    return this.getCurrencies().join(", ")
  }

  getSubregion(): string {
    return this.subregion || "N/A"
  }

  getBorderCountries(): [string, string][] {
    const borderCountries: [string, string][] = []

    this.borders.forEach((cca3) => {
      const borderTuple: [string, string] = ["", ""]
      borderTuple[0] = cca3

      const country: Country = countryList.getCountryByCCA3(cca3)
      borderTuple[1] = country.name.common
      
      borderCountries.push(borderTuple)
    })

    return borderCountries
  }

  // getBorderCountryCCA3s(): string[] {
  //   return this.borders
  // }

  // getBorderCountryNames(): string[] {
  //   const borderCountryNames = []
  //   for (const cca3 of this.borders) {
  //     const country: Country = countryList.getCountryByCCA3(cca3)
  //     if (country) borderCountryNames.push(country.name.common)
  //   }
  //   return borderCountryNames
  // }
}
