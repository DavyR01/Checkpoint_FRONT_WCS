import { CREATE_NEW_COUNTRY } from '@/graphql/client';
import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const FormAddCountry = () => {
   const { register, handleSubmit, reset } = useForm();
   const [addCountry, { loading, error }] = useMutation(CREATE_NEW_COUNTRY);

   const onSubmit = async (data: any) => {
      try {
         const result = await addCountry({
            variables: {
               data: {
                  name: data.name,
                  code: data.code,
                  emoji: data.emoji
               }
            }
         });
         console.log(result);
         window.location.reload();
         reset();
      } catch (error) {
         console.error('Error adding country:', error);
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)} className="formAddCountry">
            <div>
               <label htmlFor="name">Name:</label>
               <input type="text" id="name" {...register('name')} />
            </div>
            <div>
               <div><label htmlFor="emoji">Emoji:</label></div>
               <input type="text" id="emoji" {...register('emoji')} />
            </div>
            <div>
               <label htmlFor="code">Code:</label>
               <input type="text" id="code" {...register('code')} />
            </div>
            <button type="submit">Add</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error : {error.message}</p>}
         </form>
      </div>
   )
}

export default FormAddCountry;