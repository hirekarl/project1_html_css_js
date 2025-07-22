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
import handleCountry from "./eventHandlers/handleCountry.js"

async function main() {
  await populateCountries()
  populateRegions()

  const darkModeToggleButtons = [darkModeToggleButton, darkModeToggleButtonModal]
  darkModeToggleButtons.forEach((button) => {
    button.addEventListener("click", handleDarkModeToggleButton)
  })
  regionSelect.addEventListener("click", (event) => handleRegionSelect(event))
  countriesContainer.addEventListener("click", (event) =>
    handleCountry(event)
  )
}

main()
