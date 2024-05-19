import Main from './pages/Main';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Page404 from './pages/404';
import Offer from './pages/Offer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.tsx';
import Layout from './pages/Layout.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from './hooks/useAppSelector.tsx';
import { getAuthorizationStatus } from './store/userProcess/selectors.ts';

function App() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/offer">
            <Route path=":id" element={<Offer/>}/>
          </Route>
          <Route path="/favorites" element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites/>
            </PrivateRoute>
          }
          />
          <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </HelmetProvider>);
}

export default App;
