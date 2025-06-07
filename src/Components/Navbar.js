import React, { Component } from "react";
import "../Styles/A-Navbar.css";
import { NavbarLinks } from "../Components/NavbarLinks";
import { Link } from "react-router-dom";
import Logo from "../Components/Assets/Logo/Logo.png";

class Navbar extends Component {
  state = { clicked: false };
  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });

  //   if (!this.state.clicked) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }
  // };

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));

    if (!this.state.clicked) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarBackground);
    document.body.classList.remove("no-scroll"); // Remove scroll restriction when page loads

    this.setState({ clicked: false });
  }
  // componentDidMount() {
  //   window.addEventListener("scroll", this.changeNavbarBackground);
  // }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarBackground);
  }

  changeNavbarBackground = () => {
    if (window.scrollY >= 50) {
      document.querySelector(".navbarItems").classList.add("navbarScrolled");
    } else {
      document.querySelector(".navbarItems").classList.remove("navbarScrolled");
    }
  };

  render() {
    return (
      <nav className="navbarItems">
        <div className="divNameLogo">
          <img
            className="navbarLogoImage"
            alt="Walk Projects Logo"
            src={Logo}
          />
          <p className="navBarName">
            <span>Walk</span> Projects
          </p>
        </div>

        <div className="menuIcons" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fas fa-times" : "fas fa-bars-staggered"
            }
          ></i>
        </div>

        <div>
          <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
            {NavbarLinks.map((item, index) => {
              return (
                <li className="navLinksList" key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
