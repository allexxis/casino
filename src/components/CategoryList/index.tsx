import { FC, useState } from 'react';
import CategoryCard from '../CategoryCard';
import { Category } from '@types';

export interface CategoryListProps {
   className?: string;
   categories: Category[];
   onSelect?: (category: Category) => void;
}
const CategoryList: FC<CategoryListProps> = ({
   categories,
   className,
   onSelect,
}) => {
   const [activeCategory, setActiveCategory] = useState<Category | undefined>();
   return (
      <div className={className + ' flex flex-row'}>
         {categories.map((category, i) => {
            const active = activeCategory?.id === category.id;
            const isFirst = i === 0;
            return (
               <CategoryCard
                  onSelect={() => {
                     setActiveCategory(category);
                     if (onSelect) {
                        onSelect(category);
                     }
                  }}
                  className={isFirst ? '' : 'ml-8'}
                  key={category.id.toString()}
                  category={category}
                  active={active}
               />
            );
         })}
      </div>
   );
};

export default CategoryList;
