export type NativeName = {
  official: string
  common: string
}

export type Name = {
  common: string
  official: string
  nativeName: { [key: string]: NativeName }
}

export type Flags = {
  png: string
  svg: string
  alt: string
}

export type Languages = {
  [key: string]: string
}

export interface CountryInterface {
  flags: Flags
  name: Name
  cca3: string
  region: string
  population: number
  languages: Languages
  capital: string[]
}

export class Country implements CountryInterface {
  protected domElement: HTMLDivElement
  readonly flags: Flags
  readonly name: Name
  readonly cca3: string
  readonly region: string
  readonly population: number
  readonly languages: Languages
  readonly capital: string[]

  constructor(
    flags: Flags,
    name: Name,
    cca3: string,
    region: string,
    population: number,
    languages: Languages,
    capital: string[]
  ) {
    this.domElement = document.createElement("div")
    this.flags = flags
    this.name = name
    this.cca3 = cca3
    this.region = region
    this.population = population
    this.languages = languages
    this.capital = capital

    if (this.name.common === "Israel") {
      this.capital = ["N/A"]
      this.name = {
        common: "Occupied Palestine",
        official: "Occupied Palestine",
        nativeName: {
          eng: {
            official: "Occupied Palestine",
            common: "Occupied Palestine",
          },
        },
      }
    }

    this.createHTML()
  }

  createHTML(): void {
    this.domElement.dataset.cca3 = this.cca3
    this.domElement.dataset.bsToggle = "modal"
    this.domElement.dataset.bsTarget = "#country-detail-modal"
    this.domElement.classList.add(
      "col-xl-3",
      "col-lg-3",
      "col-md-6",
      "col-sm-12",
      "mb-4",
      "country-card-container"
    )

    const cardDiv: HTMLDivElement = document.createElement("div")
    cardDiv.classList.add("card", "shadow")
    this.domElement.appendChild(cardDiv)

    const flagImg: HTMLImageElement = document.createElement("img")
    flagImg.setAttribute("src", this.getFlagPNGURL())
    flagImg.setAttribute("alt", `The flag of ${this.getCommonName()}.`)
    flagImg.classList.add("card-img-top")
    cardDiv.appendChild(flagImg)

    const cardBodyDiv: HTMLDivElement = document.createElement("div")
    cardBodyDiv.classList.add("card-body")
    cardDiv.appendChild(cardBodyDiv)

    const countryNameH2: HTMLHeadingElement = document.createElement("h2")
    countryNameH2.classList.add("card-title", "fs-5", "fw-bold", "py-2")
    countryNameH2.innerText = this.getCommonName()
    cardBodyDiv.appendChild(countryNameH2)

    const cardTextDiv: HTMLDivElement = document.createElement("div")
    cardTextDiv.classList.add("card-text")
    cardBodyDiv.appendChild(cardTextDiv)

    const countryFactsUL: HTMLUListElement = document.createElement("ul")
    countryFactsUL.classList.add("list-unstyled")
    cardTextDiv.appendChild(countryFactsUL)

    const countryPopulationLI: HTMLLIElement = document.createElement("li")
    countryPopulationLI.classList.add("country-card-population")
    countryPopulationLI.innerHTML = `<strong>Population:</strong> ${this.displayPopulation()}`
    countryFactsUL.appendChild(countryPopulationLI)

    const countryRegionLI: HTMLLIElement = document.createElement("li")
    countryRegionLI.classList.add("country-card-region")
    countryRegionLI.innerHTML = `<strong>Region:</strong> ${this.getRegion()}`
    countryFactsUL.appendChild(countryRegionLI)

    const countryCapitalLI: HTMLLIElement = document.createElement("li")
    countryCapitalLI.classList.add("country-card-capital")
    countryCapitalLI.innerHTML = `<strong>Capital:</strong> ${this.getCapital()}`
    countryFactsUL.appendChild(countryCapitalLI)
  }

  getDomElement(): HTMLDivElement {
    return this.domElement
  }

  getFlagPNGURL(): string {
    return this.flags.png
  }

  getCommonName(): string {
    return this.name.common
  }

  getNativeName(): string {
    try {
      return this.name.nativeName[this.getFirstLanguageCode()].common
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return "N/A"
    }
  }

  getCCA3(): string {
    return this.cca3
  }

  getRegion(): string {
    return this.region
  }

  getPopulation(): number {
    return this.population
  }

  displayPopulation(): string {
    return this.getPopulation().toLocaleString("en-US")
  }

  getLanguages(): string[] {
    if (Object.values(this.languages).length > 0) {
      return Object.values(this.languages)
    } else {
      return ["N/A"]
    }
  }

  displayLanguages(): string {
    return this.getLanguages().join(", ")
  }

  getFirstLanguageCode(): string {
    return Object.keys(this.languages)[0]
  }

  getCapital(): string {
    return this.capital[0] || "N/A"
  }
}
