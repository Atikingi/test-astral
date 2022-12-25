import { ReactNode } from 'react';
import styles from './style.module.css';

type Props = {
  children: ReactNode;
};

const Page = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Page;
