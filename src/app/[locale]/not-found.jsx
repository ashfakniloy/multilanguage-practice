import { useTranslations } from "next-intl";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({
    locale,
    namespace: "Pages.NotFoundPage.metadata",
  });

  return {
    title: t("title"),
  };
}

export default function NotFoundPage() {
  const t = useTranslations("Pages.NotFoundPage");
  return <div>{t("title")}</div>;
}
