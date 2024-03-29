import Image from 'next/image';

const BasketBall = () => {
   return (
      <Image
         src="/assets/basketball.svg"
         alt="Home Icon"
         className="h-5 w-auto"
         width={8}
         height={8}
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
         name: 'Nuevo',
         href: '/',
         icon: BasketBall,
         count: 5,
      },
      {
         name: 'Apuestas',
         href: '/',
         icon: BasketBall,
         count: 5,
      },
   ],
};
export default menu;
