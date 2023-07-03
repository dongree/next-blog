import Header from '@/components/Header';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Dongree의 블로그',
    template: 'Dongree의 블로그 | %s',
  },
  description: 'Dongree의 블로그입니다.',
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
