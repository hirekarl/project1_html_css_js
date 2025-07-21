import { Name, Flags, Languages, Country } from "./Country.js"
import { getCountryNameByCCA3 } from "../services/apiService.js";

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
    return this.tld
  }

  getCurrencies(): string[] {
    const currenciesArray = []
    for (const currency of Object.values(this.currencies)) {
      currenciesArray.push(currency.name)
    }
    return currenciesArray
  }

  getSubregion(): string {
    return this.subregion
  }

  async getBorderCountryNames(): Promise<string[]> {
    const borderCountryNames = []
    for (const cca3 of this.borders) {
      const countryName = await getCountryNameByCCA3(cca3)
      borderCountryNames.push(countryName)
    }
    return borderCountryNames
  }
}
