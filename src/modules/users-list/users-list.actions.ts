import { TRandomUsersResponse, randomUserApi } from "@/api/random-users";
import { TDispatch } from "@/store";
import { usersReducer } from '@/store/reducers/main-page'

const { setUsersList, setSelectedUserId, deleteUserById } = usersReducer.actions

export const requestUsers = (amount: number = 500) => async (
  dispatch: TDispatch,
): Promise<void> => {
  try {
    const response: TRandomUsersResponse | undefined = await randomUserApi(amount);

    if (response?.results) {
      dispatch(selectUser(undefined));
      dispatch(setUsersList(response.results));
    }
  } catch (e) {
    console.log('an error occurred while fetching userlist')
  }
};

export const selectUser = (userId?: string) => (
  dispatch: TDispatch,
): void => {
  dispatch(setSelectedUserId(userId))
};

export const deleteUser = (userId: string) => (
  dispatch: TDispatch,
): void => {
  dispatch(deleteUserById(userId))
};
