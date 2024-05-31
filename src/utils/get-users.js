import { API_URL } from "@/config";

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  const data = await res.json();

  return data;
}
