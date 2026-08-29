// import React from "react";

// function RightSection({ imageURL, productName, productDesription, learnMore }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDesription}</p>
//           <div>
//             <a href={learnMore}>Learn More</a>
//           </div>
//         </div>
//         <div className="col-6">
//           <img src={imageURL} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightSection;
















































import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container product-section">
      <div className="row align-items-center">

        <div className="col-6 product-content">
          <h2>{productName}</h2>

          <p>{productDesription}</p>

          <div className="product-links">
            <a href={learnMore}>Learn More →</a>
          </div>
        </div>

        <div className="col-6 text-center">
          <img
            src={imageURL}
            className="product-image"
            alt={productName}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;