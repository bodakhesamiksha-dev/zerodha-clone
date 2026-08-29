// import React from "react";

// function Hero() {
//   return (
//     <section className="container-fluid" id="supportHero">
//       <div className="p-5 " id="supportWrapper">
//         <h4>Support Portal</h4>
//         <a href="">Track Tickets</a>
//       </div>
//       <div className="row p-5 m-3">
//         <div className="col-6 p-3">
//           <h1 className="fs-3">
//             Search for an answer or browse help topics to create a ticket
//           </h1>
//           <input placeholder="Eg. how do I activate F&O" />
//           <br />
//           <a href="">Track account opening</a>
//           <a href="">Track segment activation</a>
//           <a href="">Intraday margins</a>
//           <a href="">Kite user manual</a>
//         </div>
//         <div className="col-6 p-3">
//           <h1 className="fs-3">Featured</h1>
//           <ol>
//             <li>
//               <a href="">Current Takeovers and Delisting - January 2024</a>
//             </li>
//             <li>
//               <a href="">Latest Intraday leverages - MIS & CO</a>
//             </li>
//           </ol>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;





























// import React from "react";

// function Hero() {
//   return (
//     <section className="container-fluid bg-primary text-white" id="supportHero">

//       <div className="container">

//         <div className="row pt-5">

//           <div className="col-6">
//             <h4>Support Portal</h4>
//           </div>

//           <div className="col-6 text-end">
//             <a href="#" className="text-white">
//               Track Tickets
//             </a>
//           </div>

//         </div>

//         <div className="row py-5">

//           <div className="col-md-8">

//             <h1 className="fs-3 mb-4">
//               Search for an answer or browse help topics to create a ticket
//             </h1>

//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Eg. how do I activate F&O"
//             />

//             <div className="mt-4">

//               <a href="#" className="text-white me-4">
//                 Track account opening
//               </a>

//               <a href="#" className="text-white me-4">
//                 Track segment activation
//               </a>

//               <a href="#" className="text-white me-4">
//                 Intraday margins
//               </a>

//               <a href="#" className="text-white">
//                 Kite user manual
//               </a>

//             </div>

//           </div>

//           <div className="col-md-4">

//             <h1 className="fs-3 mb-4">
//               Featured
//             </h1>

//             <ol>

//               <li className="mb-3">
//                 <a href="#" className="text-white">
//                   Current Takeovers and Delisting
//                 </a>
//               </li>

//               <li>
//                 <a href="#" className="text-white">
//                   Latest Intraday leverages - MIS & CO
//                 </a>
//               </li>

//             </ol>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;



























// import React from "react";

// function Hero() {
//   return (
//     <div className="container mt-5">

//       <div className="row align-items-center mb-4">

//         <div className="col-md-6">
//           <h4>Support Portal</h4>
//         </div>

//         <div className="col-md-6 text-md-end">
//           <a href="#" className="text-decoration-none">
//             My tickets
//           </a>
//         </div>

//       </div>


//       <div className="row">

//         <div className="col-md-8">

//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="Eg: How do I open my account, How do i activate F&O..."
//           />

//         </div>

//       </div>


//       <div className="row mt-4">

//         <div className="col-md-8">

//           <ol className="ps-3">

//             <li className="mb-2">
//               <a href="#" className="text-decoration-none">
//                 Current Buybacks - August 2026
//               </a>
//             </li>

//             <li>
//               <a href="#" className="text-decoration-none">
//                 Surveillance measure on scrips - August 2026
//               </a>
//             </li>

//           </ol>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Hero;




















import React from "react";

function Hero() {
  return (
    <section className="container-fluid  py-5" style={{ backgroundColor: "#c3ced7" }}>

      <div className="container">

        <div className="row align-items-center mb-5">

          <div className="col-md-8">
            <h3 className=" mb-2">
              Support Portal
            </h3>

            <p className="text-muted mb-0">
              Search for answers to your questions
            </p>
          </div>

          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <a
              href="#"
              className="text-decoration-none fw-medium"
            >
              My tickets
            </a>
          </div>

        </div>


        <div className="row justify-content-center">

          <div className="col-lg-9">

            <div className="input-group input-group-lg shadow-sm">

              <span className="input-group-text bg-white border-end-0">
                🔍
              </span>

              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
              />

            </div>

          </div>

        </div>


        <div className="row justify-content-center mt-4">

          <div className="col-lg-9">

            <div className="d-flex flex-wrap gap-4">

              <a href="#" className="text-decoration-none">
                Current Buybacks - August 2026
              </a>

              <a href="#" className="text-decoration-none">
                Surveillance measure on scrips - August 2026
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;