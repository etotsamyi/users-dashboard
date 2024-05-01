import { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestUsers, selectUser } from "./users-list.actions";
import { TDispatch } from "@/store";
import { getSelectedUserId, getUsersList } from "./users-list.selectors";
import { TUser } from "@/api/random-users";
import { UserCard } from "@/components";
import styles from './users-list.module.scss';

export const UsersList = memo(() => {
  const dispatch = useDispatch<TDispatch>();

  const userslist = useSelector(getUsersList);
  const selectedUserId = useSelector(getSelectedUserId);

  useEffect(() => {
    dispatch(requestUsers(20));
  }, []);

  const handleSelectUser = useCallback((userId?: string): void => {
    if (userId) {
      dispatch(selectUser(userId));
    }
  }, []);

  return (
    <div className={styles['user-list-wrapper']}>
      <div className={styles['user-list']}>
        {userslist?.map((user: TUser) => (
          <UserCard
            key={user.login?.uuid}
            user={user}
            isSelected={selectedUserId === user.login?.uuid}
            handleSelectUser={handleSelectUser}
          />
        ))}
      </div>
    </div>
  );
});
