import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <div className="container-fluid d-flex justify-content-between">
        <Link
          to="/"
          className="heading-navbar text-decoration-none display-5 fw-bold"
        >
          NETFLIX
        </Link>

        <Link className="btn text-light btn-navbar" to="/login">
          Sing In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
