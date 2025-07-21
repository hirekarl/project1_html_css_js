const htmlElement: HTMLHtmlElement = document.getElementById(
  "root"
) as HTMLHtmlElement

const darkModeToggleButton: HTMLButtonElement = document.getElementById(
  "dark-mode-toggle-button"
) as HTMLButtonElement

const countrySearchInput = document.getElementById(
  "country-search-input"
) as HTMLInputElement

const regionSelect: HTMLSelectElement = document.getElementById(
  "region-select"
) as HTMLSelectElement

const countriesContainer = document.getElementById(
  "countries-container"
) as HTMLDivElement

export {
  htmlElement,
  darkModeToggleButton,
  countrySearchInput,
  regionSelect,
  countriesContainer,
}
