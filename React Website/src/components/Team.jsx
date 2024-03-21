import React from "react";
import "./Team.css";
import AllidImg from "../assets/Allid.png";
import BroImg from "../assets/Bro.png";
import RishiImg from "../assets/Rishi3.jpg";

const Team = () => {
  return (
    <div>
      {" "}
      <section className="team-section">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src={AllidImg} alt="Team Member 1" />
            <h3>Allid Ferrow</h3>
            {/* <p className="position">Co Founder</p> */}
            <p>
              Our CEO dreams of blending music with health data for better
              health insights. Serial Entrepreneur, Agile Project Manager,
              Oxford M.B.A., Mathematician.
            </p>
            {/* <img className="social-icon" src="linkedin.png" alt="LinkedIn" /> */}
          </div>
          <div className="team-member">
            <img src={BroImg} alt="Team Member 2" />
            <h3>Björn Stensen</h3>
            {/* <p className="position">Co Founder</p> */}
            <p>
              Master of both the digital realm and the musical universe, our CTO
              have been leading our symphony. ML expert, Violinist, Coder,
              Mathematician.
            </p>
            {/* <img className="social-icon" src="linkedin.png" alt="LinkedIn" /> */}
          </div>
          <div className="team-member">
            <img src={RishiImg} alt="Team Member 3" />
            <h3>Rishi Tiwari</h3>
            {/* <p className="position">Co Founder</p> */}
            <p>
              Our Tech Director is the brains behind our product architecture.
              Cloud platforms and web security expert, Python coder and gamer.
            </p>
            {/* <img className="social-icon" src="linkedin.png" alt="LinkedIn" /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
