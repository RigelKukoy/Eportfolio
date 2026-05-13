import { GeistSans, GeistMono } from 'geist/font';
import './globals.css';

export const metadata = {
  title: 'Rigel Ray Cabaya | Portfolio',
  description: 'Frontend Developer passionate about creating beautiful and functional web experiences. Computer Science student at USTP.',
  openGraph: {
    title: 'Rigel Ray Cabaya | Portfolio',
    description: 'Frontend Developer passionate about creating beautiful and functional web experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`} style={{ scrollPaddingTop: '5rem' }}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
