import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivatRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex flex-col">
        <progress
          className="progress progress-error w-56"
          value={0}
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true} />;
};

export default PrivatRoute;
