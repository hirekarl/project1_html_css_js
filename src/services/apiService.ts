import { Country, CountryInterface } from "../models/Country"
import { CountryDetailInterface } from "../models/CountryDetail"

const BASE_URL: string = "https://restcountries.com/v3.1/all"
const DETAIL_URL: string = "https://restcountries.com/v3.1/alpha"

const BASE_FIELDS: string[] = [
  "flags",
  "name",
  "cca3",
  "region",
  "population",
  "languages",
  "capital",
]
const DETAIL_FIELDS: string[] = ["tld", "currencies", "subregion", "borders"]

function concatFields(fields: string[]): string {
  return fields.join(",")
}

async function getAllCountries(): Promise<CountryInterface[]> {
  const fields = concatFields(BASE_FIELDS)
  const response = await fetch(`${BASE_URL}?fields=${fields}`)
  const data: CountryInterface[] = await response.json()
  return data
}

async function getCountryDetail(
  country: Country
): Promise<CountryDetailInterface> {
  const fields = concatFields(DETAIL_FIELDS)
  const response = await fetch(`${DETAIL_URL}/${country.cca3}?fields=${fields}`)
  const data: CountryDetailInterface = await response.json()
  return data
}

async function getCountryNameByCCA3(cca3: string): Promise<string> {
  const response = await fetch(`${DETAIL_URL}/${cca3}?fields=name`)
  const data = await response.json()
  return data.name.common
}

export { getAllCountries, getCountryDetail, getCountryNameByCCA3 }
