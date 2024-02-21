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
            <div className="flex flex-1 justify-center border-gray-600 border rounded-md "></div>
         </div>
         <div className="pl-[2.4rem] pr-[2.4rem]">
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
