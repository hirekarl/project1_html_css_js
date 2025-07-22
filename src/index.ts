import {
  darkModeToggleButton,
  darkModeToggleButtonModal,
  regionSelect,
  countriesContainer,
} from "./constants/constants.js"
import populateCountries from "./utils/populateCountries.js"
import populateRegions from "./utils/populateRegions.js"
import handleDarkModeToggleButton from "./eventHandlers/handleDarkModeToggleButton.js"
import handleRegionSelect from "./eventHandlers/handleRegionSelect.js"
import handleCountryCardContainer from "./eventHandlers/handleCountryCardContainer.js"

async function main() {
  await populateCountries()
  populateRegions()

  darkModeToggleButton.addEventListener("click", handleDarkModeToggleButton)
  darkModeToggleButtonModal.addEventListener("click", handleDarkModeToggleButton)
  regionSelect.addEventListener("click", (event) => handleRegionSelect(event))
  countriesContainer.addEventListener("click", (event) =>
    handleCountryCardContainer(event)
  )
}

main()
