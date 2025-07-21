/* Needs name (common), population, region,
   capital, flag (PNG), cca3
*/

class Country {
  name: string
  population: number
  region: string
  capital: string
  flag: string
  cca3: string

  constructor(
    name: string,
    population: number,
    region: string,
    capital: string,
    flag: string,
    cca3: string
  ) {
    this.name = name
    this.population = population
    this.region = region
    this.capital = capital
    this.flag = flag
    this.cca3 = cca3
  }
}

export default Country
