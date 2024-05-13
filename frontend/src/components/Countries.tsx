import { GET_ALL_COUNTRIES } from '@/graphql/client';
import { ICountries } from '@/types';
import { useQuery } from '@apollo/client';
import React from 'react'

const Countries = () => {
   const { loading, error, data } = useQuery<{ countries: ICountries[] }>(GET_ALL_COUNTRIES);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error : {error.message}</p>;
   console.log('countries : ', data);

   
  return (
    <div>Countries list !!</div>
  )
}

export default Countries