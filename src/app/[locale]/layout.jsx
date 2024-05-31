import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import Header from "./header";
import { locales } from "@/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// generating static pages for all languages
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  // generating multi language metadata
  const t = await getTranslations({ locale, namespace: "defaultMetadata" });

  return {
    title: t("title"),
  };
}

export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  // console.log("locale", locale);

  return (
    <html lang={locale}>
      <body className={`bg-stone-950 text-gray-50 ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          <div className="lg:w-[1200px] mx-5 lg:mx-auto">
            <Header />
            <main className="my-10">{children}</main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
