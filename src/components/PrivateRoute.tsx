import { Navigate } from 'react-router-dom';
import { useAppSelector } from "../hooks/useAppSelector.tsx";

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const hasAccess = useAppSelector((state) => state.authorizationStatus);

  return hasAccess ? children : <Navigate to='/login'/>;
}

export default PrivateRoute;
