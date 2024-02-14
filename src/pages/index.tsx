import { useEffect, useState } from 'react';
import useKeyPress from '@src/hooks/useKeyPress';
import MainLayout from '@src/layouts/Main';
import { useRouter } from 'next/router';
import classNames from '@src/utils/classNames';
import BetSelector from '@components/BetSelector';
import BetsTable from '@components/BetsTable';
import Image from 'next/image';

export default function Index() {
   const router = useRouter();
   const { betType: bt } = router.query;
   const [betType, setBetType] = useState(bt || 'ALL');
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [showSignIn, setShowSignIn] = useState(false);
   const escPressed = useKeyPress('Escape');
   if (escPressed && showSignIn) {
      setShowSignIn(false);
   }

   return (
      <MainLayout>
         <div
            id="main-promotion"
            className="flex min-w-full h-[20rem] p-[2.4rem] "
         >
            <div className="flex flex-1 justify-center space-x-[5rem] ">
               <Image
                  alt="player"
                  src="/assets/players/csh.png"
                  width={200}
                  height={100}
               />
               <h2 className="text-white text-4xl font-bold text-center  self-center">
                  VS
               </h2>
               <Image
                  alt="player"
                  src="/assets/players/lda.png"
                  width={300}
                  height={50}
               />
            </div>
         </div>
         <div className="p-[2.4rem]">
            <BetSelector />
            <BetsTable />
         </div>
      </MainLayout>
   );
}
export async function getServerSideProps() {
   return {
      props: {},
   };
}
