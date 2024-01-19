import { Product } from '@api/v1/products';
import classNames from '@src/utils/classNames';
import Image from 'next/image';
import { FC } from 'react';
import Text from '@components/Text';

interface PosProductProps {
   className?: string;
   onSelect?: (product: Product) => void;
   product: Product;
}
const PosProduct: FC<PosProductProps> = ({ product, className, onSelect }) => {
   return (
      <div
         onClick={() => {
            if (onSelect) {
               onSelect(product);
            }
         }}
         className={classNames(
            className || '',
            'relative flex h-40 w-40 overflow-hidden rounded-xl'
         )}
      >
         <Image
            width={160}
            height={160}
            className="object-cover"
            src={product.images[0].url}
            alt={product.name}
         />

         <span className="absolute top-0 left-0 m-2 rounded-md bg-white px-2 py-1 text-center">
            <Text type="p" text={product.price.toLocaleString()} />
         </span>
         <span
            className={classNames(
               'absolute bottom-0 right-0 mb-2 mr-2 rounded-md',
               'bg-white px-2 py-1 text-center w-[140px] '
            )}
         >
            <Text
               className={'overflow-hidden overflow-ellipsis whitespace-nowrap'}
               type="p"
               text={product.name}
            />
         </span>
      </div>
   );
};
export default PosProduct;
