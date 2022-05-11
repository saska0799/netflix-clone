import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Subscribe = () => {
  return (
    <div className="container-subscribe container text-container text-center text-light">
      <p className="fs-5 pt-3">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="subscribe-elements container d-flex">
        <input
          type="text"
          className=" subscribe-input w-100 p-2 p-sm-3"
          placeholder="Email address"
        />
        <button className="get-started-btn text-light py-3 px-2 my-3 my-sm-0 text-center">
          Get Started
          <RiArrowRightSLine />
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
