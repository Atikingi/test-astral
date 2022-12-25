import { ReactNode } from 'react';
import styles from './style.module.css';

type Props = {
  children: ReactNode;
};

const Body = ({ children }: Props) => {
  return <main className={styles.container}>{children}</main>;
};

export default Body;
