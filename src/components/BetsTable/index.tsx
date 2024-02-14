import classNames from '@utils/classNames';
import upperFirstLetter from '@utils/upperFirstLetter';
import { FC } from 'react';

const bets = [
   {
      id: 1,
      gameType: 'football',
      creator: {
         name: 'John Doe',
         id: 1,
         isHidden: false,
      },
      time: '2021-10-10T10:00:00Z',
      bet: {
         amount: 100,
         currency: 'USD',
         earnings: 190,
      },
   },
   {
      id: 2,
      gameType: 'football',
      creator: {
         name: 'Mary Jane',
         id: 2,
         isHidden: false,
      },
      time: '2021-10-10T10:00:00Z',
      bet: {
         amount: 100,
         currency: 'USD',
         earnings: 190,
      },
   },
   {
      id: 3,
      gameType: 'football',
      creator: {
         name: 'Peter Parker',
         id: 3,
         isHidden: false,
      },
      time: '2021-10-10T10:00:00Z',
      bet: {
         amount: 100,
         currency: 'USD',
         earnings: 190,
      },
   },
   {
      id: 4,
      gameType: 'football',
      creator: {
         name: '--',
         id: 4,
         isHidden: true,
      },
      time: '2021-10-10T10:00:00Z',
      bet: {
         amount: 100,
         currency: 'USD',
         earnings: 190,
      },
   },
];

const BetsTable: FC = () => {
   return (
      <div className="mt-4">
         <table className="flex flex-col">
            <thead className="flex">
               <tr className="flex flex-1">
                  <th className="flex-1 px-4 py-2 text-gray-400">
                     Tipo de juego
                  </th>
                  <th className="flex-1 px-4 py-2 text-gray-400">Creador</th>
                  <th className="flex-1 px-4 py-2 text-gray-400">Hora</th>
                  <th className="flex-1 px-4 py-2 text-gray-400">
                     Monto de apuesta
                  </th>
                  <th className="flex-1 px-4 py-2 text-gray-400">Ganancia</th>
               </tr>
            </thead>
            <tbody className="">
               {bets.map((bet, i) => {
                  return (
                     <tr
                        className={classNames(
                           i % 2 === 0 ? 'bg-[#363C48]' : '',
                           'cursor-pointer rounded-md hover:scale-105 text-l flex'
                        )}
                        key={bet.id}
                     >
                        <td className=" flex-1 text-center px-4 py-2 text-white font-bold ">
                           {upperFirstLetter(bet.gameType)}
                        </td>
                        <td className="flex-1 text-center  px-4 py-2 text-gray-300">
                           {bet.creator.isHidden ? 'Oculto' : bet.creator.name}
                        </td>
                        <td className="flex-1 text-center  px-4 py-2 text-gray-300">
                           {/* // get hour only */}
                           {new Date(bet.time).toLocaleTimeString('en-US', {
                              hour: '2-digit',
                              minute: '2-digit',
                           })}
                        </td>
                        <td className="flex-1 text-center px-4 py-2 text-gray-300">
                           {bet.bet.amount} {bet.bet.currency}
                        </td>
                        <td className="flex-1 text-center px-4 py-2 text-green-500">
                           {bet.bet.earnings} {bet.bet.currency}
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};
export default BetsTable;
