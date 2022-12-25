import styles from './style.module.css';

type Props = {
  text: string;
};

const Footer = ({ text }: Props) => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.text}>{text}</h3>
    </footer>
  );
};

export default Footer;
