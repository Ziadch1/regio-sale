import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/4">Dakhla</Link>
          </li>
          <li>
            <Link to="/1">rabat</Link>
          </li>
          <li>
            <Link to="/3">marakech</Link>
          </li>
          <li>
            <Link to="/2">tanger</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;
