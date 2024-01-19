import Protected from '@src/layouts/Protected';

export default function Test() {
   return (
      <Protected>
         <div className="flex flex-col m-auto max-w-md mt-8">
            <p className="text-center justify-center items-center content-center">
               Test
            </p>
         </div>
      </Protected>
   );
}

export const getServerSideProps = async () => {
   return {
      props: {},
   };
};
