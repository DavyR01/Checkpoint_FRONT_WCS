export type ICountries = {
   id: string
   code: string
   name: string
   emoji: string
   continent: {
      id: string
      name: string
   }
}

export type IContinents = {
   id: string
   name: string
}