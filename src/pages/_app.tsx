import { AppProps } from 'next/app';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

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
         <Component {...pageProps} />
      </ClerkProvider>
   );
}
