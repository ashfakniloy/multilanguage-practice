import { useTranslations } from "next-intl";
// import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({
    locale,
    namespace: "Pages.NotFoundPage.metadata",
  });

  return {
    title: t("title"),
  };
}

export default function CatchAllPages() {
  const t = useTranslations("Pages.NotFoundPage");
  return <div>{t("title")}</div>;
}

// export default function CatchAllPages({ params: { locale } }) {
//   unstable_setRequestLocale(locale);

//   const t = useTranslations("Pages.NotFoundPage");
//   return <div>{t("title")}</div>;
// }
