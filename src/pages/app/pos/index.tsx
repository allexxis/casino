import CategoryList from '@components/CategoryList';
import Text from '@components/Text';
import { getCategories } from '@lib/api/categories';
import { getProducts } from '@lib/api/products';
import ProductList from '@src/components/ProductList';
import { Category } from '@types';
import { Product } from '@api/v1/products';
import { useEffect, useState } from 'react';
import PosLayout from '@layouts/Pos';
import { FC } from 'react';
interface PosProps {
   categories: Category[];
   products: Product[];
}
const Pos: FC<PosProps> = ({ categories: c, products: p }) => {
   const [category, setCategory] = useState<Category | undefined>(undefined);
   const [categories, setCategories] = useState<Category[]>(c);
   const [products, setProducts] = useState<Product[]>(p);
   useEffect(() => {}, []);
   return (
      <PosLayout products={products}>
         <div className="mt-12 bg-neutral px-10 min-h-screen">
            <CategoryList
               categories={categories}
               onSelect={(c) => {
                  setCategory(c);
               }}
            />
            <Text
               className="mt-4 mb-4"
               type="h2"
               text={category?.display || 'Todas'}
            ></Text>
            <ProductList
               products={products}
               onSelect={(product: Product) => {
                  console.log(product);
               }}
            />
         </div>
      </PosLayout>
   );
};
export const getServerSideProps = async () => {
   const categories = await getCategories();
   const products = await getProducts();
   return { props: { categories, products } };
};
export default Pos;
