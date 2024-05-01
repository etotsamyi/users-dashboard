import { TAppState } from "@/store";
import { TUsersState } from "@/store/reducers/main-page";
import { createSelector } from "@reduxjs/toolkit";
import { TStatisticsValuesByAge, TStatisticsValuesByGender } from "./statistics-block.types";
import { usersStatisticsByAgeDefault, usersStatisticsByGenderDefault } from "./statistics-block.constants";
import { EUserGender, TUser } from "@/api/random-users";

export const getMainPageState = (state: TAppState) => state.mainPage;

export const getUsersCount = createSelector(
  getMainPageState,
  (mainPageState: TUsersState): number => mainPageState.users?.length || 0,
);

export const getUsersStatisticsByGender = createSelector(
  getMainPageState,
  (mainPageState: TUsersState): TStatisticsValuesByGender => mainPageState.users?.reduce((acc, user: TUser) => {
    const { gender } = user;

    if (gender === EUserGender.Male) {
      acc.maleUsers++;
    }

    if (gender === EUserGender.Female) {
      acc.femaleUsers++;
    }

    return acc;
  }, {...usersStatisticsByGenderDefault}) || usersStatisticsByGenderDefault,
)

export const getUsersStatisticsByAge = createSelector(
  getMainPageState,
  (mainPageState: TUsersState): TStatisticsValuesByAge => mainPageState.users?.reduce((acc, user: TUser) => {
    const { age } = user.dob!;

    if (!age) {
      return acc;
    }

    if (age >= 11 && age < 20) {
      acc.usersFrom11To20++
    }

    if (age >= 21 && age < 30) {
      acc.usersFrom21To30++
    }

    if (age >= 31 && age < 40) {
      acc.usersFrom31To40++
    }

    if (age >= 41 && age < 50) {
      acc.usersFrom41To50++
    }

    if (age >= 51) {
      acc.usersFrom51++
    }

    return acc;
  }, {...usersStatisticsByAgeDefault}) || usersStatisticsByAgeDefault,
);
