import { Country } from "./models/Country.js"
import { CountryDetail } from "./models/CountryDetail.js"
import { getAllCountries, getCountryDetail } from "./services/apiService.js"

async function main() {
  const countries = await getAllCountries()

  const allCountries = []

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
    allCountries.push(thisCountry)
  }

  const totalCountries = allCountries.length
  const randomCountryIndex = Math.ceil(Math.random() * totalCountries + 1)

  const randomCountry = allCountries[randomCountryIndex]
  const countryDetail = await getCountryDetail(randomCountry)

  const thisCountryDetail: CountryDetail = new CountryDetail(
    randomCountry.flags,
    randomCountry.name,
    randomCountry.cca3,
    randomCountry.region,
    randomCountry.population,
    randomCountry.languages,
    randomCountry.capital,
    countryDetail.tld,
    countryDetail.currencies,
    countryDetail.subregion,
    countryDetail.borders
  )

  console.log(
    `The TLD for ${thisCountryDetail.getCommonName()} is ${thisCountryDetail.getTLD()}.`
  )
}

main()
