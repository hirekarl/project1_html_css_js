import { htmlElement, darkModeToggleButton } from "../constants/constants.js"

function handleDarkModeToggleButton() {
  if (htmlElement.dataset.bsTheme === "light") {
    htmlElement.dataset.bsTheme = "dark"
    darkModeToggleButton.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode'
  } else {
    htmlElement.dataset.bsTheme = "light"
    darkModeToggleButton.innerHTML = '<i class="bi bi-moon"></i> Dark Mode'
  }
}

export default handleDarkModeToggleButton
