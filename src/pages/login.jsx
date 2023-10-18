import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Moved this outside of handleLoginClick

  const handleLoginClick = () => {
    navigate("/admin_upload"); // Use navigate directly here
  };

  const onSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    handleLoginClick(); // Redirect to "/admin_upload"
  };

  return (
    <div className="container-fluid w-100 m-0 p-0">
      <Navbar />
      <form
        action=""
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ width: "80%", height: "70vh", marginLeft: "10%" }}
        onSubmit={onSubmit}
      >
        <div className="pt-4 col-12">
          <h4>Login</h4>
        </div>
        <div className="py-3 col-12">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="form-control"
          />
        </div>
        <div className="py-3 col-12">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <div className="py-3 col-12">
          <input
            type="submit"
            value="Login"
            className="btn btn-danger form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
