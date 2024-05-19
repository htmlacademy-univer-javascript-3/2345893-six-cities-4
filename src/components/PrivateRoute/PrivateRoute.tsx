import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const.ts';
import Loader from '../Loader.tsx';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: AuthorizationStatus;
};

function PrivateRoute({ children, authorizationStatus }: PrivateRouteProps): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader/>;
  }

  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to='/login'/>;
}

export default PrivateRoute;
