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
            <Link href={`/country/${country.code}`} key={country.id}>
               <div className="countryItem">
                  <h4>{country.name}</h4>
                  {/* <span role="img" aria-label="flag"> {country.emoji} </span> */}
                  <span className="mr-2 text-xl">{country.emoji}</span>

                  {/* {<img src={country.emoji} alt="flag" />} */}
                  {/* <span dangerouslySetInnerHTML={{ __html: country.emoji }} /> */}

                  {/* <img src='https://urlz.fr/qDVA' alt="flag" /> */}
                  {/* { country.emoji ? <img src={country.emoji} alt="flag" /> : <img src='https://urlz.fr/qDVA' alt="flag" />  } */}

               </div>
            </Link>
         ))}
      </div>
   )
}

export default Countries