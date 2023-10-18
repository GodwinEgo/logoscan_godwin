import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.jsx";

const Login = () => {
  const url = import.meta.env.VITE_BACKEND_API_URL;
  const formInput = { username: "", password: "" };
  const navigate = useNavigate();
  const [user, setUser] = useState(formInput);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username", user.username);
    formData.append("password", user.password);
    let res = await fetch(`${url}upload-logo/admin/login/`, {
      method: "POST",
      body: formData,
    });
    let data = await res.json();
    if (data.authenticated) {
      navigate("/admin_upload");
    } else {
      setUser(formInput);
      setError("Invalid credentials!! Please use the correct ones");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{ height: "70vh" }}
        className="container-fluid d-flex flex-column justify-content-center  form-container"
      >
        {error && <p className="mt-3 text-warning">{error}</p>}
        <form action="" style={{ width: "80%" }}>
          <div className="pt-4 col-12">
            <h4 className="text-danger text-center ">Login</h4>
          </div>
          <div className="py-3 col-12">
            <input
              style={{ width: "100%" }}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="form-control"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="py-3 col-12">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="py-3 col-12">
            <input
              type="submit"
              value="Login"
              className="btn form-control btn-danger"
              onClick={(e) => handleSubmit(e)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
