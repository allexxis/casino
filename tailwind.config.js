/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         colors: {
            primary: '#FFFFFF',
            icon: '#999A9E',
            'icon-active': '#E06F2C',
            neutral: '#F8F8F8',
            hover: '#FCF1E9',
            active: '#E06F2C',
            'text-neutral': '#999A9E',
            'text-opacity': '#A69D9A',
            'text-title': '#12141E',
            'border-card': '#CDCBCA',
            'bg-card': '#FCF1E9',
         },
      },
   },
};
