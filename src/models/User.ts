export type User = {
  id: number;
  auth_token: string;
  username: string;
  email: string;
  name: string;
  surname: string;
  is_staff: boolean;
};

export const normalizeUser = (user: any, token: string | null): User => {
  return {
    id: user?.id || 0,
    auth_token: token ?? "",
    username: user?.username || "",
    email: user?.email || "",
    name: user?.name || "",
    surname: user?.surname || "",
    is_staff: user?.is_staff || false,
  };
};
