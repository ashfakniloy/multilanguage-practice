import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/config";

// Can be imported from a shared config
// const locales = ["en", "bn"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };

  // // for separate files for separate pages and components
  // const messages = {
  //   ...(await import(`../messages/${locale}/Header.json`)).default,
  //   ...(await import(`../messages/${locale}/HomeaPage.json`)).default,
  // };

  // return {
  //   messages,
  // };
});
