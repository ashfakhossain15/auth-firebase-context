import { Link } from "react-router-dom";
import ActiveLink from "./../ActiveLink/ActiveLink";
const Header = () => {
  return (
    <div className="flex  justify-center">
      <div className="navbar bg-primary text-primary-content space-x-6">
        <Link
          className="btn btn-ghost normal-case text-xl  px-4 py-2 transition duration-300  hover:bg-slate-600"
          href="/"
        >
          Auth Master
        </Link>
        <div className="space-x-6">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/login">Login</ActiveLink>
          <ActiveLink to="/register">Register</ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
