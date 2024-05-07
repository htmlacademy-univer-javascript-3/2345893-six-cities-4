import { NavLink } from 'react-router-dom';

function Page404() {
  return (
    <div className="page404" style={{textAlign: 'center'}}>
      <h1>404 Not Found</h1>
      <NavLink to="/">Return to Main</NavLink>
    </div>
  );
}

export default Page404;
