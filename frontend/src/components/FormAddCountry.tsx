import React from 'react'
import { useForm } from 'react-hook-form';

const FormAddCountry = () => {
   const { register, handleSubmit, reset } = useForm();

   const onSubmit = (data: any) => {
  
      console.log(data);
      reset();
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
         </form>
      </div>
   )
}

export default FormAddCountry;