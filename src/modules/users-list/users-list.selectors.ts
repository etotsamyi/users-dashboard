import { TUser } from "@/api/random-users";
import { TAppState } from "@/store";
import { TUsersState } from "@/store/reducers/main-page";
import { createSelector } from "@reduxjs/toolkit";
import { matchUserWithSearchQuery } from "./users-list.utils";

export const getMainPageState = (state: TAppState) => state.mainPage;

export const getUsersList = createSelector(
  getMainPageState,
  (mainPageState: TUsersState): TUser[] | undefined => mainPageState.users,
);

export const getSelectedUserId = createSelector(
  getMainPageState,
  (mainPageState: TUsersState): string | undefined => mainPageState.selectedUserId,
);

export const getSearchQuery = createSelector(
  getMainPageState,
  (mainPageState: TUsersState): string | undefined => mainPageState.searchQuery,
);

export const getSearchResult = createSelector(
  getUsersList,
  getSearchQuery,
  (userList?: TUser[], searchQuery?: string): TUser[] | undefined => {
    if (!userList) {
      return;
    }

    if (!searchQuery) {
      return userList;
    }

    return userList.filter((user: TUser) => matchUserWithSearchQuery(user, searchQuery));
  }
);
