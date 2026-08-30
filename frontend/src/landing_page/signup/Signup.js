// import React from 'react'
// function Signup() {
//     return ( 
//         <div>Signup</div>
//      );
// }

// export default Signup;




import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://zerodha-backend-g3ew.onrender.com/api/auth/signup",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      setSuccess("Signup successful!");

      // Go to dashboard
      window.location.href = "http://localhost:3001";
    } catch (error) {
      console.log(error);

      setError(
        error.response?.data?.message ||
          "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div
        className="mx-auto p-4"
        style={{
          maxWidth: "450px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-4">
          Create your account
        </h2>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            {success}
          </div>
        )}

        <form onSubmit={handleSignup}>

          {/* NAME */}
          <div className="mb-3">
            <label className="form-label">
              Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              minLength="6"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading
              ? "Creating account..."
              : "Sign Up"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;