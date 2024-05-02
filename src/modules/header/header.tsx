import { FormEvent, MouseEvent, memo, useCallback } from "react";
import { Input } from "@/components";
import { useDispatch } from "react-redux";
import { TDispatch } from "@/store";
import { changeSearchQuery } from "./header.actions";
import { requestUsers } from "../users-list";
import styles from './header.module.scss';

export const Header = memo(() => {
  const dispatch = useDispatch<TDispatch>();

  const handleChangeSearcheQuery = useCallback((e: FormEvent<HTMLInputElement>) => {
    dispatch(changeSearchQuery(e.currentTarget.value))
  }, []);

  const handleRefreshPage = useCallback((e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    dispatch(requestUsers());
  }, []);

  return (
    <div className={styles.header}>
      <Input onChange={handleChangeSearcheQuery} />
      <a className={styles.refresh} href="" onClick={handleRefreshPage}>Refresh Page</a>
    </div>
  );
});
