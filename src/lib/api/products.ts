import { Product } from '@src/pages/api/v1/products';
import { BASE_URL } from '@config/index';

async function getProducts(): Promise<Product[]> {
   const res = await fetch(`${BASE_URL}/api/v1/products`);
   // The return value is *not* serialized
   // You can return Date, Map, Set, etc.

   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
   }

   return res.json();
}
export { getProducts };
