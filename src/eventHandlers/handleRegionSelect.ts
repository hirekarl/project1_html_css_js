import countryList from "../models/countryList.js"

function handleRegionSelect(event: MouseEvent) {
  event.preventDefault()
  event.stopPropagation()

  const clickedOption = (event.target as HTMLElement).closest("option")
  if (clickedOption) {
    const selectedRegion: string = clickedOption.value
    if (selectedRegion === "Filter by Region") {
      return
    } else if (selectedRegion === "All") {
      countryList.display()
    } else {
      countryList.displayRegion(selectedRegion)
    }
  }
}

export default handleRegionSelect
