import { UsersList } from '@/modules/users-list';
import { StatisticsBlock } from '@/modules/statistics-block';
import styles from './main-page.module.scss';
import { Header } from '@/modules/header';

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className={styles.body}>
        <UsersList />
        <StatisticsBlock />
      </div>
    </>
  )
};
