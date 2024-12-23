/** @type {import('tailwindcss').Config} */
export default {
 content: [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  'node_modules/flowbite-react/lib/esm/**/*.js',
 ],
 theme: {
  extend: {
   colors: {
    background: 'var(--background)',
    foreground: 'var(--foreground)',
    MintGreen: '#E8F0EB',
    CustomWhite: '#E8F5E9',
   },
  },
 },
 plugins: [require('flowbite/plugin')],
};
