import { TUser } from "@/api/random-users";
import { memo, useCallback } from "react";
import { InfoField } from "../info-field";
import { phoneNumberFieldName, birthdayFieldName, addressFieldName } from "./user-card.constants";
import { formatDate } from "./user-card.utils";
import cn from 'classnames';
import styles from './user-card.module.scss';
import { DeleteButton } from "../delete-button";
import { useDispatch } from "react-redux";
import { TDispatch } from "@/store";
import { deleteUser } from "@/modules/users-list";


type TUserCardProps = {
  user: TUser;
  isSelected: boolean;
  handleSelectUser: (userId?: string) => void;
}

export const UserCard = memo<TUserCardProps>(({ user, isSelected, handleSelectUser }) => {
  const dispatch = useDispatch<TDispatch>();

  const userId = user.login?.uuid
  const userName = `${user.name?.first} ${user.name?.last}`;
  const userPictureUrl = user.picture?.thumbnail;
  const userEmail = user.email;
  const userPhone = user.phone;
  const userBirthday = user.dob?.date ? formatDate(new Date(user.dob.date)) : undefined;
  const userAddress = `${user.location?.city}, ${user.location?.state}, ${user.location?.country}`;

  const handleDeleteButton = useCallback(() => {
    if (userId) {
      dispatch(deleteUser(userId))
    }
  }, [userId]);

  return (
    <div 
      className={cn(styles['user-card'], { [styles['selected']]: isSelected })}
      onClick={() => handleSelectUser(userId)}
    >
      <div className={styles.header}>
        {isSelected && <DeleteButton className={styles['delete-button']} handleDeleteButton={handleDeleteButton} />}
        <img className={styles.thumbnail} src={userPictureUrl} alt="" />
        <div className={styles['name-email-box']}>
          <div className={cn(styles.name, { [styles['name-selected']]: isSelected })}>{userName}</div>
          <div className={styles.email} title={userEmail}>{userEmail}</div>
        </div>
      </div>
      <div>
        <InfoField fieldKey={phoneNumberFieldName} fieldValue={userPhone} />
        <InfoField fieldKey={birthdayFieldName} fieldValue={userBirthday} />
        <InfoField fieldKey={addressFieldName} fieldValue={userAddress} />
      </div>
    </div>
  );
});
