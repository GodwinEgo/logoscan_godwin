import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const UserAdmin = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/scanlogo");
  };

  const handleAdminClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div
              style={{ width: "100%", height: "70vh" }}
              className="d-flex flex-column justify-content-center"
            >
              <button
                className="btn btn-danger w-100 "
                onClick={handleUserClick}
              >
                User
              </button>
              <button
                className="btn btn-danger w-100"
                onClick={handleAdminClick}
              >
                Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAdmin;
