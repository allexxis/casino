import MiniProduct from '@components/Product/Mini';
import { Product } from '@api/v1/products';
import { FC, useEffect, useState } from 'react';
import Text from '@components/Text';
import Divider from '@components/Divider';

interface SummaryProps {
   products: Product[];
}

const Summary: FC<SummaryProps> = ({ products }) => {
   const [show, setShow] = useState(false);
   useEffect(() => {
      setShow(true);
   }, []);
   return (
      <div className="flex flex-col mt-4 px-8">
         <Text className="mb-4 min-w-[15rem]" type="h2" text="Resumen" />
         {products.length > 0 &&
            products.map((p) => {
               return (
                  <div key={p._id?.toString()}>
                     <MiniProduct product={p} qty={10} total={100} />
                     <Divider className="my-2" />
                  </div>
               );
            })}
      </div>
   );
};

export default Summary;
