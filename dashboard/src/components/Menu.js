
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {


  const [user, setUser] = useState(null);



  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState(false);


  useEffect(() => {

    const getUser = async () => {
      try {

        const response = await axios.get(
          "https://zerodha-backend-g3ew.onrender.com/api/auth/me",
          {
            withCredentials: true,
          }
        );

        setUser(response.data.user);

      } catch (error) {

        console.log("User fetch error:", error);

      }
    };

    getUser();

  }, []);


  // =========================
  // LOGOUT
  // =========================

 
  const handleLogout = async () => {
  try {
    await axios.post(
      "https://zerodha-backend-g3ew.onrender.com/api/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );

    window.location.href =
      "https://zerodha-frontend-1nbf.onrender.com/login";

  } catch (error) {
    console.log("Logout error:", error);
  }
};


  // =========================
  // MENU CLICK
  // =========================

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };


  // =========================
  // PROFILE CLICK
  // =========================

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };


  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  return (

    <div className="menu-container">

      {/* LOGO */}

      <img
        src="logo.png"
        style={{ width: "40px" }}
        alt="logo"
      />


      <div className="menus">

        {/* =========================
            MENU LINKS
        ========================= */}

        <ul>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={
                  selectedMenu === 0
                    ? activeMenuClass
                    : menuClass
                }
              >
                Dashboard
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p
                className={
                  selectedMenu === 1
                    ? activeMenuClass
                    : menuClass
                }
              >
                Orders
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p
                className={
                  selectedMenu === 2
                    ? activeMenuClass
                    : menuClass
                }
              >
                Holdings
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p
                className={
                  selectedMenu === 3
                    ? activeMenuClass
                    : menuClass
                }
              >
                Positions
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p
                className={
                  selectedMenu === 4
                    ? activeMenuClass
                    : menuClass
                }
              >
                Funds
              </p>
            </Link>
          </li>


          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p
                className={
                  selectedMenu === 5
                    ? activeMenuClass
                    : menuClass
                }
              >
                Apps
              </p>
            </Link>
          </li>

        </ul>


        <hr />


        {/* =========================
            PROFILE
        ========================= */}

        <div
          className="profile"
          onClick={handleProfileClick}
        >

          {/* Avatar */}

          <div className="avatar">
            {user
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>


          {/* USER NAME */}

          <p className="username">

            {user
              ? user.name
              : "User"}

          </p>

        </div>


        {/* =========================
            PROFILE DROPDOWN
        ========================= */}

       {isProfileDropdownOpen && (
  <div className="profile-dropdown">

    <div
      style={{
        padding: "10px 15px",
        borderBottom: "1px solid #eee",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          fontWeight: "600",
          fontSize: "14px",
          color: "#333",
        }}
      >
        {user ? user.name : "User"}
      </div>

      <div
        style={{
          fontSize: "12px",
          color: "#888",
          marginTop: "4px",
        }}
      >
        {user ? user.email : ""}
      </div>
    </div>

    <button onClick={handleLogout}>
      Logout
    </button>

  </div>
)}

      </div>

    </div>

  );
};

export default Menu;
