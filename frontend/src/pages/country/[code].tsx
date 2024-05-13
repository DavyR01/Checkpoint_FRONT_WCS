import Header from '@/components/Header';
import { GET_ONE_COUNTRY } from '@/graphql/client';
import { ICountries } from '@/types';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react'

const CountryByCode = () => {
   const router = useRouter()
   const { code } = router.query
   const { loading, error, data } = useQuery<{ country: ICountries }>(GET_ONE_COUNTRY, {
      variables: { code: code }
   });

   const { id, name, emoji, continent } = data?.country || {}
   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error : {error.message}</p>;
   console.log('country by code :', data);
   return (
      <>
         <Header />
         <div className='countryByCode'>
            {/* <img src={emoji} alt="flag" /> */}
            <img width={(350)} src='https://urlz.fr/qDVA' alt="flag" />
            <div>
               <strong>Name :</strong> {name} ({code})
            </div>
            <div>
               <strong>Continent :</strong> {continent?.name}
            </div>
         </div>
      </>
   )
};

export default CountryByCode;