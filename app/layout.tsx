import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Footer from '@/components/Footer';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Wondernest',
  description: 'The fastest way to build apps with Next.js and Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={GeistSans.className}>
      <body className='bg-stone-100'>
        <main className='min-h-screen flex flex-col items-center'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
