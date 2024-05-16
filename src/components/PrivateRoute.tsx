import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector.tsx';
import { AuthorizationStatus } from '../const.ts';
import Loader from './Loader.tsx';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const hasAccess = useAppSelector((state) => state.authorizationStatus);

  if (hasAccess === AuthorizationStatus.Unknown) {
    return <Loader/>;
  }

  return hasAccess === AuthorizationStatus.Auth ? children : <Navigate to='/login'/>;
}

export default PrivateRoute;
