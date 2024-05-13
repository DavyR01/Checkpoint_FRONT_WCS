import { GET_ALL_COUNTRIES } from '@/graphql/client';
import { ICountries } from '@/types';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import React from 'react'

const Countries = () => {
   const { loading, error, data } = useQuery<{ countries: ICountries[] }>(GET_ALL_COUNTRIES);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error : {error.message}</p>;
   console.log('countries : ', data);


   return (
      <div className='countriesList'>
         {data?.countries.map((country, index) => (
            <div key={country.id} className="countryItem">

               <Link href={`/country/${country.code}`}>
                  <h4>{country.name}</h4>
                  {/* {<img src={country.emoji} alt="flag" />} */}
                  <img src='https://urlz.fr/qDVA' alt="flag" />
               </Link>
               {/* { country.emoji ? <img src={country.emoji} alt="flag" /> : <img src='https://urlz.fr/qDVA' alt="flag" />  } */}
            </div>
         ))}
      </div>
   )
}

export default Countries