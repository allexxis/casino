import { AppProps } from 'next/app';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter as FontSans } from 'next/font/google';
import { Inter } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] });
// export default function App({
//    Component,
//    pageProps: { session, ...pageProps },
// }: AppProps) {
//    return (
//       <SessionProvider session={session}>
//          <Component {...pageProps} />
//       </SessionProvider>
//    );
// }

type PageProps = {
   messages: any;
   now: number;
   session: any;
};

type Props = Omit<AppProps<PageProps>, 'pageProps'> & {
   pageProps: PageProps;
};

export default function App({ Component, pageProps }: Props) {
   return (
      <ClerkProvider {...pageProps}>
         <main className={inter.className}>
            <Component {...pageProps} />
         </main>
      </ClerkProvider>
   );
}
