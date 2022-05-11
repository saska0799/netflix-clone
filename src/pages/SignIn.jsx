import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="form-container container-fluid d-flex justify-content-center align-items-center text-secondary ">
        <form className=" p-5">
          <label className="mb-3 fs-2 fw-bold text-light">Sign In</label>
          <div class="mb-3">
            <input
              type="email"
              class="form-input p-2"
              placeholder="Email or phone number"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-input p-2"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <button type="submit" class="btn text-light btn-navbar w-100">
              Sign In
            </button>
          </div>
          <div class="mb-5 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>

          <h6>
            New to Netflix?{" "}
            <Link to="/" className="text-light text-decoration-none">
              Sign up now
            </Link>
          </h6>
          <p className="fs-6">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="text-primary">Learn more.</span>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
