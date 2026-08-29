// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const handleLogout = async () => {
//     try {
//       await axios.post(
//         "http://localhost:3002/api/auth/logout",
//         {},
//         {
//           withCredentials: true,
//         },
//       );

//       window.location.href = "http://localhost:3000/login";
//     } catch (error) {
//       console.log("Logout error:", error);
//     }
//   };

//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null);



//     useEffect(() => {
//   const getUser = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3002/api/auth/me",
//         {
//           withCredentials: true,
//         }
//       );

//       setUser(response.data.user);
//     } catch (error) {
//       console.log("User fetch error:", error);
//     }
//   };

//   getUser();
// }, []);



//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = (index) => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "40px" }} />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/"
//               onClick={() => handleMenuClick(0)}
//             >
//               <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/orders"
//               onClick={() => handleMenuClick(1)}
//             >
//               <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/holdings"
//               onClick={() => handleMenuClick(2)}
//             >
//               <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
//                 Holdings
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/positions"
//               onClick={() => handleMenuClick(3)}
//             >
//               <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/funds"
//               onClick={() => handleMenuClick(4)}
//             >
//               <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/apps"
//               onClick={() => handleMenuClick(5)}
//             >
//               <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID &nbsp;</p>
//         </div>


//         {isProfileDropdownOpen && (
//           // <div className="profile-dropdown">
//           //   <button onClick={handleLogout}>Logout</button>
//           // </div>
              



//           <div className="profile-dropdown">
//   <button
//     onClick={handleLogout}
//     style={{
//       backgroundColor: "#ea1b2d",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       padding: "8px 18px",
//       fontSize: "14px",
//       fontWeight: "500",
//       cursor: "pointer",
//       boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
//     }}
//   >
//     Logout
//   </button>
// </div>


//         )}
//       </div>
//     </div>
//   );
// };

// export default Menu;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {

  // =========================
  // USER STATE
  // =========================

  const [user, setUser] = useState(null);

  // =========================
  // MENU STATE
  // =========================

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState(false);


  // =========================
  // GET LOGGED-IN USER
  // =========================

  useEffect(() => {

    const getUser = async () => {
      try {

        const response = await axios.get(
          "http://localhost:3002/api/auth/me",
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
        "http://localhost:3002/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.href =
        "http://localhost:3000/login";

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
