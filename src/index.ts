import { Country } from "./models/Country.js"
import { CountryDetail } from "./models/CountryDetail.js"
import { getAllCountries, getCountryDetail } from "./services/apiService.js"
import { countryList } from "./models/countryList.js"

async function main() {
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

  countryList.sort()

  // console.log(
  //   countryList.countries.map((country) => country.getCommonName()).join(", ")
  // )

  const totalCountries = countryList.countries.length
  const randomCountryIndex = Math.ceil(Math.random() * totalCountries + 1)

  const randomCountry = countryList.countries[randomCountryIndex]
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

  countryList.addCountryDetail(thisCountryDetail)

  const message =
    `Information for ${thisCountryDetail.getCommonName()}:\n` +
    `Native Name: ${thisCountryDetail.getNativeName()}\n` +
    `Flag URL: ${thisCountryDetail.getFlagPNGURL()}\n` +
    `CCA3: ${thisCountryDetail.getCCA3()}\n` +
    `Region: ${thisCountryDetail.getRegion()}\n` +
    `Subregion: ${thisCountryDetail.getSubregion()}\n` +
    `Population: ${thisCountryDetail.getPopulation()}\n` +
    `Languages: ${thisCountryDetail.getLanguages()}\n` +
    `Capital: ${thisCountryDetail.getCapital()}\n` +
    `TLD: ${thisCountryDetail.getTLD()}\n` +
    `Currencies: ${thisCountryDetail.getCurrencies()}\n` +
    `Borders: ${thisCountryDetail.getBorderCountryNames()}\n`

  console.log(message)
}

main()
