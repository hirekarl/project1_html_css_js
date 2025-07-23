import { Country, CountryInterface } from "../models/Country.js"
import { CountryDetailInterface } from "../models/CountryDetail.js"

const BASE_URL: string = "https://restcountries.com/v3.1"

const COUNTRIES_URL: string = `${BASE_URL}/all`
const COUNTRIES_FIELDS: string[] = [
  "flags",
  "name",
  "cca3",
  "region",
  "population",
  "languages",
  "capital",
] as const

const COUNTRY_DETAIL_URL: string = `${BASE_URL}/alpha`
const COUNTRY_DETAIL_FIELDS: string[] = [
  "tld",
  "currencies",
  "subregion",
  "borders",
] as const

class APIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "APIError"
  }
}

function concatFields(fields: string[]): string {
  return fields.join(",")
}

async function getAllCountries(): Promise<CountryInterface[]> {
  const countryFields = concatFields(COUNTRIES_FIELDS)
  try {
    const response = await fetch(`${COUNTRIES_URL}?fields=${countryFields}`)
    const data: CountryInterface[] = await response.json()
    return data
  } catch (error) {
    throw new APIError(
      `${(error as Error).name} on getAllCountries: ${(error as Error).message}`
    )
  }
}

async function getCountryDetail(
  country: Country
): Promise<CountryDetailInterface> {
  const countryDetailFields = concatFields(COUNTRY_DETAIL_FIELDS)
  try {
    const response = await fetch(
      `${COUNTRY_DETAIL_URL}/${country.getCCA3()}?fields=${countryDetailFields}`
    )
    const data: CountryDetailInterface = await response.json()
    return data
  } catch (error) {
    throw new APIError(
      `${(error as Error).name} on getCountryDetail with ${JSON.stringify(
        country.getCommonName()
      )}: ${(error as Error).message}`
    )
  }
}

export { getAllCountries, getCountryDetail }
