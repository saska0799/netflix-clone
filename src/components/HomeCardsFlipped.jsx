import React from "react";

const HomeCardsFlipped = ({ children }) => {
  return (
    <div className="home-card">
      <div className="container d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
        {children}
      </div>
    </div>
  );
};

export default HomeCardsFlipped;
