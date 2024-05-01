import { baseUrl } from '@/constants';
import { requestApi } from '../request-api';
import { ERequestMethod } from '../request-api.enums';
import { TRandomUsersResponse } from './random-users-api.types';

export const randomUserApi = async (amount: number): Promise<TRandomUsersResponse | undefined> => {
  return await requestApi<TRandomUsersResponse>(`${baseUrl}?results=${amount}`, ERequestMethod.Get);
};
