import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import UserDetails from "./user-details";
import { getSingleUser } from "@/utils/get-single-user";
import { getUsers } from "@/utils/get-users";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({
    locale,
    namespace: "Pages.SingleUserPage.metadata",
  });

  return {
    title: t("title"),
  };
}

export async function generateStaticParams() {
  const users = await getUsers();

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}

export default async function SingleUserPage({ params: { userId, locale } }) {
  unstable_setRequestLocale(locale);

  const user = await getSingleUser(userId);

  if (!user) {
    notFound();
  }

  return (
    <>
      <UserDetails user={user} />
    </>
  );
}
