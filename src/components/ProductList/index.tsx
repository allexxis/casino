import { FC } from 'react';
import PosProduct from '@components/Product/Pos';
import { Product } from '@api/v1/products';

export interface ProductListProps {
   className?: string;
   products: Product[];
   onSelect?: (product: Product) => void;
}
const ProductList: FC<ProductListProps> = ({
   products,
   className,
   onSelect,
}) => {
   return (
      <div className={className + ' flex flex-row hover:cursor-pointer'}>
         {products.map((product, i) => {
            const isFirst = i === 0;
            return (
               <PosProduct
                  onSelect={() => {
                     if (onSelect) {
                        onSelect(product);
                     }
                  }}
                  className={isFirst ? '' : 'ml-4'}
                  key={product._id?.toString()}
                  product={product}
               />
            );
         })}
      </div>
   );
};

export default ProductList;
