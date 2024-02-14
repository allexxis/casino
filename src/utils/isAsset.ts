const isAsset = (path?: string): boolean => {
   if (!path) {
      return false;
   }
   return path.startsWith('/assets/');
};
export default isAsset;
