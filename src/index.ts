import {
  darkModeToggleButton,
  darkModeToggleButtonModal,
  regionSelect,
  countriesContainer,
  countrySearch,
} from "./constants/constants.js"
import populateCountries from "./utils/populateCountries.js"
import populateRegions from "./utils/populateRegions.js"
import handleDarkModeToggleButton from "./eventHandlers/handleDarkModeToggleButton.js"
import handleRegionSelect from "./eventHandlers/handleRegionSelect.js"
import handleCountry from "./eventHandlers/handleCountry.js"
import handleCountrySearch from "./eventHandlers/handleCountrySearch.js"

async function main(): Promise<void> {
  try {
    await populateCountries()
  } catch (error) {
    throw new Error(String(error))
  }

  populateRegions()

  countrySearch.addEventListener("input", (event) =>
    handleCountrySearch(event as InputEvent)
  )

  const darkModeToggleButtons = [
    darkModeToggleButton,
    darkModeToggleButtonModal,
  ]
  darkModeToggleButtons.forEach((button) => {
    button.addEventListener("click", handleDarkModeToggleButton)
  })

  regionSelect.addEventListener("change", (event) =>
    handleRegionSelect(event as Event)
  )

  countriesContainer.addEventListener("click", (event) =>
    handleCountry(event as MouseEvent)
  )
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    main()
  } catch (error) {
    console.error(String(error))
  }
})
