import { NavLink } from 'react-router-dom';

function Page404() {
  return (
    <div>
      <div>404 Not Found</div>
      <NavLink to="/">Return to Main</NavLink>
    </div>
  );
}

export default Page404;
