interface NativeName {
  official: string
  common: string
}

export interface APICountry {
  flags: {
    png: string
    svg: string
    alt: string
  }
  name: {
    common: string
    official: string
    nativeName: { [key: string]: NativeName }
  }
  cca3: string
  capital: string[]
  region: string
  population: number
}
