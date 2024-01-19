import { Product } from '@api/v1/products';
import classNames from '@src/utils/classNames';
import Image from 'next/image';
import { FC } from 'react';
import Text from '@components/Text';

interface PosProductProps {
   className?: string;
   onSelect?: (product: Product) => void;
   product: Product;
   qty: number;
   symbol?: string;
   total: number;
}
const PosProduct: FC<PosProductProps> = ({
   product,
   className,
   onSelect,
   qty,
   total,
   symbol,
}) => {
   return (
      <div
         onClick={() => {
            if (onSelect) {
               onSelect(product);
            }
         }}
         className={classNames(
            className || '',
            'flex w-[360px] overflow-hidden rounded-xl'
         )}
      >
         <div className="w-14 h-14 relative">
            <Image
               fill={true}
               className="rounded-xl"
               src={product.images[0].url}
               alt={product.name}
            />
         </div>
         <div className="pl-4 flex flex-col">
            <Text
               className="overflow-ellipsis whitespace-nowrap mt-4"
               type="p"
               text={product.name}
            />
            <div className="flex flex-row mt-2 justify-between">
               <div className="flex-row flex">
                  <Text className="text-xs" type="p" text={`X`} />
                  <Text
                     className="text-md ml-1"
                     type="p-bold"
                     text={qty.toLocaleString()}
                  />
               </div>
               <Text
                  className="text-md ml-1"
                  type="p-bold"
                  text={symbol || '₡' + total?.toLocaleString()}
               />
            </div>
         </div>
      </div>
   );
};
export default PosProduct;
