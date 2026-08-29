// import React from "react";
// import Hero from "./Hero";
// import Brokerage from "./Brokerage";
// import OpenAccount from "../OpenAccount";



import React from 'react'
import Hero from './Hero'
import ECC_Table from './ECC_Table';
import  Tables3 from  './Tables3'
import ChargesAcc from './ChargesAcc';



function PricingPage() {
  return (
    <>
      {/* <Hero />
      <OpenAccount />
      <Brokerage /> */}

      <Hero></Hero>
       <ECC_Table></ECC_Table>
       <Tables3></Tables3>
       <ChargesAcc></ChargesAcc>
    </>
  );
}

export default PricingPage;