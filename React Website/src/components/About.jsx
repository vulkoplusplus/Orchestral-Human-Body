import "./About.css";
import wearable from "../assets/wearable.svg";
import melody from "../assets/melody.svg";
import hands from "../assets/hand.svg";
import arrow from "../assets/arrow.svg";
import about from "../assets/about.png";
import padlock from "../assets/padlock.svg";

const About = () => {
  return (
    <>
      {" "}
      <div className="about-container">
        <div className="benefits">
          <div className="benefit-item">
            <img className="wearables" src={wearable} alt="wearables" />
            <div>
              <h2>Wearables</h2>
              <p>Monitor your health with music</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={melody} alt="melody" />
            <div>
              <h2>Melody</h2>
              <p>Turn your everyday into melodies</p>
            </div>
          </div>
          <div className="benefit-item">
            <img src={hands} alt="blockchain" />
            <div>
              <h2>Safety</h2>
              <p>Your data is kept secure and anonymous</p>
            </div>
          </div>
        </div>
        <div id="workflow-container">
          <img src={about} className="tech-img-mobile" width={"60vw"} />
          <div className="row-1">
            <div id="workflow-item-1" className="workflow-item">
              Wristband, Smartwatch, Oura Ring records your health & fitness
              data.
            </div>
            {/* <img src={arrow} alt="" className="arrow" /> */}
            <div className="arrow-icon" id="arrow-left">
              &#8594;
            </div>
            <div id="workflow-item-2" className="workflow-item">
              AI maestro turns this data into music.
            </div>
          </div>

          <div className="row-2">
            <img src={about} className="tech-img" />
            <div className="column-1">
              {/* <img src={arrow} alt="" className="arrow arrow-down" /> */}
              <div className="arrow-icon">&#8595;</div>
              <div
                id="workflow-item-3"
                className="workflow-item col-workflow-item"
              >
                Turning into your personal health symphony.
              </div>
              {/* <img src={arrow} alt="" className="arrow arrow-down" /> */}
              <div className="arrow-icon">&#8595;</div>
              <div
                id="workflow-item-4"
                className="workflow-item col-workflow-item"
              >
                Downloadable and streamable at any time.
              </div>{" "}
            </div>
          </div>
        </div>
        {/* <div className="workflow">
          <div className="item item-1">
            Wristband, Smartwatch, Oura Ring records your health & fitness data
          </div>

          <div className="item item-2">
            {" "}
            AI maestro turns this data into music
          </div>
          <div className="item item-3">
            {" "}
            Turning into your personal health symphony
          </div>
          <div className="item item-3">
            {" "}
            Downloadable and streamable at any time
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;

/* background: rgba(0, 0, 0, 0.3);  */
/* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  */
