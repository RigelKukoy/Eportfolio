import { GeistSans, GeistMono } from 'geist/font';
import './globals.css';

export const metadata = {
 title: 'Portfolio',
 description: 'My personal portfolio',
};

export default function RootLayout({ children }) {
 return (
  <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
   <body>{children}</body>
  </html>
 );
}
