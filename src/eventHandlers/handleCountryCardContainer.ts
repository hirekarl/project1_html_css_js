import { Country } from "../models/Country.js"
import { CountryDetail, CountryDetailInterface } from "../models/CountryDetail.js"
import countryList from "../models/countryList.js"
import { getCountryDetail } from "../services/apiService.js"
// import { modalTitle } from "../constants/constants.js"

async function handleCountryCardContainer(event: MouseEvent) {
  event.preventDefault()

  const countryCardContainer = (event.target as HTMLElement).closest(
    "[data-cca3]"
  )

  if (!(countryCardContainer instanceof HTMLDivElement)) {
    return
  }

  const cca3 = countryCardContainer.dataset.cca3 as string
  const country: Country = countryList.getCountryByCCA3(cca3)
  const countryDetailInterface: CountryDetailInterface = await getCountryDetail(country)

  const countryDetail: CountryDetail = new CountryDetail(
    country.flags,
    country.name,
    country.cca3,
    country.region,
    country.population,
    country.languages,
    country.capital,
    countryDetailInterface.tld,
    countryDetailInterface.currencies,
    countryDetailInterface.subregion,
    countryDetailInterface.borders
  )

  countryList.addCountryDetail(countryDetail)
  
}

export default handleCountryCardContainer
