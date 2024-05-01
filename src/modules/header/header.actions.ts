import { TDispatch } from "@/store";
import { usersReducer } from '@/store/reducers/main-page'

const { setSearchQuery } = usersReducer.actions

export const changeSearchQuery = (query: string) => (
  dispatch: TDispatch,
): void => {
  dispatch(setSearchQuery(query))
};
