import { TUser } from '@/api/random-users'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type TUsersState = {
  users?: TUser[];
  selectedUserId?: string;
  searchQuery?: string;
}

const initialState: TUsersState = {
  users: undefined,
  selectedUserId: undefined,
  searchQuery: undefined,
}

export const usersReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setUsersList: (state, action: PayloadAction<TUser[]>) => {
      state.users = action.payload
    },
    setSelectedUserId: (state, action: PayloadAction<string>) => {
      state.selectedUserId = action.payload
    },
    deleteUserById: (state, action: PayloadAction<string>) => {
      state.users = state.users?.filter((user: TUser) => user.login?.uuid !== action.payload)
    },
    setSearchQuery: (state, action: PayloadAction<string | undefined>) => {
      state.searchQuery = action.payload
    },
  },
});
