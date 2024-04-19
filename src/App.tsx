import Main from './pages/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Page404 from './pages/404';
import Offer from './pages/Offer';
import PrivateRoute from './components/PrivateRoute.tsx';
import Layout from "./pages/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/offer">
            <Route path=":id" element={<Offer/>}/>
          </Route>
          <Route path="/favorites" element={
            <PrivateRoute>
              <Favorites/>
            </PrivateRoute>
          }
          />
          <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
