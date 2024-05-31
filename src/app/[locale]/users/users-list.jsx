import { Link } from "@/lib/navigation";
import { useTranslations } from "next-intl";

export default function UsersList({ users }) {
  const t = useTranslations("UsersPage");

  // console.log("users from server", users);

  return (
    <div>
      <p>{t("title")}</p>

      <div className="mt-10 flex flex-wrap gap-5">
        {users.map((user, i) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="inline-block p-5 rounded-lg bg-stone-800 border border-solid border-stone-800 hover:border-stone-700 transition-colors"
          >
            <p className="font-medium">{user.name}</p>
            <p className="mt-1 text-sm font-medium text-gray-300">
              {user.email}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
