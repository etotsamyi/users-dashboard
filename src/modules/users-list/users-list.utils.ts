import { TUser, TName, TDob, TLocation } from "@/api/random-users";

export const matchUserWithSearchQuery = (user: TUser, query: string): boolean => {
  const { first, last } = user.name as TName;
  const { email, phone } = user;
  const { date } = user.dob as TDob;
  const { city, country, state } = user.location as TLocation;

  return (
    first?.toLocaleLowerCase().startsWith(query) ||
    last?.toLocaleLowerCase().startsWith(query) ||
    email?.toLocaleLowerCase().startsWith(query) ||
    phone?.toLocaleLowerCase().startsWith(query) ||
    date?.toLocaleLowerCase().startsWith(query) ||
    city?.toLocaleLowerCase().startsWith(query) ||
    country?.toLocaleLowerCase().startsWith(query) ||
    state?.toLocaleLowerCase().startsWith(query) || false
  );
};
