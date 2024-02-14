import menu from '@src/constants/menu';
import { FC, ReactNode } from 'react';
import Image from 'next/image';
import useTranslations from 'next-translate/useTranslation';
import { usePathname } from 'next/navigation';
import Item from './item';

export type SidebarProps = {
   children?: ReactNode;
};

const Sidebar: FC<SidebarProps> = ({ children }) => {
   const { t } = useTranslations('common');
   const completePath = usePathname();
   const pathname = completePath.slice(3, completePath.length);
   return (
      <div className="flex flex-none flex-col gap-y-5 overflow-y-auto bg-primary  w-[10rem] min-h-full border-r">
         <div className="flex h-16 shrink-0 items-start justify-center text-white">
            {/* <Image
               className="h-8 w-auto"
               width={8}
               height={8}
               src="/assets/basketball.svg"
               alt="POS LOGO"
            /> */}
            APOSTA
         </div>
         <nav className="flex flex-1 flex-col">
            <ul
               role="list"
               className="flex  flex-col items-start align-left ml-1"
            >
               {menu.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                     <Item
                        key={item.name}
                        name={t(item.name)}
                        href={item.href}
                        icon={item.icon}
                        active={active}
                     />
                  );
               })}
            </ul>
         </nav>
      </div>
   );
};
export default Sidebar;
