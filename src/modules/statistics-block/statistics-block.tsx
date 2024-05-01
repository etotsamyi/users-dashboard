import { memo } from "react";
import styles from './statistics-block.module.scss';
import { useSelector } from "react-redux";
import { getUsersCount, getUsersStatisticsByAge, getUsersStatisticsByGender } from "./statistics-block.selectors";
import { Divider, InfoField } from "@/components";
import {
  usersFrom11To20FieldName,
  usersFrom21To30FieldName,
  usersFrom31To40FieldName,
  usersFrom41To50FieldName,
  usersFrom51FieldName,
  maleUsersFieldName,
  femaleUsersFieldName,
} from "./statistics-block.constants";

export const StatisticsBlock = memo(() => {
  const usersCount = useSelector(getUsersCount);
  const userStatisticsByAge = useSelector(getUsersStatisticsByAge);
  const userStatisticsByGender = useSelector(getUsersStatisticsByGender);

  const {
    usersFrom11To20,
    usersFrom21To30,
    usersFrom31To40,
    usersFrom41To50,
    usersFrom51,
  } = userStatisticsByAge;
  const {
    maleUsers,
    femaleUsers,
  } = userStatisticsByGender;

  return (
    <div className={styles.statistics}>
      <div className={styles['users-count']}>{usersCount} Users</div>
      <Divider />
      <div className={styles['statistics-group']}>Age Groups</div>
      <InfoField fieldKey={usersFrom11To20FieldName} fieldValue={usersFrom11To20} />
      <InfoField fieldKey={usersFrom21To30FieldName} fieldValue={usersFrom21To30} />
      <InfoField fieldKey={usersFrom31To40FieldName} fieldValue={usersFrom31To40} />
      <InfoField fieldKey={usersFrom41To50FieldName} fieldValue={usersFrom41To50} />
      <InfoField fieldKey={usersFrom51FieldName} fieldValue={usersFrom51} />
      <Divider />
      <div className={styles['statistics-group']}>Gender Groups</div>
      <InfoField fieldKey={maleUsersFieldName} fieldValue={maleUsers} />
      <InfoField fieldKey={femaleUsersFieldName} fieldValue={femaleUsers} />
    </div>
  )
});
