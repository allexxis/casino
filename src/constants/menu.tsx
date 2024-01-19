import Image from 'next/image';
import { ChartPieIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import { HomeIcon, CalculatorIcon } from '@heroicons/react/24/solid';
const CashRegister = () => {
   return (
      <Image
         src="/assets/cash-register.svg"
         alt="Home Icon"
         width={32}
         height={32}
         priority
      />
   );
};
export type MenuItem = {
   name: string;
   href: string;
   icon: any;
   children?: MenuItem[];
   current?: boolean;
   count?: number;
};
export type Menu = {
   items: MenuItem[];
};

const menu: Menu = {
   items: [
      {
         name: 'home',
         href: '/app/pos/',
         icon: CalculatorIcon,
         count: 5,
      },
      {
         name: 'products',
         href: '/app/products/',
         icon: ArchiveBoxIcon,
         count: 5,
      },
   ],
};
export default menu;
