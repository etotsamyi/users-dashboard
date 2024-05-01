import { TUser } from "@/api/random-users";
import { TAppState } from "@/store";
import { TUsersState } from "@/store/reducers/main-page";
import { createSelector } from "@reduxjs/toolkit";

export const getMainPageState = (state: TAppState) => state.mainPage;

export const getUsersList = createSelector(
    getMainPageState,
    (mainPageState: TUsersState): TUser[] | undefined => mainPageState.users,
);

export const getSelectedUserId = createSelector(
    getMainPageState,
    (mainPageState: TUsersState): string | undefined => mainPageState.selectedUserId,
);
