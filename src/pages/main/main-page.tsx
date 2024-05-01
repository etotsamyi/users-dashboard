import { UsersList } from '@/modules/users-list';
import { StatisticsBlock } from '@/modules/statistics-block';
import styles from './main-page.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.body}>
      <UsersList />
      <StatisticsBlock />
    </div>
  )
};
