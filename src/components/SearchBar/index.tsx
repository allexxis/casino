import classNames from '@utils/classNames';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import useTranslations from 'next-translate/useTranslation';
import { FC } from 'react';

interface SearchbarProps {
   id?: string;
   className?: string;
   intl?: string;
   intlSelector?: string;
   placeHolder?: string;
   intlPlaceHolder?: string;
   intlPlaceHolderSelector?: string;
   onChange?: (value: string) => void;
   value?: string;
}
const Searchbar: FC<SearchbarProps> = ({
   id,
   placeHolder,
   intlPlaceHolder,
   intlPlaceHolderSelector,
   value,
   onChange,
   className,
}) => {
   const { t: p } = useTranslations('common');

   let intlPlaceHolderText = p(intlPlaceHolder || '');

   if (
      intlPlaceHolder &&
      intlPlaceHolderText.includes(intlPlaceHolder) &&
      placeHolder
   ) {
      intlPlaceHolderText = placeHolder;
   }
   return (
      <div className={className + ' relative rounded-lg  md:w-96'}>
         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
               className="h-5 w-5 text-text-neutral "
               aria-hidden="true"
            />
         </div>
         <input
            onChange={(e) => {
               if (onChange) {
                  onChange(e.target.value);
               }
            }}
            value={value}
            type="text"
            name="searchbar"
            id={id}
            className={classNames(
               'shadow-none',
               'block w-full rounded-lg py-1.5 pl-10 text-gray-900 sm:text-sm sm:leading-6',
               ' placeholder:text-text-neutral focus:border focus:border-solid',
               'focus:border-active focus:outline-none ',
               'hover:border-active hover:border-solid hover:border'
            )}
            placeholder={intlPlaceHolderText}
         />
      </div>
   );
};
export default Searchbar;
