import { memo } from "react";
import styles from './divider.module.scss';

export const Divider = memo(() => {
  return <div className={styles.divider} />
});
