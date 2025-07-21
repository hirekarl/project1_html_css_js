import { Country } from "./models/Country.js"
import { getAllCountries } from "./services/apiService.js"

async function main() {
  const allCountries: Country[] = await getAllCountries()

  for (let i = 0; i < 3; i++) {
    console.log(JSON.stringify(allCountries[i]))
  }
}

main()
