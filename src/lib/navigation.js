import { localePrefix, locales } from "@/config";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

// export const locales = ["en", "bn"];
// // export const localePrefix = "always"; // Default
// export const localePrefix = "as-needed";
// // export const localePrefix = "never";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
