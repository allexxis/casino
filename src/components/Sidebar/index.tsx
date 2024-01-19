import menu from '@src/constants/menu';
import { FC, ReactNode } from 'react';
import Image from 'next/image';
import useTranslations from 'next-translate/useTranslation';
import { usePathname } from 'next/navigation';
import Item from './item';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
export type SidebarProps = {
   children?: ReactNode;
};

const Sidebar: FC<SidebarProps> = ({ children }) => {
   const { t } = useTranslations('common');
   const completePath = usePathname();
   const pathname = completePath.slice(3, completePath.length);
   return (
      <div className="flex flex-none flex-col gap-y-5 overflow-y-auto bg-primary  w-16 min-h-full">
         <div className="flex h-16 shrink-0 items-center justify-center">
            {/* <Image
               className="h-8 w-auto"
               width={8}
               height={8}
               src="/assets/op.png"
               alt="POS LOGO"
            /> */}
            <GlobeAltIcon className="h-8 w-auto text-icon" />
         </div>
         <nav className="flex flex-1 flex-col">
            <ul
               role="list"
               className="flex  flex-col items-center align-middle"
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