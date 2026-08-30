import React, { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        await axios.get(
          "https://zerodha-backend-g3ew.onrender.com/api/auth/me",
          {
            withCredentials: true,
          }
        );

        // JWT valid
        setAuthenticated(true);

      } catch (error) {
        // JWT missing / invalid
        setAuthenticated(false);

      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  // While checking JWT
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Checking authentication...
      </div>
    );
  }

  // Not logged in
  if (!authenticated) {
    window.location.href =
      "https://zerodha-frontend-1nbf.onrender.com/login";

    return null;
  }

  // Logged in
  return children;
};

export default ProtectedRoute;