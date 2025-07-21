import { Name, Flags, Languages, Country } from "./Country.js"

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

  getTLD() {
    return this.tld
  }

  getCurrencies() {
    return this.currencies
  }

  getSubregion() {
    return this.subregion
  }

  getBorders() {
    return this.borders
  }
}
