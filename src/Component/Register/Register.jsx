import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProviders/AuthProviders";
import { toast } from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Name:", name);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        e.target.reset();
        toast.success("User Created Success");

        setSuccess("User created successfully");
      })
      .catch((error) => {
        console.log(error.message);
        setSuccess("");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <form
        className="bg-stone-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-3xl mt-8 w-full "
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border  w-full py-5 px-3 text-white leading-tight focus:outline-none focus:shadow-outline rounded-xl"
            id="name"
            type="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded-xl w-full py-5 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded-xl w-full py-5 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="text-right text-black">
            <Link to="/login">
              Already have an account ? Please{" "}
              <span className="text-blue-500 underline">Login</span>{" "}
            </Link>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-500 font-bold">
            <input
              className="mr-1 leading-tight"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="text-sm">I agree to the terms and conditions</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!isChecked}
          >
            Register
          </button>
        </div>
        {success && success}
      </form>
    </div>
  );
};

export default Register;
