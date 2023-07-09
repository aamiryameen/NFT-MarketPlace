import React, { useState, useRef, useEffect } from "react";
import { providers } from "ethers";
import "./Header.css";
import { Link } from "react-router-dom";
// import 'public/css/stellarnav.min.css';

function Header() {
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const[menuOpen, setOpen] = useState(false);

  // useEffect(() => {
  // 	let handler = () => {
  // 		setOpen(false);
  // 	}

  // 	document.addEventListener("mousedown", handler);
  // });

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    console.log("Requesting account...");

    // Check if MetaMask extension exists //
    if (window.ethereum) {
      console.log("detect");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("Error connecting...");
      }
    } else {
      console.log("Meta Mask not detected");
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <div>
      <header className="my-4">
        <div className="container">
          <div className="header_wrap">
            {/* <!-- Left-Sec-header --> */}
            <div className="header_col1">
              <div className="header_leftSec d-flex align-items-center">
                <div className="hamburger-menu" onClick={toggleMenu}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className={`menu ${menuOpen ? "show" : ""}`}>
                  <div
                    ref={menuRef}
                    className={`menu ${menuOpen ? "show" : ""}`}
                  >
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="./Cryppunks">Kryp.ai</Link>
                      </li>
                      <li>
                        <Link to="./Mission">Kryp.ai Cause</Link>
                      </li>
                      <li>
                        <Link to="./Training">Kryp 101</Link>
                      </li>
                      <li>
                        <Link to="./Connectwallet">Connect Wallet</Link>
                      </li>
                      <li>
                        <Link to="./Contact">Get in Touch</Link>
                      </li>
                      <li>
                        <Link to="./Faqs">FAQS</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="stellarnav">

							<ul>
							    <li><Link to="./">Home</Link></li>
							    <li><Link to="./cryppunks">Cryppunks</Link></li>
							    <li><Link to="./mission">Cryppunks Cause</Link></li>
							    <li><Link to="./training">Krypt 101</Link></li>
							    <li><Link to="./connectwallet">Connect Wallet</Link></li>
							    <li><Link to="./contact">Get in Touch</Link></li>
							    <li><Link to="./faqs">FAQS</Link></li>
							</ul>
						</div> */}
                <div className="menuList_leftSec">
                  <ul className="d-flex">
                    <li className="">
                      <Link to="#!">Create your NFT</Link>
                    </li>
                    <li className="">
                      <Link onClick={requestAccount} to="#!">
                        Connect
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- End-Left-Sec-header -->

				<!-- Mid-Sec-header --> */}
            <div className="header_col2">
              <div className="header_midSec">
                <Link to="/">
                  <img
                    src="assets/images/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
            {/* <!-- End-Mid-Sec-header -->

				<!-- Mid-Sec-header --> */}
            <div className="header_col3">
              <div className="header_rytSec d-flex align-items-center justify-content-end">
                <div className="searchBox d-flex justify-content-evenly">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn-search">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="header_right">
                  {/* <!-- UL listing --> */}
                  <ul className="brandList d-flex">
                    <li>
                      <Link to="#!">
                        <img
                          src="assets/images/brand-icon1.png"
                          alt="linkedin"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#!">
                        <img
                          src="assets/images/brand-icon2.png"
                          alt="brand-icon2"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/cryppunkss2023/">
                        <img
                          src="assets/images/brand-icon3.png"
                          alt="instagram"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.facebook.com/profile.php?id=100091274513810">
                        <img
                          src="assets/images/brand-icon4.png"
                          alt="facebook"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#1">
                        <img
                          src="assets/images/brand-icon5.png"
                          alt="twitter"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://discord.com/invite/UD8TPT9W">
                        <img
                          src="assets/images/brand-icon6.png"
                          alt="brand-icon6"
                        />
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- Profile --> */}
                  <div className="profileWrapper">
                    <button
                      className="d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="assets/images/profileImg.png"
                        className="img-fluid"
                      />
                      <label>
                        <span>welcome back</span>
                        <span>John Doe</span>
                      </label>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item" href="#">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End-Mid-Sec-header --> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
