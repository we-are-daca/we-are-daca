import React from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Pie } from "react-chartjs-2";
import "./App.css";
import "./about.css";
import "./statistics.css";

import ScrollLock from "react-scrolllock";
import MdClose from "react-icons/lib/md/close";
import MdMenu from "react-icons/lib/md/menu";
import Arrow from "react-icons/lib/fa/angle-down";
import Sticky from "react-stickynode";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import Twitter from "./img/twitter.svg";
import Billboard from "./img/billboard.jpg";
import { NavLink } from "react-router-dom";
import Card from "./Card";

class HowToHelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isMenuOpen: false,
      menuStyle: {
        height: "100%",
        left: 0,
        width: 0,
        top: 0,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        zIndex: 1,
        position: "fixed"
      },
      menuContent: {
        display: "none",
        position: "relative",
        top: "10%" /* 25% from the top */,
        width: "100%" /* 100% width */,
        textAlign: "center" /* Centered text/links */,
        marginTop:
          "30px" /* 30px top margin to avoid conflict with the close button on smaller screens */,
        zIndex: 2
      },
      portraitStyle: {
        backgroundImage:
          "url(https://dwistynbcri9g.cloudfront.net/statistics_cover.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "none",
        height: "450px",
        width: "90%",
        margin: "0 auto",
        position: "relative",
        filter: "brightness(40%) contrast(70%)"
      }
    };

    this.mobileNavStyle = {
      display: "flex",
      justifyContent: "left",
      alignItems: "left",
      marginTop: 0
    };

    setTimeout(() => {
      this.setState({ show: true });
    }, 1);
  }

  imageLoaded = () => {
    setTimeout(() => {
      this.setState({ show: false });
    }, 500);
  };

  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  determinePath() {
    let path = "";
    switch (window.location.pathname) {
      case "/":
        "Stories";
        path = "Stories";
        break;
    }
    return path;
  }

  handleMenu = () => {
    this.setState({
      isMenuOpen: true,
      menuStyle: {
        ...this.state.menuStyle,
        width: "100%",
        opacity: 1
      },
      menuContent: {
        ...this.state.menuContent,
        display: "block"
      }
    });
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false,
      menuStyle: {
        ...this.state.menuStyle,
        width: "0%",
        opacity: 0
      },
      menuListStyle: {
        display: "none"
      }
    });
  };

  render() {
    const data01 = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
      { name: "Group E", value: 278 },
      { name: "Group F", value: 189 }
    ];
    return (
      <div className="participant">
        <div className="flex-container">
          <Sticky enabled={true}>
            <div className="sidenav">
              <div className="title">
                <span>{"Faces Of Daca"}</span>
              </div>
              <div className="navigation">
                <ul>
                  <li>
                    <NavLink to="/">Stories</NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/statistics" activeClassName="links">
                      Statistics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/how-to-help" activeClassName="links">
                      How To Help
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/about" activeClassName="links">
                      About
                    </NavLink>
                  </li>
                  <div className="social">
                    <div>
                      <div>
                        <img id="facebook" src={Facebook} />
                      </div>
                      <div>
                        <img src={Instagram} />
                      </div>
                      <div>
                        <img src={Twitter} />
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </Sticky>
          <div className="main about-container">
            <div className="mobile-menu" style={this.state.menuStyle}>
              <div className="overlay-content" style={this.state.menuContent}>
                <NavLink to="/" activeClassName="">
                  Stories
                </NavLink>
                <NavLink to="/statistics" activeClassName="">
                  Statistics
                </NavLink>
                <NavLink to="/how-to-help" activeClassName="">
                  How To Help
                </NavLink>
                <NavLink to="/about" activeClassName="">
                  About
                </NavLink>
              </div>
            </div>
            {this.state.isMenuOpen && <ScrollLock />}
            <div className="profile">
              <div className="">
                <div className="portrait-title">
                  <MediaQuery query="(max-width: 1224px)">
                    <div
                      className="mobile-nav about-nav"
                      style={this.mobileNavStyle}
                    >
                      {this.state.isMenuOpen ? (
                        <MdClose
                          size={40}
                          onClick={this.closeMenu}
                          className="menu-close"
                          color={"black"}
                          style={{ margin: 10 }}
                        />
                      ) : (
                        <MdMenu
                          size={40}
                          onClick={this.handleMenu}
                          className="menu-icon"
                          color={"black"}
                          style={{ margin: 10 }}
                        />
                      )}
                    </div>
                  </MediaQuery>
                  <p>DREAM ACT NOW.</p>
                </div>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"Call Your Representative"}</b>
                </p>
                <p>
                  {
                    "Urge Congress to pass a legitimate DREAM Act today by calling your local congressman or the Speaker of the House, Paul Ryan. Find your representative and inform them that you stand with the 800,000 DREAMers, who, without a long-term legislation, are at risk of losing their livelihoods as result of deportation. "
                  }
                </p>
                <div className="help-button-container">
                  <a href="https://callyourrep.co" target="_blank">
                  <div className="help-button">
                    <p>{"Find Your Rep"}</p>
                  </div>
                  </a>
                </div>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"RSVP our Event"}</b>
                </p>
                <p>
                  {
                    "On January 25, 2017, our team is hosting an event in celebration of the launch of our storytelling project. At this event, we will have panelists sharing their experiences as an extension to the interviews conducted for facesofdaca.us."
                  }
                </p>
                <div className="help-button-container">
                  <a href="http://tinyurl.com/facesodaca-firesidechat-rsvp" target="_blank">
                  <div className="help-button">
                    <p>{"RSVP Now"}</p>
                  </div>
                  </a>
                </div>
              </div>
              <div className="about-header project">
                <p>
                  <b>{"Social Media Presence"}</b>
                </p>
                <p>
                  {
                    "A call for action can be as easy as sending a 280-character tweet. Therefore, by having a social media presence you can support DACA recipients by tweeting your local congressman or supporting our website by using the hashtag, #FACESOFDACA, to spread the urgency of our goal and mission to have Congress pass a long-term immigration policy."
                  }
                </p>
                <div className="help-button-container">
                  <a href="https://docs.google.com/document/d/1WgvT3j0ez06mNJKqSIqMMNV7zId-4xO7CKjD7H_0Ew8/edit" target="_blank">
                  <div className="help-button">
                    <p>{"Tweet"}</p>
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowToHelp;
