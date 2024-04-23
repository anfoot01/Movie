import { Navigate, Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const GuestRoutes = ({loggedIn}) => {
  return loggedIn ? <Navigate to='/' replace /> : <Outlet />;
};
export default GuestRoutes;
