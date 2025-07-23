import countryList from "../models/countryList.js"

function handleRegionSelect(event: Event) {
  const regionSelect = event.target as HTMLSelectElement
  const selectedRegion = regionSelect.value

  if (selectedRegion === "Filter by Region") {
    return
  } else if (selectedRegion === "All") {
    countryList.display()
  } else {
    countryList.displayRegion(selectedRegion)
  }
}

export default handleRegionSelect
