import { memo } from "react";
import styles from './info-field.module.scss';

type TInfoFieldProps = {
  fieldKey: string;
  fieldValue?: string | number | undefined;
}

export const InfoField = memo<TInfoFieldProps>(({ fieldKey, fieldValue }) => {
  return (
    <div className={styles.field}>
      <div className={styles.key}>{fieldKey}</div>
      <div title={fieldValue?.toString()} className={styles.value}>{fieldValue ?? 'no data'}</div>
    </div>
  )
});
