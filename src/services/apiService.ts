import { APICountry } from "../models/APICountry.js"
import { Country } from "../models/Country.js"

const BASE_URL = "https://restcountries.com/v3.1/all"
const FIELDS = ["name", "population", "region", "flags", "cca3", "capital"]

function concatFields(fields: string[]): string {
  return fields.join(",")
}

async function getAllCountries(): Promise<Country[]> {
  const fields = concatFields(FIELDS)
  const allCountries = await fetch(`${BASE_URL}?fields=${fields}`)
  const allCountriesParsed: APICountry[] = await allCountries.json()

  const countryObjects = []
  if (allCountries != null) {
    for (const country of allCountriesParsed) {
      const name: string = country.name.common
      const population: number = country.population
      const region: string = country.region
      const flag: string = country.flags.png
      const cca3: string = country.cca3
      const capital: string | undefined = country.capital?.shift()

      const thisCountry = new Country(
        name,
        population,
        region,
        flag,
        cca3,
        capital
      )
      countryObjects.push(thisCountry)
    }
    return countryObjects
  } else {
    throw new Error("The API returned nothing.")
  }
}

export { getAllCountries }
