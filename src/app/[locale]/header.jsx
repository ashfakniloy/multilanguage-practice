"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/lib/navigation";
import { languages } from "@/config";

const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Users",
    link: "/users",
  },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // console.log("locale", locale);

  const t = useTranslations("Header");

  const handleLocaleChange = (e) => {
    const localeValue = e.target.value;
    router.replace(pathname, { locale: localeValue });
    // router.refresh();
  };

  return (
    <div className="py-5 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center text-sm border-b border-stone-700">
      <div className="space-x-10">
        {routes.map((route, i) => (
          <Link key={route.name} href={route.link}>
            {t(`menu.${route.name}`)}
          </Link>
        ))}
      </div>

      <div className="">
        <label htmlFor="language" className="mr-3">
          {t("label")}:
        </label>

        <select
          name="language"
          id="language"
          defaultValue={locale}
          className="bg-stone-700"
          onChange={handleLocaleChange}
        >
          {languages.map((language) => (
            <option key={language.name} value={language.locale}>
              {language.display_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
