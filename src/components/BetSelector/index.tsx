import classNames from '@src/utils/classNames';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
const betTypes = ['ALL', 'FOOTBALL', 'UFC'];
const BetSelector: FC = () => {
   const router = useRouter();
   const { betType } = router.query;

   return (
      <div className="">
         <h1 className="text-3xl text-white font-bold">
            Bienvenido a BetHouse
         </h1>
         <p className="text-lg text-gray-400">
            Selecciona el tipo de apuesta que te interesa
         </p>
         <div className=" flex flex-row justify-start space-x-2 mt-2">
            {betTypes.map((category) => (
               <a
                  key={category}
                  onClick={() => {
                     router.push(`/?betType=${category}`);
                  }}
               >
                  <div
                     key={category}
                     className={classNames(
                        category === betType ? 'bg-white' : 'bg-primary',
                        category !== betType
                           ? 'border-white border-solid border'
                           : '',
                        'flex  p-[1rem] rounded-xl ',
                        'justify-center max-w-5 cursor-pointer'
                     )}
                  >
                     <div className="flex justify-center items-center  max-h-2 text-center ">
                        <h3
                           className={classNames(
                              category === betType
                                 ? 'text-primary'
                                 : 'text-white',
                              'text-primary font-bold text-center',
                              'text-sm'
                           )}
                        >
                           {category}
                        </h3>
                     </div>
                  </div>
               </a>
            ))}
         </div>
      </div>
   );
};
export default BetSelector;
