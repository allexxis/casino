import { NextRequest } from 'next/server';
import { ServerResponse } from '@types';
export type Product = Document & {
   name: string;
   description?: string;
   price: number;
   qty: number;
   sku: string;
   images: {
      url: string;
      order: number;
      alt?: string;
   }[];
};

async function GET(_req: NextRequest, res: ServerResponse) {
   const products = await Product.find();
   console.log(products);
   return res.json(products);
}
async function POST(req: NextRequest, res: ServerResponse) {
   const { name, description, price, qty, sku, images } = req.body as any;
   const product = await Product.create({
      name,
      description,
      price,
      qty,
      sku,
      images,
   });
   return res.json(product);
}

export default async function handler(req: NextRequest, res: ServerResponse) {
   if (req.method === 'GET') {
      return GET(req, res);
   }
   if (req.method === 'POST') {
      return POST(req, res);
   }
   return res.status(405).send({ error: 'Method not allowed' });
}
