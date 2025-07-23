import countryList from "../models/countryList.js";
function handleRegionSelect(event) {
    event.preventDefault();
    // event.stopPropagation()
    const clickedOption = event.target.closest("option");
    if (clickedOption) {
        const selectedRegion = clickedOption.value;
        if (selectedRegion === "Filter by Region") {
            return;
        }
        else if (selectedRegion === "All") {
            countryList.display();
        }
        else {
            countryList.displayRegion(selectedRegion);
        }
    }
}
export default handleRegionSelect;
