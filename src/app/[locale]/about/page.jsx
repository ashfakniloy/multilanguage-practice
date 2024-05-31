import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({
    locale,
    namespace: "Pages.AboutPage.metadata",
  });

  return {
    title: t("title"),
  };
}

export default function AboutPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Pages.AboutPage");
  return <div>{t("title")}</div>;
}
