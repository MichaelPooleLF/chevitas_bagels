import React from 'react';
import {withStyles} from '@material-ui/core';
import menuHeaderImage from '../images/menu-photo-1.jpg';
import logo from "../images/chevitas-logo.png";
import storyImage from '../images/owner-and-store-front.jpg';
import contactImage from "../images/contact-us-background-1.jpg";
import "./hero-image.css"

const styles = {
  homeHeader: {
    background: `linear-gradient(yellow, white)`,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeImage: {
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    boxShadow: "0px 0px 50px green",
    width: "var(--component-width)",
    height: "var(--component-height)"
  },
  menuHeader: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${menuHeaderImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw"
  },
  menuText: {
    color: "white",
    fontSize: "7rem",
    fontFamily: `'Courgette', cursive`,
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
  },
  ourStoryHeader: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ourStoryImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${storyImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw"
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

function HeroImage({ imageText, classes, page }) {
  return (
    <header className={classes.[`${page}Header`]}>
      <div className={classes.[`${page}Image`]}>
        <h1 className={classes.[`${page}Text`]}>{imageText}</h1>
      </div>
    </header>
  )
}

export default withStyles(styles)(HeroImage);
