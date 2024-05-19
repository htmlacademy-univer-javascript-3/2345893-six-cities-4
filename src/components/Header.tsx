import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector.tsx';
import { useAppDispatch } from '../hooks/useAppDispatch.ts';
import { logoutAction } from '../store/apiActions.ts';
import { getAuthorizationStatus } from '../store/userProcess/selectors.ts';
import { AuthorizationStatus } from '../const.ts';

function Header() {
  const isLoggedIn = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <NavLink to='/' className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </NavLink>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isLoggedIn ?
                <>
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <button className="header__nav-link" onClick={logout}
                      style={{ backgroundColor: 'unset', border: 'unset', cursor: 'pointer' }}
                    >
                      <span className="header__signout">Sign out</span>
                    </button>
                  </li>
                </>
                :
                <li className="header__nav-item user">
                  <Link to={'/login'} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
