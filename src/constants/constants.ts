const htmlElement: HTMLHtmlElement = document.getElementById(
  "root"
) as HTMLHtmlElement

const darkModeToggleButton: HTMLButtonElement = document.getElementById(
  "dark-mode-toggle-button"
) as HTMLButtonElement

const darkModeToggleButtonModal: HTMLButtonElement = document.getElementById(
  "dark-mode-toggle-button-modal"
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

const countryDetailModal = document.getElementById(
  "country-detail-modal"
) as HTMLDivElement

const modalFlagContainer = document.getElementById(
  "modal-flag-container"
) as HTMLDivElement

const modalInfoContainer = document.getElementById(
  "modal-info-container"
) as HTMLDivElement

export {
  htmlElement,
  darkModeToggleButton,
  darkModeToggleButtonModal,
  countrySearchInput,
  regionSelect,
  countriesContainer,
  countryDetailModal,
  modalFlagContainer,
  modalInfoContainer
}
