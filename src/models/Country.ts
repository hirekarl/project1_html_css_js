export type NativeName = {
  official: string
  common: string
}

export type Name = {
  common: string
  official: string
  nativeName: { [key: string]: NativeName }
}

export type Flags = {
  png: string
  svg: string
  alt: string
}

export type Languages = {
  [key: string]: string
}

export interface CountryInterface {
  flags: Flags
  name: Name
  cca3: string
  population: number
  languages: Languages
  capital: string[]
}

export class Country implements CountryInterface {
  readonly flags: Flags
  readonly name: Name
  readonly cca3: string
  readonly region: string
  readonly population: number
  readonly languages: Languages
  readonly capital: string[]
  
  constructor(
    flags: Flags,
    name: Name,
    cca3: string,
    region: string,
    population: number,
    languages: Languages,
    capital: string[]
  ) {
    this.flags = flags
    this.name = name
    this.cca3 = cca3
    this.region = region 
    this.population = population
    this.languages = languages
    this.capital = capital
  }

  getFlagPNGURL() {
    return this.flags.png
  }

  getCommonName() {
    return this.name.common
  }

  getCCA3() {
    return this.cca3
  }

  getRegion() {
    return this.region
  }

  getPopulation() {
    return this.population
  }

  getLanguages() {
    return Object.values(this.languages)
  }

  getCapital() {
    return this.capital[0]
  }
}
