"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, Link } from "@/lib/navigation";

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
  const localeActive = useLocale();

  // const [locale, setLocale] = useState("");

  // useEffect(() => {
  //   setLocale(localeActive);
  // }, [localeActive]);

  console.log("pathname", pathname);

  const t = useTranslations("Header");

  const handleLocaleChange = (e) => {
    const localeValue = e.target.value;
    // router.replace(`/${localeValue}`);
    router.replace(pathname, { locale: localeValue });
    // router.refresh();
  };

  return (
    <div className="py-5 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center text-sm border-b border-stone-700">
      <div className="space-x-10">
        {routes.map((route, i) => (
          <Link key={route.name} href={route.link}>
            {t(route.name)}
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
          defaultValue={localeActive}
          className="bg-stone-700"
          onChange={handleLocaleChange}
        >
          <option value="en">English</option>
          <option value="bn">Bangla</option>
        </select>
      </div>
    </div>
  );
}
