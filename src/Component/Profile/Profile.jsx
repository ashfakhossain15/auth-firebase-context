import { useContext } from "react";
import { AuthContext } from "../../../AuthProviders/AuthProviders";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return <div>{user && <span>{user.email}</span>}</div>;
};

export default Profile;
