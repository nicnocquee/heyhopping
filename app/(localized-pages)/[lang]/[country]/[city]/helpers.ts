export const supportedCountries = [
  {
    code: 'ch',
    name: 'Switzerland',
    languages: ['de', 'fr', 'it', 'en'],
  },
]

export const defaultCountry = {
  code: 'default',
  name: 'Default',
  languages: ['de', 'fr', 'it', 'en'],
}

export const findSupportedCountry = (countryCode: string) =>
  supportedCountries.find((country) => country.code.toLowerCase() === countryCode.toLowerCase())

export const encodeUmlauts = (str: string) =>
  str
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/Ä/g, 'Ae')
    .replace(/Ö/g, 'Oe')
export const decodeUmlauts = (str: string) =>
  str
    .replace(/ae/g, 'ä')
    .replace(/oe/g, 'ö')
    .replace(/ue/g, 'ü')
    .replace(/Ae/g, 'Ä')
    .replace(/Oe/g, 'Ö')

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
