import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Subscribe = () => {
  return (
    <div className="container text-container text-center text-light">
      <p className="fs-5 pt-3">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="container d-flex flex-row">
        <input type="text" className="w-100" placeholder="Email address" />
        <button className="get-started-btn fs-2 text-light py-2 px-2 text-center">
          Get Started
          <RiArrowRightSLine />
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
