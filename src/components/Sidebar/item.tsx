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
         className="flex flex-1 h-10 w-full items-center justify-center py-1"
         key={name}
      >
         <Link
            href={href}
            className={classNames(
               active
                  ? ' text-icon-active  bg-gray-800 '
                  : 'bg-primary text-white ',
               'group flex flex-1 rounded-sm text-sm leading-6 font-semiboldh-8'
            )}
         >
            <div
               id="sidebar-icon-container"
               className="ml-2 flex flex-1 items-center justify-center self-center h-5 w-5 hover:bg-hover "
            >
               <rest.icon
                  className={classNames(
                     active
                        ? 'text-icon-active'
                        : 'text-icon group-hover:text-icon-active',
                     'flex flex-1'
                  )}
                  aria-hidden="true"
               />
               <p className="ml-2 flex-1">{name}</p>
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
