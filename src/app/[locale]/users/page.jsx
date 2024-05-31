import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import UsersList from "./users-list";
import { getUsers } from "@/utils/get-users";

// export async function generateMetadata({ params: { locale } }) {
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     title: t("title"),
//   };
// }

export default async function UsersPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  const users = await getUsers();

  return <UsersList users={users} />;
}
