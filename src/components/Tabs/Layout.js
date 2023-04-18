import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Rewards</Link>
          </li>
          <li>
            <Link to="/Punishments">Punishments</Link>
          </li>
          <li>
            <Link to="/Habits">Habits</Link>
          </li>
          <li>
            <Link to="/Notes">Notes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
