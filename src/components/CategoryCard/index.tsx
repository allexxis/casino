import upperFirstLetter from '@utils/upperFirstLetter';
import { FC } from 'react';
import Image from 'next/image';
import isHttpUrl from '@utils/isHttpUrl';
import isAsset from '@utils/isAsset';
import Text from '@components/Text';
import classNames from '@utils/classNames';
import { Category } from '@types';

export interface CategoryCardProps {
   onSelect?: (category: Category) => void;
   category: Category;
   active?: boolean;
   className?: string;
}
const CategoryCard: FC<CategoryCardProps> = ({
   category,
   className,
   active,
   onSelect,
}) => {
   const url =
      isHttpUrl(category.image) || isAsset(category.image)
         ? category.image
         : '/assets/categories/default.png';

   return (
      <div
         onClick={(e) => {
            e.preventDefault();
            if (onSelect) {
               onSelect(category);
            }
         }}
         className={classNames(
            className || '',
            'w-24 h-28 flex flex-col justify-center items-center',
            'border rounded-2xl ',
            'hover:bg-hover hover:border-active cursor-pointer',
            active
               ? 'bg-bg-card border-active'
               : 'border-border-card bg-primary ',
            'hover:scale-[1.1] transition-transform duration-200',
            'active:scale-[1] transition-transform duration-200'
         )}
      >
         <Image width={32} height={32} src={url} alt={category.name} />
         <Text
            className="mt-4"
            text={upperFirstLetter(category.name)}
            type="p-opaque"
         />
      </div>
   );
};
export default CategoryCard;
