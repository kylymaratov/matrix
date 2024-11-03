import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { getDictionary, Languages } from '@/utils/dictionaries';
import { TranslationProvider } from '@/context/TranslationContext';

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: Languages;
  };
}

export const metadata: Metadata = {
  title: 'Matrix',
};

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { locale } = await params;
  const t = await getDictionary(locale);
  return (
    <html lang={locale} dir={locale}>
      <body>
        <TranslationProvider t={t} locale={locale}>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
};

export default RootLayout;