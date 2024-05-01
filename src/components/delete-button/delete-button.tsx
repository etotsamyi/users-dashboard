import { MouseEventHandler, memo } from "react";
import cn from 'classnames';
import styles from './delete-button.module.scss';
import { DeleteIcon } from "../icons";

type TDeleteButtonProps = {
  className?: string;
  handleDeleteButton: MouseEventHandler<HTMLButtonElement>
};

export const DeleteButton = memo<TDeleteButtonProps>(({ className, handleDeleteButton }) => {
  return (
    <button
      className={cn(styles.button, className)}
      onClick={handleDeleteButton}
    >
      <DeleteIcon />
    </button>
  )
});
