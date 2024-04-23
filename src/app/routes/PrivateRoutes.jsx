import { Navigate, Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({loggedIn}) => {
  return loggedIn ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoutes;
