import { FormEvent, memo, useCallback } from "react";
import styles from './header.module.scss';
import { Input } from "@/components";
import { useDispatch } from "react-redux";
import { TDispatch } from "@/store";
import { changeSearchQuery } from "./header.actions";

export const Header = memo(() => {
  const dispatch = useDispatch<TDispatch>();

  const handleChangeSearcheQuery = useCallback((e: FormEvent<HTMLInputElement>) => {
    dispatch(changeSearchQuery(e.currentTarget.value))
  }, []);

  return (
    <div className={styles.header}>
      <Input onChange={handleChangeSearcheQuery} />
    </div>
  );
});
