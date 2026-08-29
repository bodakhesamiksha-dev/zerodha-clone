import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.9", fontSize: "1em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/sam.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h3 className="mt-5">Samiksha Bodkhe</h3>
          <p className="text-muted">
            Full Stack Web Developer <br></br>BE Information Technology
          </p>
        </div>
        <div className="col-6 p-3">
          <p>
            Samiksha is a passionate Information Technology engineering student
            with a strong interest in Full Stack Web Development. She enjoys
            building modern, user-friendly web applications and turning ideas
            into functional digital experiences.
          </p>
          <p>
            She has worked with technologies including React, JavaScript,
            Node.js, Express, MongoDB, HTML and CSS, and has built projects such
            as an Airbnb-inspired travel platform and a Zerodha-inspired trading
            platform.
          </p>
          <p>
            She is continuously improving her development skills, exploring new
            technologies, and working towards becoming a professional Full Stack
            Web Developer.<br></br>Building. Learning. Growing. 🚀
          </p>
          <p>
            Connect on -
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              samikshabodkhe2005@gmail.com
            </a>
            <br></br>
            Linkedin -{" "}
            <a href="" style={{ textDecoration: "none" }}>
              www.linkedin.com/in/samiksha-bodkhe-76b37425a
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
