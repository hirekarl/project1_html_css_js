import countryList from "../models/countryList.js"
import { regionSelect } from "../constants/constants.js"

function handleCountrySearch(event: InputEvent) {
  // Instead of searching a subset of countries given by the "Region" select,
  // reset the regionSelect to "All" on countrySearch events
  // and search the entire list when using the search bar.
  regionSelect.value = "All"
  const searchTerm = (event.target as HTMLInputElement).value
  countryList.displaySearchResults(searchTerm)
}

export default handleCountrySearch
