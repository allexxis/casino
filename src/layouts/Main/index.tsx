import Sidebar from '@components/Sidebar';
import Searchbar from '@components/SearchBar';
import Text from '@components/Text';
import { FC, useState } from 'react';
import useKeyPress from '@hooks/useKeyPress';
import classNames from '@utils/classNames';
import { SignIn } from '@clerk/nextjs';
interface LayoutProps {
   children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
   //const [sidebarOpen, setSidebarOpen] = useState(false);
   const [showSignIn, setShowSignIn] = useState(false);
   const escPressed = useKeyPress('Escape');
   if (escPressed && showSignIn) {
      setShowSignIn(false);
   }
   return (
      <div className="flex h-full w-full">
         <div className="flex flex-1 flex-row min-h-screen ">
            <Sidebar />

            <main className="flex flex-1 flex-col min-h-screen bg-primary">
               <header
                  className={classNames(
                     'w-full flex flex-row justify-between',
                     ' items-center bg-neutral px-10 shadow-md',
                     'bg-primary h-10'
                  )}
               >
                  {showSignIn && (
                     <>
                        <div
                           id="signin-overlay"
                           onClick={() => setShowSignIn(false)}
                           aria-hidden="true"
                           className="fixed inset-0 w-full h-full backdrop-blur-xl bg-black/50 cursor-pointer z-[9]"
                        ></div>
                        <div
                           id=""
                           className={classNames(
                              'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                              'bg-[rgba(0, 0, 0, 0.5)] flex items-center justify-center',
                              'z-[20000]'
                           )}
                        >
                           <SignIn
                              appearance={{
                                 variables: {
                                    colorPrimary: '#1F2937',
                                 },
                              }}
                           />
                        </div>
                     </>
                  )}
                  <div className=" flex flex-1 justify-end">
                     <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-white"
                        onClick={() => setShowSignIn(true)}
                     >
                        Iniciar sesión <span aria-hidden="true">&rarr;</span>
                     </a>
                  </div>
               </header>
               <div className="flex-1 min-h-screen bg-neutral">{children}</div>
            </main>
         </div>
      </div>
   );
};
export default Layout;
