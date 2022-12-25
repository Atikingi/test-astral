import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/selectors/auth';
import styles from './style.module.css';

type Props = {
  name: string;
};

const Header = ({ name }: Props) => {
  const isAuth = useSelector(getAuthStatus);

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
              {isAuth ? 'SignOut' : 'SignIn'}
            </NavLink>
          </li>
          {isAuth && (
            <li className={styles.menuItem}>
              {' '}
              <NavLink
                to="/cards"
                className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              >
                Cards
              </NavLink>
            </li>
          )}
          {isAuth && (
            <li className={styles.menuItem}>
              {' '}
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              >
                {name}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
