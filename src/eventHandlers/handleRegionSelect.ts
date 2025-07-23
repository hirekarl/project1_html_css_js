import countryList from "../models/countryList.js"

function handleRegionSelect(event: Event): void {
  const regionSelect: HTMLSelectElement = event.target as HTMLSelectElement
  const selectedRegion: string = regionSelect.value

  if (selectedRegion === "Filter by Region") {
    return
  } else if (selectedRegion === "All") {
    countryList.display()
  } else {
    countryList.displayRegion(selectedRegion)
  }
}

export default handleRegionSelect
