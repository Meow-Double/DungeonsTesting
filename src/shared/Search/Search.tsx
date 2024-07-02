import SearchSbg from '@/assets/img/Search.svg';
import styles from './Search.module.css';
import clsx from 'clsx';
import { ChangeEvent, useRef } from 'react';

interface SearchProps extends React.ComponentProps<'input'> {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ className, value, onChange, ...props }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={clsx(styles.search, className)}>
      <input
        value={value}
        className={styles.input}
        type='text'
        ref={inputRef}
        {...props}
        onChange={(e) => onChange(e)}
      />
      <img
        className={styles.img}
        src={SearchSbg}
        alt='search'
        onClick={() => inputRef.current?.focus()}
      />
    </div>
  );
};
