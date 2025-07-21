export class Country {
  name: string
  population: number
  region: string
  flag: string
  cca3: string
  capital?: string

  constructor(
    name: string,
    population: number,
    region: string,
    flag: string,
    cca3: string,
    capital?: string
  ) {
    this.name = name
    this.population = population
    this.region = region
    this.flag = flag
    this.cca3 = cca3
    this.capital = capital
  }
}
