import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Dropdown, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../lib/slices/toggleSidebar";
import { toggleHead } from "../lib/slices/toggle-header";
import { darkMode } from "../lib/slices/config";
import Styles from "../styles/WidgetMenu.module.scss";
import { encryptName } from "../helpers/encryptions";

// Translation
import i18next from "i18next";
import Cookies from "js-cookie";

const languages = [
  {
    key: "222",
    code: "en",
    text: "English",
    name: "English",
    country_code: "gb",
  },
  {
    key: "111",
    code: "ar",
    text: "Arabic",
    dir: "rtl",
    country_code: "ar",
    name: "Arabic",
  },
];

const Header = () => {
  const location = useHistory();
  const dispatch = useDispatch();
  const [showLang, setShowLang] = useState(false);

  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const config = useSelector((state) => state.config);
  const User = Cookies.get(encryptName("User")) || null;
  const { ToggleHeader } = useSelector((state) => state);
  const handleSignOut = (e) => {
    e.preventDefault();
    Cookies.remove(encryptName("User"));
    Cookies.remove(encryptName("Admin"));
    location.push("/login");
  };
  useEffect(
    (_) => {
      config?.darkMode
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
      document.body.dir = currentLanguage?.dir || "ltr";
    },
    [dispatch, config.darkMode, currentLanguage?.dir]
  );
  return (
    <>
      <Navbar
        expand="lg"
        variant="light"
        className="nav iq-navbar py-1 py-xl-2"
      >
        <Container fluid className="navbar-inner">
          <div
            className="navbar-brand mx-5"
            style={{ backgroundColor: `${currentLanguage.code === "ar" && "transparent"}`, }}
          >
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 30 30"
              style={{
                enableBackground: "new 0 0 30 30",
                width: "24px",
              }}
              xmlSpace="preserve"
            >
              <style type="text/css">
                {"\n\t.st0{fill:#FFFFFF;}\n\t.st1{fill:url(#SVGID_1_);}\n"}
              </style>
              <path
                className="st0"
                d="M26,0H4C1.8,0,0,1.8,0,4v22c0,2.2,1.8,4,4,4h22c2.2,0,4-1.8,4-4V4C30,1.8,28.2,0,26,0z"
              />
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1={34.5273}
                y1={-6.1733}
                x2={-4.7378}
                y2={36.4015}
              >
                <stop
                  offset={0}
                  style={{
                    stopColor: "#0048B2",
                  }}
                />
                <stop
                  offset={1}
                  style={{
                    stopColor: "#012034",
                  }}
                />
              </linearGradient>
              <path
                className="st1"
                d="M10.9,19.6c0-0.5,0-1,0-1.3c0-0.1,0.1-0.2,0.2-0.2c0.5,0,0.9,0,1.4,0v1.5C12,19.2,11.3,19.2,10.9,19.6z  M17.8,12.9c-0.3,0-0.6,0-0.8,0c-0.3,0-0.4,0.1-0.4,0.3c0,0.6,0,1.2,0,1.7s-0.3,0.7-0.7,0.5c-0.6-0.4-1.3-0.4-1.9,0 c-0.4,0.2-0.7,0-0.7-0.5c0-0.6,0-1.2,0-1.8c0-0.1-0.1-0.2-0.2-0.3c-0.3,0.1-0.6,0.1-1,0.1v4.3h5.7V12.9z M15.8,14.5c0-0.5,0-1,0-1.4 c0-0.1-0.1-0.2-0.2-0.2c-0.4,0-0.8,0-1.2,0c-0.1,0-0.2,0.1-0.2,0.1c0,0.5,0,0.9,0,1.5C14.6,14.1,15.3,14.1,15.8,14.5z M6.8,12.8 c0.1-0.1,0.2-0.1,0.3-0.2L14.5,7c0.4-0.3,0.5-0.3,1,0l7.3,5.6c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.1,0.5,0.1,0.6-0.1 c0.2-0.2,0.2-0.5,0-0.6c-0.1-0.1-0.1-0.1-0.2-0.2c-2.7-2.2-5.5-4.4-8.2-6.6c-0.2-0.1-0.4-0.1-0.6,0c-1.2,1-2.5,2-3.7,3 c-1.5,1.2-3,2.4-4.6,3.6c-0.1,0.2-0.3,0.3-0.3,0.4C6.1,12.8,6.5,13,6.8,12.8z M8.9,18.1v4.1h5.6V18c-0.3,0-0.6,0-0.9,0 c-0.2,0-0.3,0.1-0.3,0.3c0,0.6,0,1.1,0,1.7s-0.3,0.8-0.8,0.5s-1.2-0.3-1.7,0S10,20.6,10,20s0-1.3,0-1.9H8.9z M21.9,22.3 c0.2,0,0.3,0,0.5,0c0.3,0,0.3-0.1,0.3-0.3c0-2.7,0-5.4,0-8c0-0.2-0.1-0.3-0.2-0.4c-2.4-1.9-4.8-3.7-7.2-5.5 c-0.2-0.3-0.5-0.3-0.6-0.2c-2.5,1.9-4.9,3.7-7.3,5.5c-0.2,0.1-0.3,0.3-0.3,0.6c0,2.6,0,5.1,0,7.7c0,0.1,0,0.2,0,0.3s0.1,0.2,0.2,0.2 c0.2,0,0.4,0,0.6,0v-0.4c0-1.3,0-2.6,0-3.9C8,17.2,8,17.2,8.7,17.2h2.6v-0.4c0-1.3,0-2.7,0-4c0-0.6,0.1-0.7,0.5-0.7 c2.1,0,4.2,0,6.2,0c0.5,0,0.6,0.1,0.6,0.6c0,1.3,0,2.7,0,4v0.5c0.9,0,1.8,0,2.6,0c0.6,0,0.7,0.1,0.7,0.7c0,1.3,0,2.7,0,4V22.3z  M17.5,19.6c0.4-0.4,1.1-0.4,1.6-0.1c0-0.5,0-0.9,0-1.4c0-0.1-0.1-0.1-0.2-0.2c-0.5,0-0.9,0-1.4,0V19.6z M30,4v22c0,2.2-1.8,4-4,4H4 c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h22C28.2,0,30,1.8,30,4z M24.7,22.8c0-0.3-0.2-0.5-0.5-0.5c-0.2,0-0.4,0-0.6,0v-8.5 c1.3-0.5,1.4-1.9,0.3-2.7c-2.9-2.2-5.7-4.4-8.5-6.7c-0.4-0.3-0.5-0.3-0.9,0L9.2,8.6c-1.1,0.9-2.3,1.8-3.4,2.7 c-0.2,0.2-0.4,0.4-0.5,0.7c-0.3,0.7,0.1,1.5,0.8,1.7c0.2,0.1,0.2,0.2,0.2,0.4c0,2.6,0,5.2,0,7.8v0.4H5.9c-0.6,0-0.7,0.1-0.7,0.7 c0,0.9,0,1.7,0,2.5c0,0.6,0.1,0.7,0.7,0.7H24c0.1,0,0.1,0,0.2,0c0.3,0,0.5-0.2,0.5-0.5C24.7,24.7,24.7,23.8,24.7,22.8z M6.1,23.7 h13.8c0.4,0,0.6,0.1,0.7,0.2c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5c0,0,0,0,0,0.1 c0,0.3-0.2,0.5-0.5,0.5c-0.2,0-0.3-0.1-0.4-0.2c0,0.3-0.2,0.4-0.8,0.4H6.1v0.1C6,25.2,6,25.2,6.6,25.2h16.8c0.1,0,0.2,0,0.3,0 c0.1,0,0.2-0.1,0.2-0.1c0-0.7,0-1.3,0-2H6.1V23.7z M21,18h-1.1c0,0.7,0,1.3,0,2c0,0.6-0.3,0.8-0.8,0.5c-0.6-0.4-1.3-0.4-1.8,0 c-0.5,0.3-0.7,0.1-0.7-0.5s0-1.1,0-1.7c0-0.1-0.1-0.3-0.2-0.3c-0.3,0-0.7,0-1,0v4.2H21V18z"
              />
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 238.97 34.27"
              className="logo-title"
              width={100}
            >
              <defs>
                <style>{`.cls-1{isolation:isolate}.cls-2{fill:#${config.darkMode ? "ffffffc9" : "023f67"}}`}</style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <g id="Group_187" data-name="Group 187">
                    <g id="Square" className="cls-1">
                      <g className="cls-1">
                        <path
                          className="cls-2"
                          d="M22.38 21.52l6.48 2.05a14.51 14.51 0 01-5 8.06 14.12 14.12 0 01-8.8 2.64 14.27 14.27 0 01-10.81-4.51Q0 25.24 0 17.43 0 9.15 4.27 4.58A14.66 14.66 0 0115.51 0a13.79 13.79 0 019.87 3.59 13 13 0 013.39 6.11l-6.62 1.58a7 7 0 00-2.45-4.07 7.07 7.07 0 00-4.53-1.49 7.54 7.54 0 00-6 2.64c-1.53 1.77-2.3 4.62-2.3 8.57 0 4.19.76 7.17 2.26 9A7.35 7.35 0 0015 28.55a6.71 6.71 0 004.59-1.7 9.88 9.88 0 002.79-5.33zM33.09 21.36a13 13 0 011.56-6.13 10.71 10.71 0 014.42-4.52 13.08 13.08 0 016.38-1.56 12 12 0 018.93 3.54 12.23 12.23 0 013.48 8.94 12.38 12.38 0 01-3.51 9 11.89 11.89 0 01-8.85 3.58 13.9 13.9 0 01-6.3-1.49 10.23 10.23 0 01-4.55-4.37 14.57 14.57 0 01-1.56-6.99zm6.51.34a8 8 0 001.69 5.47 5.55 5.55 0 008.36 0 8.1 8.1 0 001.68-5.52 7.91 7.91 0 00-1.68-5.42 5.55 5.55 0 00-8.36 0 7.94 7.94 0 00-1.69 5.47zM62.83 33.7V.57h6.36V33.7zM97.71 33.7h-5.9v-3.53a9.42 9.42 0 01-3.47 3.07 8.89 8.89 0 01-4 1 9.16 9.16 0 01-7.09-3.33q-3-3.33-3-9.3t2.87-9.28a9.36 9.36 0 017.28-3.18 9 9 0 017 3.35V.57h6.35zM80.76 21.18q0 3.84 1.06 5.56a4.81 4.81 0 004.3 2.49 4.67 4.67 0 003.72-1.87 8.57 8.57 0 001.54-5.57c0-2.76-.5-4.74-1.49-6A4.73 4.73 0 0086.07 14a4.78 4.78 0 00-3.79 1.8 8.17 8.17 0 00-1.52 5.38zM138.08 21.52l6.48 2.05a14.46 14.46 0 01-5 8.06 14.1 14.1 0 01-8.8 2.64A14.27 14.27 0 01120 29.76q-4.24-4.52-4.25-12.33 0-8.28 4.27-12.85A14.67 14.67 0 01131.21 0a13.79 13.79 0 019.87 3.59 13 13 0 013.39 6.11l-6.62 1.58a6.84 6.84 0 00-7-5.56 7.54 7.54 0 00-6 2.64c-1.53 1.77-2.29 4.62-2.29 8.57q0 6.29 2.26 9a7.31 7.31 0 005.87 2.67 6.71 6.71 0 004.59-1.7 9.88 9.88 0 002.8-5.38zM156.59.57v12.18a9.49 9.49 0 0111.3-2.75 6.41 6.41 0 012.66 2.08 7.64 7.64 0 011.22 2.8 25 25 0 01.32 4.77V33.7h-6.35V21a18.83 18.83 0 00-.36-4.79 3.15 3.15 0 00-1.28-1.62 4.08 4.08 0 00-2.29-.6 5.26 5.26 0 00-2.82.77 4.42 4.42 0 00-1.82 2.32 13.68 13.68 0 00-.58 4.58v12h-6.35V.57zM183.28 17l-5.76-1a9 9 0 013.34-5.15q2.38-1.68 7.06-1.68a15.14 15.14 0 016.32 1 6.28 6.28 0 012.93 2.55c.57 1 .85 2.93.85 5.69l-.02 7.4a25.06 25.06 0 00.31 4.67 13.31 13.31 0 001.14 3.22h-6.29c-.16-.42-.36-1.05-.61-1.88-.1-.37-.18-.62-.22-.74a11.7 11.7 0 01-3.48 2.37 10 10 0 01-4 .79 8.17 8.17 0 01-5.84-2 6.69 6.69 0 01-2.14-5.08 6.81 6.81 0 011-3.63 6.26 6.26 0 012.72-2.44 21 21 0 015.05-1.48 34.84 34.84 0 006.14-1.61v-.6a3.3 3.3 0 00-.9-2.61 5.44 5.44 0 00-3.42-.78 4.56 4.56 0 00-2.64.67 4.65 4.65 0 00-1.54 2.32zm8.5 5.15a38 38 0 01-3.86 1 11.69 11.69 0 00-3.46 1.11 2.67 2.67 0 00-1.25 2.24 3.14 3.14 0 001 2.31 3.5 3.5 0 002.53 1 5.52 5.52 0 003.26-1.17 4 4 0 001.51-2.1 12.39 12.39 0 00.25-3.1zM204.28 6.44V.57h6.35v5.87zm0 27.26v-24h6.35v24zM239 33.7h-6.35V21.45a19.11 19.11 0 00-.4-5 3.52 3.52 0 00-1.33-1.77 3.78 3.78 0 00-2.2-.64 5.11 5.11 0 00-3 .91 4.61 4.61 0 00-1.8 2.39 21 21 0 00-.48 5.52V33.7h-6.34v-24h5.9v3.52a9.82 9.82 0 0111.75-3.31 6.47 6.47 0 012.63 1.93 7 7 0 011.24 2.67 19.47 19.47 0 01.35 4.27z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg> */}
            <span style={{ color: `${config.darkMode ? "#bfc9e3" : "#232d42"}` }} className={'ms-2'}>En Course</span>
          </div>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={() => dispatch(toggle())}
          >
            <i className="icon">
              <svg width="20px" viewBox="0 0 23 27">
                <path
                  fill="currentColor"
                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                />
              </svg>
            </i>
          </div>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            style={{
              boxShadow: "none",
              borderColor: "transparent",
              marginTop: "10px",
            }}
          >
            <div
              onClick={() => dispatch(toggleHead())}
              style={{
                left: currentLanguageCode === "ar" && "1rem",
                right: currentLanguageCode === "ar" && "auto",
                height: "auto",
              }}
              className={`${Styles.hamburger} ${ToggleHeader.value && Styles.active
                } shadow-none
                            ${config?.darkMode ? "bg-transparent" : ""}`}
            >
              <span
                className={`${Styles.hamburger__patty} ${config?.darkMode ? "bg-white" : ""
                  }`}
              />
              <span
                className={`${Styles.hamburger__patty} ${config?.darkMode ? "bg-white" : ""
                  }`}
              />
              <span
                className={`${Styles.hamburger__patty} ${config?.darkMode ? "bg-white" : ""
                  }`}
              />
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="navbarSupportedContent"
            className={`${ToggleHeader.value && "show"}`}
          >
            <Nav
              as="ul"
              style={{ float: currentLanguageCode === "ar" && "left" }}
              className="ms-auto navbar-list my-2 my-lg-0 d-flex align-items-stretch"
            >
              <Dropdown as="li" className="nav-item d-flex align-items-center">
                <button
                  onClick={() => dispatch(darkMode())}
                  className="bg-transparent border-0 mx-2"
                >
                  {config?.darkMode ? (
                    <div className="moon">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 499.712 499.712"
                        width="22"
                      >
                        <path
                          fill="#FFD93B"
                          d="M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88
	C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712
	C39.744,355.368,90.944,375.528,146.88,375.528z"
                        />
                        <path
                          fill="#F4C534"
                          d="M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256
	c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256
	C499.712,162.12,461.392,89.64,401.92,42.776z"
                        />
                        <g>
                          <polygon
                            fill="#FFD83B"
                            points="128.128,99.944 154.496,153.4 213.472,161.96 170.8,203.56 180.864,262.296
		128.128,234.568 75.376,262.296 85.44,203.56 42.768,161.96 101.744,153.4 	"
                          />
                          <polygon
                            fill="#FFD83B"
                            points="276.864,82.84 290.528,110.552 321.104,114.984 298.976,136.552 304.208,166.984
		276.864,152.616 249.52,166.984 254.752,136.552 232.624,114.984 263.2,110.552 	"
                          />
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div className="sun">
                      <svg
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 512 512"
                        width="22"
                      >
                        <g>
                          <circle
                            fill="#FFD347"
                            cx="255.997"
                            cy="255.997"
                            r="144.824"
                          />
                          <path
                            fill="#FFD347"
                            d="M256,56.849c-4.273,0-7.737-3.463-7.737-7.737V7.737C248.263,3.463,251.727,0,256,0
		s7.737,3.463,7.737,7.737v41.376C263.737,53.386,260.273,56.849,256,56.849z"
                          />
                          <path
                            fill="#FFD347"
                            d="M152.563,84.568c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.701-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C155.206,84.234,153.876,84.568,152.563,84.568z"
                          />
                          <path
                            fill="#FFD347"
                            d="M76.823,160.294c-1.312,0-2.643-0.334-3.861-1.038L37.13,138.569
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C82.097,158.907,79.497,160.294,76.823,160.294z"
                          />
                          <path
                            fill="#FFD347"
                            d="M49.112,263.737H7.737C3.464,263.737,0,260.274,0,256s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S53.385,263.737,49.112,263.737z"
                          />
                          <path
                            fill="#FFD347"
                            d="M41.005,387.869c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C43.648,387.535,42.317,387.869,41.005,387.869z"
                          />
                          <path
                            fill="#FFD347"
                            d="M131.862,478.74c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C137.136,477.352,134.536,478.74,131.862,478.74z"
                          />
                          <path
                            fill="#FFD347"
                            d="M256,512c-4.273,0-7.737-3.463-7.737-7.737v-41.376c0-4.274,3.464-7.737,7.737-7.737
		s7.737,3.463,7.737,7.737v41.376C263.737,508.537,260.273,512,256,512z"
                          />
                          <path
                            fill="#FFD347"
                            d="M380.138,478.74c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832
		c-2.136-3.7-0.869-8.432,2.832-10.569c3.7-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569
		C382.781,478.406,381.451,478.74,380.138,478.74z"
                          />
                          <path
                            fill="#FFD347"
                            d="M470.995,387.869c-1.312,0-2.643-0.334-3.861-1.038l-35.832-20.687
		c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569
		C476.269,386.481,473.669,387.869,470.995,387.869z"
                          />
                          <path
                            fill="#FFD347"
                            d="M504.263,263.737h-41.376c-4.273,0-7.737-3.463-7.737-7.737s3.464-7.737,7.737-7.737h41.376
		c4.273,0,7.737,3.463,7.737,7.737S508.536,263.737,504.263,263.737z"
                          />
                          <path
                            fill="#FFD347"
                            d="M435.177,160.294c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569
		l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687
		C437.82,159.96,436.489,160.294,435.177,160.294z"
                          />
                          <path
                            fill="#FFD347"
                            d="M359.437,84.568c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569
		l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832
		C364.711,83.181,362.11,84.568,359.437,84.568z"
                          />
                        </g>
                        <path
                          fill="#FFBE31"
                          d="M256,111.18c-5.242,0-10.418,0.286-15.516,0.828c72.685,7.743,129.303,69.252,129.303,143.991
	s-56.619,136.249-129.303,143.992c5.098,0.544,10.273,0.828,15.516,0.828c79.982,0,144.82-64.838,144.82-144.82
	S335.983,111.18,256,111.18z"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </Dropdown>
              <Dropdown as="li" className="nav-item d-flex align-items-center">
                {currentLanguageCode === "ar" ? (
                  <button
                    className={`border-0 bg-transparent ${config?.darkMode ? "text-white" : ""
                      }`}
                    name="en"
                    onClick={() => {
                      i18next.changeLanguage("en");
                      setShowLang(!showLang);
                    }}
                  >
                    <Image
                      name="en"
                      src={"https://flagcdn.com/us.svg"}
                      width={27}
                      alt="en"
                    />
                  </button>
                ) : (
                  <button
                    className={`border-0 bg-transparent ${config?.darkMode ? "text-white" : ""
                      }`}
                    name="ar"
                    onClick={() => {
                      i18next.changeLanguage("ar");
                      setShowLang(!showLang);
                    }}
                  >
                    <Image
                      name="ar"
                      src={"https://flagcdn.com/sa.svg"}
                      width={27}
                      alt="ar"
                    />
                  </button>
                )}
              </Dropdown>
              <Dropdown as="li" className="nav-item">
                <Dropdown.Toggle
                  className={config?.darkMode && "text-white"}
                  variant="nav-link py-1 d-flex align-items-center"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    src={`/assets/images/avatars/${JSON.parse(User)?.gender ? "02.ico" : "01.png"}`}
                    width={40}
                    alt="User-Profile"
                    className="img-fluid avatar avatar-rounded avatar-rounded"
                  />
                  <div className="caption ms-3 d-none d-md-block">
                    <h6 className="mb-0 caption-title">
                      {JSON.parse(User)?.username?.split("").slice(0, 11)}
                    </h6>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropdown-menu-end shadow position-absolute"
                  style={{ top: "94%" }}
                  aria-labelledby="navbarDropdown"
                >
                  <Dropdown.Item
                    as={Link}
                    to='/admin'
                    // onClick={handleSignOut}
                    className="px-0"
                  >
                    <div className="d-flex justify-content-around ">
                      <span>Admin</span>
                      <svg width="18" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="users-cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-users-cog fa-w-20 fa-2x"><g className="fa-group"><path fill="currentColor" d="M636.3 356.1l-25.8-14.9a117.31 117.31 0 0 0 0-42.6l25.8-14.9a7.24 7.24 0 0 0 3.3-8.5 150.07 150.07 0 0 0-33.2-57.4 7.29 7.29 0 0 0-9-1.4l-25.8 14.9a117.4 117.4 0 0 0-36.9-21.3v-29.8a7.28 7.28 0 0 0-5.7-7.1 150.88 150.88 0 0 0-66.2 0 7.28 7.28 0 0 0-5.7 7.1V210a117.4 117.4 0 0 0-36.9 21.3l-25.8-14.9a7.31 7.31 0 0 0-9 1.4 150.07 150.07 0 0 0-33.2 57.4 7.37 7.37 0 0 0 3.3 8.5l25.8 14.9a117.31 117.31 0 0 0 0 42.6l-25.8 14.9a7.24 7.24 0 0 0-3.3 8.5 150.82 150.82 0 0 0 33.2 57.4 7.29 7.29 0 0 0 9 1.4l25.8-14.9a117.4 117.4 0 0 0 36.9 21.3v29.8a7.28 7.28 0 0 0 5.7 7.1 150.88 150.88 0 0 0 66.2 0 7.28 7.28 0 0 0 5.7-7.1v-29.8a117.4 117.4 0 0 0 36.9-21.3l25.8 14.9a7.31 7.31 0 0 0 9-1.4 150.07 150.07 0 0 0 33.2-57.4 7.37 7.37 0 0 0-3.3-8.5zM496 368.4a48.5 48.5 0 1 1 48.5-48.5 48.55 48.55 0 0 1-48.5 48.5z" className="fa-secondary"></path><path fill="currentColor" d="M320 255.9c1.9 0 3.7-.5 5.6-.6a184.35 184.35 0 0 1 36.3-59.2 39.41 39.41 0 0 1 28.9-12.6 38.44 38.44 0 0 1 19.6 5.3l7.9 4.6c.8-.5 1.6-.9 2.4-1.4a110.69 110.69 0 0 0 11.2-48A112 112 0 1 0 320 255.9zm-146.9 18.6a63.81 63.81 0 0 0-45.1-18.6H64a64.06 64.06 0 0 0-64 64v32a32 32 0 0 0 32 32h65.9a146.64 146.64 0 0 1 75.2-109.4zM96 223.9a64 64 0 1 0-64-64 64.06 64.06 0 0 0 64 64zm329.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9-8.2 4.8-15.3 9.8-27.5 9.8a39.75 39.75 0 0 1-28.9-12.6 182.34 182.34 0 0 1-40.2-69.6c-10.7-34.5 24.9-49.7 25.8-50.3q-.15-3.9 0-7.8l-7.9-4.6a40.73 40.73 0 0 1-9.8-8.1c-3.3.2-6.5.6-9.8.6-24.6 0-47.6-6-68.5-16h-8.3A115.25 115.25 0 0 0 128 403.1v28.8a48 48 0 0 0 48 48h255.4a38.5 38.5 0 0 1-6.2-20.3z" className="fa-primary"></path></g></svg>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={"button"}
                    onClick={handleSignOut}
                    className="px-0"
                  >
                    <div className="d-flex justify-content-around ">
                      <span>Logout</span>
                      <svg
                        width="18px"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="sign-out-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svg-inline--fa fa-sign-out-alt fa-w-16 fa-2x"
                      >
                        <path
                          fill="currentColor"
                          d="M272 112v51.6h-96c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C323.8 48 272 69.3 272 112zm192 144L320 400v-99.7H176v-88.6h144V112l144 144zM96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;