import { Category } from '@types';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const categories: Category[] = [
   {
      name: 'Sodas',
      display: 'Sodas',
      image: '/assets/categories/food/soda.png',
      id: 1,
      description: 'Sodas',
      parent_id: undefined,
      slug: 'sodas',
   },
   {
      name: 'Café',
      display: 'Café',
      image: '/assets/categories/food/coffe.png',
      id: 2,
      description: 'Coffe',
      parent_id: undefined,
      slug: 'coffe',
   },
];

export default function handler(
   _req: NextRequest,
   res: NextResponse<Category[]>
) {
   return NextResponse.json(categories);
}
