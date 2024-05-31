import { useTranslations } from "next-intl";

export default function UserDetails({ user }) {
  const t = useTranslations("SingleUserPage");

  return (
    <div>
      <p>{t("title")}</p>
      <div className="mt-5 max-w-3xl">
        <p className="">{user.name}</p>
        <p className="">{user.email}</p>
      </div>
    </div>
  );
}
