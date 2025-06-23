// import React, { Component } from "react";
import "../Styles/A-Navbar.css";
import { NavbarLinks } from "../Components/NavbarLinks";
// import { Link } from "react-router-dom";
import Logo from "../Components/Assets/Logo/Logo.png";
// import { useLocation } from "react-router-dom";
import React, { Component, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// class Navbar extends Component {

// state = { clicked: false };

// handleClick = () => {
//   this.setState((prevState) => ({ clicked: !prevState.clicked }));

//   if (!this.state.clicked) {
//     document.body.classList.add("no-scroll");
//   } else {
//     document.body.classList.remove("no-scroll");
//   }
// };
// componentDidMount() {
//   window.addEventListener("scroll", this.changeNavbarBackground);
//   document.body.classList.remove("no-scroll"); // Remove scroll restriction when page loads

//   this.setState({ clicked: false });
// }

// componentWillUnmount() {
//   window.removeEventListener("scroll", this.changeNavbarBackground);
// }

// changeNavbarBackground = () => {
//   if (window.scrollY >= 50) {
//     document.querySelector(".navbarItems").classList.add("navbarScrolled");
//   } else {
//     document.querySelector(".navbarItems").classList.remove("navbarScrolled");
//   }
// };

// render() {
//     return (
//       <nav className="navbarItems">
//         <div className="divNameLogo">
//           <img
//             className="navbarLogoImage"
//             alt="Walk Projects Logo"
//             src={Logo}
//           />
//           <p className="navBarName">
//             <span>Walk</span> Projects
//           </p>
//         </div>

//         <div className="menuIcons" onClick={this.handleClick}>
//           <i
//             className={
//               this.state.clicked ? "fas fa-times" : "fas fa-bars-staggered"
//             }
//           ></i>
//         </div>

//         <div>
//           <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
//             {NavbarLinks.map((item, index) => {
//               return (
//                 <li className="navLinksList" key={index}>
//                   <Link className={item.cName} to={item.url}>
//                     {item.title}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </nav>
//     );
//   };
// // }

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));

    if (!this.state.clicked) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  changeNavbarBackground = () => {
    if (window.scrollY >= 50) {
      document.querySelector(".navbarItems").classList.add("navbarScrolled");
    } else {
      document.querySelector(".navbarItems").classList.remove("navbarScrolled");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarBackground);
    document.body.classList.remove("no-scroll"); // Reset scroll restriction on load
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarBackground);
  }

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
            Walk Projects <br />
            <span>Integrated Services Co</span>
          </p>
          {/* <p className="navBarNameText"></p> */}
        </div>

        <div className="menuIcons" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? "fas fa-times" : "fas fa-bars-staggered"
            }
          ></i>
        </div>

        <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
          {NavbarLinks.map((item, index) => (
            <li className="navLinksList" key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
