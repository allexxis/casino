import { useEffect, useState } from 'react';
import useKeyPress from '@src/hooks/useKeyPress';
import MainLayout from '@src/layouts/Main';
export default function Index() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [showSignIn, setShowSignIn] = useState(false);
   const escPressed = useKeyPress('Escape');
   if (escPressed && showSignIn) {
      setShowSignIn(false);
   }
   return (
      <MainLayout>
         <div>Hola</div>
      </MainLayout>
   );
}
