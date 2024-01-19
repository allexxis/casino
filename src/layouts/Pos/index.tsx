import Sidebar from '@components/Sidebar';
import Searchbar from '@components/SearchBar';
import Text from '@components/Text';
import { FC } from 'react';
import Summary from '@components/Cart/Summary';
import { Product } from '@api/v1/products';

interface PosLayoutProps {
   children: React.ReactNode;
   products: Product[];
}
const Layout: FC<PosLayoutProps> = ({ children, products }) => {
   //const [sidebarOpen, setSidebarOpen] = useState(false);
   return (
      <div className="flex h-full">
         <div className="flex flex-1 flex-row min-h-screen ">
            <Sidebar />

            <main className="flex flex-1 flex-col min-h-screen bg-neutral">
               <header className="mt-4 w-full flex flex-row justify-between items-center bg-neutral  px-10">
                  <div className="flex-1">
                     <Text intl="PosLayout.page.pos" type="h1" />
                  </div>
                  <div className="flex-1">
                     <Searchbar
                        intlPlaceHolder="PosLayout.page.searchbar"
                        intlPlaceHolderSelector="PosLayout"
                     />
                  </div>
               </header>
               <div className="flex-1 min-h-screen bg-neutral">{children}</div>
            </main>
            <nav className="flex flex-auto  h-full">
               <Summary products={products} />
            </nav>
         </div>
      </div>
   );
};
export default Layout;
