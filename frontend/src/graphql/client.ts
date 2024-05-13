import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
query Countries {
  countries {
    id
    code
    name
    emoji
    continent {
      name
      id
    }
  }
}
`


export const GET_ONE_COUNTRY = gql`
query Country($code: String!) {
  country(code: $code) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}
`


export const GET_CONTINENTS = gql`
query Continents {
  continents {
    id
    name
  }
} 
`


export const CREATE_NEW_COUNTRY = gql`
mutation Mutation($data: NewCountryInput!) {
  addCountry(data: $data) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }
}
`



export const CREATE_NEW_CONTINENT = gql`
mutation AddContinent($data: NewContinentInput!) {
  addContinent(data: $data) {
    id
    name
  }
}
`
