import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonVariant = 'primary';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  variant: ButtonVariant;
}

export const Button = ({ children, variant, className }: ButtonProps) => {
  return <button className={clsx(styles.btn, styles[variant], className)}>{children}</button>;
};
