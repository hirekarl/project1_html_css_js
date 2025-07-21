/* eslint-disable no-undef */
import { getCountries } from "@yusifaliyevpro/countries"

import Country from "./models/Country.js"

const countries = await getCountries({
  fields: ["name", "population", "region", "capital", "flags", "cca3"],
})

function main() {
  let parsedCountries = []
  for (let country of countries) {
    const name = country.name.common
    const population = country.population
    const region = country.region
    const capital = country.capital[0]
    const flag = country.flags.png
    const cca3 = country.cca3

    const thisCountry = new Country(name, population, region, capital, flag, cca3)
    parsedCountries.push(thisCountry)
  }

  parsedCountries.forEach((country) => {
    console.log(`Name: ${country.name}`)
    console.log(`Population: ${country.population}`)
    console.log(`Region: ${country.region}`)
    console.log(`Capital: ${country.capital}`)
    console.log(`Flag URL: ${country.flag}`)
    console.log(`CCA3: ${country.cca3}`)
    console.log()
  })
}

main()
