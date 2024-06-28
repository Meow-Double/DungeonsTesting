import SearchSbg from '@/assets/img/Search.svg';
import styles from './Search.module.css';
import clsx from 'clsx';
import { useRef } from 'react';

type SearchProps = React.ComponentProps<'input'>;

export const Search = ({ className, ...props }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={clsx(styles.search, className)}>
      <input className={styles.input} type='text' ref={inputRef} {...props} />
      <img
        className={styles.img}
        src={SearchSbg}
        alt='search'
        onClick={() => inputRef.current?.focus()}
      />
    </div>
  );
};
