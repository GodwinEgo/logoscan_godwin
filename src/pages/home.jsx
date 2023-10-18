import Navbar from "../components/navbar";
import uxlive from "../assets/ux-live.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <div
        className="container-fluid bg-danger w-100 "
        style={{ height: "92.5vh" }}
      >
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <Link to="login">
            <img
              src={uxlive}
              alt="ux-live"
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
