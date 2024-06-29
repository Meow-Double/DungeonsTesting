import { ComponentProps } from 'react';
import styles from './StatusLine.module.css';

interface StatusLineProps extends ComponentProps<'span'> {
  progress?: number;
}
export const StatusLine = ({ className, progress }: StatusLineProps) => {
  return (
    <div className={`${styles.line} ${className}`}>
      <span className={styles.active} style={{ width: `${progress}%` }} />
    </div>
  );
};
