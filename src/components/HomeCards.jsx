import React from "react";

const HomeCards = ({ children }) => {
  return (
    <div className="home-card">
      <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center">
        {children}
      </div>
    </div>
  );
};

export default HomeCards;
