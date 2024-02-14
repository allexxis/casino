import { useRouter } from 'next/navigation';

export default function Protected({ children }: any) {
   const router = useRouter();
   const status = 'ok' as any; //TODO: use clerk to get status
   // const { status } = useSession({
   //    required: true,
   //    onUnauthenticated() {
   //       router.push('/');
   //    },
   // });

   if (status === 'loading') {
      return 'Loading or not authenticated...';
   }

   return children;
}
