const isHttpUrl = (url?: string): boolean => {
   if (!url) return false;
   return (
      url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('//')
   );
};
export default isHttpUrl;
