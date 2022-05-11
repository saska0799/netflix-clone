import React from "react";
import Navbar from "../components/Navbar";
import HomeCards from "../components/HomeCards";
import HomeCardsFlipped from "../components/HomeCardsFlipped";
import { RiDownloadLine } from "react-icons/ri";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="header-container d-flex justify-content-center align-items-center">
        <div className="container text-container text-center text-light">
          <h1 className="display-2 fw-bold pb-3">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <Subscribe />
        </div>
      </div>
      <HomeCards>
        <div className="container">
          <h1 className="display-3 fw-bold pb-3 text-light">
            Enjoy on your TV.
          </h1>
          <p className="fs-3 text-light">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <img
            alt=""
            className="card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
          <div className="card-video-container position-absolute">
            <video autoPlay playsInline muted loop className="card-video">
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </HomeCards>
      <HomeCardsFlipped>
        <div className="container position-relative d-flex justify-content-center my-sm-0">
          <img
            alt=""
            className="download-img w-100"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          />
          <div className="download-container py-2 container d-flex justify-content-between align-items-center border">
            <div className="d-flex align-items-center">
              <img
                alt=""
                className="download-img-2 me-3"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              />
              <div className="">
                <div id="" className="text-light fw-bold" data-uia="">
                  Stranger Things
                </div>
                <div id="" className="text-primary" data-uia="">
                  Downloading...
                </div>
              </div>
            </div>
            <RiDownloadLine fill="#fff" className="me-3" />
          </div>
        </div>

        <div className="container">
          <h1 className="display-3 fw-bold pb-3 text-light">
            Download your shows to watch offline.
          </h1>
          <p className="fs-3 text-light">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </HomeCardsFlipped>
      <HomeCards>
        <div className="container">
          <h1 className="display-3 fw-bold pb-3 text-light">
            Watch everywhere.
          </h1>
          <p className="fs-3 text-light">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>

        <div className="container d-flex justify-content-center align-items-">
          <img
            alt=""
            className="card-img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            data-uia="our-story-card-img"
          />
          <div className="card-video-container position-absolute">
            <video className="card-video-2" autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </HomeCards>
      <HomeCardsFlipped>
        <img
          alt=""
          className="kids-img w-100"
          src="https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABRUVwm0Th8tURZtHa8QAQoQEK0s2kalECfHtYtFGZ-uckUjl7aHUOilKZVP5joQrLec41raWv_MP0jNW5JYQhcBEfVUlcQqRHcmR.png?r=fcd"
          data-uia="our-story-card-img"
        />

        <div className="container">
          <h1 className="display-3 fw-bold pb-3 text-light">
            Create profiles for kids.
          </h1>
          <p className="fs-3 text-light">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </HomeCardsFlipped>
      <HomeCards>
        <div className=" d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-3 fw-bold pb-5 text-light text-center">
            Frequently Asked Questions
          </h1>
          <div className="accordion pb-5" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What is Netflix?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                  <br /> You can watch as much as you want, whenever you want
                  without a single commercial – all for one low monthly price.
                  There's always something new to discover and new TV shows and
                  movies are added every week!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How much does Netflix cost?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from EUR7.99 to EUR11.99 a month. No extra costs, no
                  contracts.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Where can I watch?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. You can also
                  download your favorite shows with the iOS, Android, or Windows
                  10 app. Use downloads to watch while you're on the go and
                  without an internet connection. Take Netflix with you
                  anywhere.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  How do I cancel?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  What can I watch on Netflix?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Is Netflix good for kids?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space. Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </div>
              </div>
            </div>
          </div>
          <Subscribe />
        </div>
      </HomeCards>
      <Footer />
    </>
  );
};

export default Home;
