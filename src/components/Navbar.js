import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav" id="nav">
      <Link to="/" className="site-title">
        João Pedro Correia
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
        <CustomLink to="/education">Education</CustomLink>
      </ul>
    </nav>
  );

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}
