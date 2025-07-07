import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import { DM_Sans } from 'next/font/google';
import { DynaPuff } from 'next/font/google';
import BootstrapClient from '@/lib/BootstrapClient';
import Navbar from '@/components/common/Navbar';

const dm_sans = DM_Sans({ subsets: ['latin'] })

const dynapuff = DynaPuff({
  subsets: ['latin'], 
  display: 'swap',  
  variable: '--font-dynapuff',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} ${dynapuff.variable}`}>
        <BootstrapClient />
        <Navbar />
        <main>
        {children}
        </main>

      </body>
    </html>
  );
}
