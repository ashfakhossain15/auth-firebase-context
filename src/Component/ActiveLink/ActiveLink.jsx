import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "active  hover:bg-blue-900 transition duration-150 text-yellow-400 normal-case text-lg rounded-md btn btn-ghost"
            : "bg-blue-700 px-5 py-3 rounded-md hover:bg-blue-800"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
