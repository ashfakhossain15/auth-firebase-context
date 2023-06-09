import { useContext } from "react";
import { AuthContext } from "./../../../AuthProviders/AuthProviders";


const Home = () => {
  const user = useContext(AuthContext);
  

  return (
    <div>
      <h1>This is home Page {user && <span>{user.displayName}</span>}</h1>
    </div>
  );
};

export default Home;
