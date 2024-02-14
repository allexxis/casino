export type ServerResponse = {
   json: (data: any) => NextResponse;
   status: (code: number) => NextResponse;
};
export interface Category {
   id: number;
   name: string;
   slug: string;
   parent_id?: number;
   description: string;
   display: string;
   image: string;
}
