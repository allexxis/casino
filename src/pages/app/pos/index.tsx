import Text from '@components/Text';
import { useEffect, useState } from 'react';
import MainLayout from '@src/layouts/Main';
import { FC } from 'react';

const Pos: FC = ({}) => {
   useEffect(() => {}, []);
   return (
      <MainLayout>
         <div className="mt-12 bg-neutral px-10 min-h-screen">
            <Text className="mt-4 mb-4" type="h2" text={'Todas'}></Text>
         </div>
      </MainLayout>
   );
};
export const getServerSideProps = async () => {
   return { props: {} };
};
export default Pos;
