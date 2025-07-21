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
  region: string
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

  getFlagPNGURL(): string {
    return this.flags.png
  }

  getCommonName(): string {
    return this.name.common
  }

  getNativeName(): string {
    return this.name.nativeName[this.getFirstLanguageCode()]
      .common
  }

  getCCA3(): string {
    return this.cca3
  }

  getRegion(): string {
    return this.region
  }

  getPopulation(): number {
    return this.population
  }

  getLanguages(): string[] {
    return Object.values(this.languages)
  }

  getFirstLanguageCode(): string {
    return Object.keys(this.languages)[0]
  }

  getCapital(): string {
    return this.capital[0]
  }
}
