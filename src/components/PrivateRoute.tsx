import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector.tsx';
import { AuthorizationStatus } from '../const.ts';
import Loader from './Loader.tsx';
import { getAuthorizationStatus } from "../store/userProcess/selectors.ts";

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Loader/>;
  }

  return authStatus === AuthorizationStatus.Auth ? children : <Navigate to='/login'/>;
}

export default PrivateRoute;
