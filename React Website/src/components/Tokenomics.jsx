import React from "react";
import "./Tokenomics.css";
import TokenomicsImg from "../assets/Tokenomics2.png";

const Tokenomics = () => {
  return (
    <>
      <div className="tokenomics-section">
        <h1>Tokenomics</h1>
        <div className="tokenomics-container">
          <div className="text">
            <p className="bold">Token Name:</p>
            <p>Orchestral Body Token </p>
            <br />
            <span className="bold">Ticker: </span> OBT <br /> <br />
            <span className="bold">Token Supply: </span> 600M <br /> <br />
            <p className="bold">Funding:</p>
            <ul className="funding-list">
              <li>Private sale</li>
              <li>Public sale</li>
              <li>Liquidity pools</li>
            </ul>{" "}
            <br />
            <p className="bold">Governance: </p> Holders have voting rights and
            influence over the project's direction <br />
            and decisions regarding its development, rules, and policies.
            <br /> <br />
            <p className="bold">Bounty Programs:</p>
            <p>For code contributions and community management </p>
          </div>
          <div className="img-section">
            <img
              src={TokenomicsImg}
              alt="tokenomics"
              height={"90%"}
              // width={"11%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
