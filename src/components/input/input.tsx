import { FormEvent, memo } from "react";
import styles from './input.module.scss';

type TInputProps = {
  onChange: (e: FormEvent<HTMLInputElement>) => void
}

export const Input = memo<TInputProps>(({ onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search"
      onChange={onChange}
    />
  )
});
