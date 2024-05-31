import { API_URL } from "@/config";

export async function getSingleUser(userId) {
  const res = await fetch(`${API_URL}/users/${userId}`);
  const data = await res.json();

  return data;
}
