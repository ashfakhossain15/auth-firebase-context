import { Link } from "react-router-dom";
import ActiveLink from "./../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="flex  justify-center w-full">
      <div className="navbar bg-primary text-primary-content space-x-6  flex  justify-between">
        <div className="space-x-6">
          <Link
            className="btn btn-ghost normal-case text-xl  px-4 py-2 transition duration-300  hover:bg-slate-600"
            href="/"
          >
            Auth Master
          </Link>
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/login">Login</ActiveLink>
          <ActiveLink to="/register">Register</ActiveLink>
          <ActiveLink to="/profile">Profile</ActiveLink>
        </div>
        <div className=" pr-14">
          {user ? (
            <div  className=" flex space-x-6 items-center">
              <span>{user.email}</span>{" "}
              <button className="btn " onClick={handleLogOut}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                SignOut
              </button>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
