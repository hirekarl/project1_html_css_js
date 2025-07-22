import { Country } from "../models/Country.js"
import { getAllCountries } from "../services/apiService.js"
import countryList from "../models/countryList.js"

async function populateCountries(): Promise<void> {
  try {
    const countries = await getAllCountries()

    for (const country of countries) {
      const thisCountry = new Country(
        country.flags,
        country.name,
        country.cca3,
        country.region,
        country.population,
        country.languages,
        country.capital
      )
      countryList.addCountry(thisCountry)
    }
    countryList.display()
  } catch (error) {
    throw new Error(String(error))
  }
}

export default populateCountries
