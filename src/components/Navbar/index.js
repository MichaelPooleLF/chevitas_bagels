import "./navbar.css";
import React, { useState, useEffect } from "react";
import {Grid} from "@material-ui/core"
import NavLabels from "./nav-labels";
import HamburgerMenu from "./hamburger-menu";
import chevitasLogoSrc from "../images/chevitas-logo-text.png";

const Navbar = ({ lang }) => {
  const [isScreenSmall, setScreen] = useState(window.innerWidth < 825);

  const SmallScreen = () => {
    return (
      <Grid container item spacing={0} xs={6} sm={8}>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid container item xs={4} justify="center" alignItems="center">
            <HamburgerMenu lang={lang} />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  const LargeScreen = () => {
    return (
      <Grid container item spacing={0} xs={6} sm={8} justify="space-evenly" alignItems="center">
        <NavLabels lang={lang} />
      </Grid>
    )
  }

  const updateScreenSize = () => {
    setScreen(window.innerWidth < 825);
  }

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  })

  return (
    <nav className="navbar">
      <Grid container spacing={0}>
          <Grid container item spacing={0} xs={6} sm={4} justify="center" alignItems="center">
            <img className="logo" src={chevitasLogoSrc} alt='chevitas logo' />
          </Grid>
          { isScreenSmall ? <SmallScreen/> : <LargeScreen/>}
      </Grid>
    </nav>
  )
}

export default Navbar
