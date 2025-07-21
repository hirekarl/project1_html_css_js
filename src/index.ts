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

  const firstCountry = allCountries[randomCountryIndex]
  const countryDetail = await getCountryDetail(firstCountry)

  const thisCountryDetail: CountryDetail = new CountryDetail(
    firstCountry.flags,
    firstCountry.name,
    firstCountry.cca3,
    firstCountry.region,
    firstCountry.population,
    firstCountry.languages,
    firstCountry.capital,
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
