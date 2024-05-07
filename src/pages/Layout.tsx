import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';

function Layout() {
  return (
    <>
      <Header isLoggedIn={false}/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Layout;
