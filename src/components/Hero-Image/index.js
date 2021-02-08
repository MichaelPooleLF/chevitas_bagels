import React from 'react';
import {withStyles} from '@material-ui/core';
import menuHeaderImage from '../images/menu-photo-1.jpg';
import logo from "../images/logo.png";
import storyImage from '../images/owner-and-store-front.jpg';
import contactImage from "../images/contact-us-background-1.jpg";
import "./hero-image.css"

const styles = {
  homeHeader: {
    height: "70vh",
    backgroundImage: "linear-gradient(#E8FF00, white)"
  },
  homeImage: {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    boxShadow: "0px 0px 50px green",
    borderRadius: "30px",
    overflow: "hidden",
    minHeight: "300px",
    minWidth: "300px",
    maxHeight: "500px",
    maxWidth: "500px",
    height: "var(--component-height)",
    width: "var(--component-width)",
  },
  menuImage: {
    backgroundImage: `url(${menuHeaderImage})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    height: "50vh",
    width: "100vw"
  },
  menuText: {
    color: "white",
    fontSize: "7rem",
    fontFamily: `'Courgette', cursive`,
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
  },
  ourStoryImage: {
    backgroundImage: `url(${storyImage})`,
    backgroundPosition: "calc(40% - 0px) calc(40% - 10px)",
    backgroundSize: "cover",
    height: "60vh",
    width: "100vw",
  },
  ourStoryText: {
    color: "white",
    fontSize: "7rem",
    fontFamily: `'Courgette', cursive`,
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    textAlign: "center"
  },
  contactHeader: {
    height: "100vh",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: "-1000",
    backgroundImage: `url(${contactImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    opacity: 0.30
  }
}

function HeroImage({ classes, page, tiled }) {
  return (
    <div className="hero-image">
      <header className={classes.[`${page}Header`]}>
        <div className={classes.[`${page}Image`]}></div>
      </header>
    </div>
  )
}

export default withStyles(styles)(HeroImage);
