import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

// export async function generateMetadata({ params: { locale } }) {
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     title: t("title"),
//   };
// }

export default function HomePage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");
  return <h1>{t("title")}</h1>;
}
