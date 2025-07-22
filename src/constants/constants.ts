const htmlElement: HTMLHtmlElement = document.getElementById(
  "root"
) as HTMLHtmlElement

const darkModeToggleButton: HTMLButtonElement = document.getElementById(
  "dark-mode-toggle-button"
) as HTMLButtonElement

const darkModeToggleButtonModal: HTMLButtonElement = document.getElementById(
  "dark-mode-toggle-button-modal"
) as HTMLButtonElement

const countrySearch: HTMLInputElement = document.getElementById(
  "country-search"
) as HTMLInputElement

const regionSelect: HTMLSelectElement = document.getElementById(
  "region-select"
) as HTMLSelectElement

const countriesContainer: HTMLDivElement = document.getElementById(
  "countries-container"
) as HTMLDivElement

const countryDetailModal: HTMLDivElement = document.getElementById(
  "country-detail-modal"
) as HTMLDivElement

const modalFlagContainer: HTMLDivElement = document.getElementById(
  "modal-flag-container"
) as HTMLDivElement

const modalInfoContainer: HTMLDivElement = document.getElementById(
  "modal-info-container"
) as HTMLDivElement

export {
  htmlElement,
  darkModeToggleButton,
  darkModeToggleButtonModal,
  countrySearch,
  regionSelect,
  countriesContainer,
  countryDetailModal,
  modalFlagContainer,
  modalInfoContainer
}
