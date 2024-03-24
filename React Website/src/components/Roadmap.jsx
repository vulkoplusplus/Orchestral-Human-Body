import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  const milestones = [
    {
      id: "24Q2",
      description: [
        "Developing AI Maestro with Magenta",
        "Data integration with wearables",
        "EIR Track",
      ],
    },
    {
      id: "24Q3",
      description: [
        "Integrate Ableton library",
        "API development",
        "GDPR Compliance",
      ],
    },
    {
      id: "24Q4",
      description: [
        "Beta - product validation",
        "Implement cloud solution",
        "Series-A Fundraising",
      ],
    },
    {
      id: "25Q1",
      description: [
        "Product launch",
        "Advanced encryption / anonymization",
        "Subscription-based revenue model",
      ],
    },
  ];

  return (
    <div className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <h1>Roadmap</h1>
        </div>
        <div className="roadmap">
          {milestones.map((milestone, index) => (
            <div
              className={`milestone ${index % 2 === 0 ? "left" : "right"}`}
              key={milestone.id}
            >
              <div className="content">
                <h2>{milestone.id}</h2>
                <p>
                  {milestone.description.map((item) => (
                    <p>{item}</p>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
