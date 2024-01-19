import { FC } from 'react';

interface DividerProps {
   className?: string;
}
const Divider: FC<DividerProps> = ({ className }) => {
   return <div className={className + ' bg-gray-300  h-[0.6px] w-full'}></div>;
};

export default Divider;
