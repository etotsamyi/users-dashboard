import { TUser, TName, TDob, TLocation } from "@/api/random-users";

export const matchUserWithSearchQuery = (user: TUser, query: string): boolean => {
  const { first, last } = user.name as TName;
  const { email, phone } = user;
  const { date } = user.dob as TDob;
  const { city, country, state } = user.location as TLocation;

  return (
    first?.startsWith(query) ||
    last?.startsWith(query) ||
    email?.startsWith(query) ||
    phone?.startsWith(query) ||
    date?.startsWith(query) ||
    city?.startsWith(query) ||
    country?.startsWith(query) ||
    state?.startsWith(query) || false
  );
};
