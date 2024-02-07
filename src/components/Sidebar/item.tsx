import classNames from '@src/utils/classNames';
import Link from 'next/link';
import { FC } from 'react';

interface SideBarItemProps {
   name: string;
   href: string;
   icon: any;
   active?: boolean;
}
const Item: FC<SideBarItemProps> = ({ name, href, active, ...rest }) => {
   return (
      <li
         className="flex flex-1 h-10 w-10 mt-4 items-center justify-center"
         key={name}
      >
         <Link
            href={href}
            className={classNames(
               active ? ' text-icon-active' : 'bg-primary text-white',
               'group flex flex-1 rounded-md  text-sm leading-6 font-semibold'
            )}
         >
            <div
               id="sidebar-icon-container"
               className="flex flex-1 items-center h-10 w-10 hover:bg-hover "
            >
               <rest.icon
                  className={classNames(
                     active
                        ? 'text-icon-active'
                        : 'text-icon group-hover:text-icon-active',
                     'h-8 w-8 flex flex-1'
                  )}
                  aria-hidden="true"
               />
               {/* {name} */}
               {/* {item.count ? (
          <span
             className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-indigo-500"
             aria-hidden="true"
          >
             {item.count}
          </span>
       ) : null} */}
            </div>
         </Link>
      </li>
   );
};
export default Item;
