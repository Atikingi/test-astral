import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts';
import SignIn from '../components/SignIn';
import ProtectedRoute from './protectedRoute';
import CardsListPage from '../pages/CardsListPage';
import StartPage from '../pages/StartPage';
import ProfilePage from '../pages/ProfilePage';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../store/selectors/auth';

const AppRoutes = () => {
  const isAuth = useSelector(getAuthStatus);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<SignIn isAuth={isAuth} />} />
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cards" element={<CardsListPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
