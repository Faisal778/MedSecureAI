import React, { useState } from "react";
import "./Train.css";

const Train = () => {
  const [childStates, setChildStates] = useState([false, false, false, false]);
  const [centralColor, setCentralColor] = useState(null);
  const [lightDirection, setLightDirection] = useState(null);
  const [lightPosition, setLightPosition] = useState(null);
  const [centralButtons, setCentralButtons] = useState([]);
  const [lightColors, setLightColors] = useState([]);  // Track multiple colors for light beams

  const colors = ["#4f46e5", "#e74c3c", "#2ecc71", "#FFD700"];

  // Handle when a child server's "Send" button is clicked
  const handleConnect = (index) => {
    const updatedStates = [...childStates];
    updatedStates[index] = true;
    setChildStates(updatedStates);
    setLightDirection(`child${index + 1}-to-central`);
    setCentralColor(colors[index]);

    // Set light position for animation (from child server to center)
    const positions = [
      { top: "10%", left: "10%" }, // Server 1
      { top: "10%", left: "90%" }, // Server 2
      { top: "90%", left: "10%" }, // Server 3
      { top: "90%", left: "90%" }, // Server 4
    ];
    setLightPosition(positions[index]);
    setLightColors([colors[index]]);  // Add the color for the light beam

    // Add a button to the central server indicating the server clicked
    const serverName = `Server ${index + 1}`;
    setCentralButtons((prevButtons) => [...new Set([...prevButtons, serverName])]);

    setTimeout(() => {
      setLightDirection(null);
      setCentralColor(null);
    }, 4000); // Increased duration for better visibility
  };

  const handleMerge = () => {
    setLightDirection("central-to-all");
    setChildStates([true, true, true, true]);
    setLightColors(colors);  // Set all light colors when merging
    setTimeout(() => {
      setChildStates([false, false, false, false]);
      setLightDirection(null);
      setCentralButtons([]);  // Clear buttons after animation
      setLightColors([]);  // Clear colors after animation
    }, 4000); // Increased duration for better visibility
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="relative flex justify-center items-center min-h-screen m-10">
        {/* Child Servers */}
        <div className="absolute top-0 left-0">
          <ChildServer isActive={childStates[0]} onConnect={() => handleConnect(0)} color={colors[0]} position="Server 1" />
        </div>
        <div className="absolute top-0 right-0">
          <ChildServer isActive={childStates[1]} onConnect={() => handleConnect(1)} color={colors[1]} position="Server 2" />
        </div>
        <div className="absolute bottom-0 left-0">
          <ChildServer isActive={childStates[2]} onConnect={() => handleConnect(2)} color={colors[2]} position="Server 3" />
        </div>
        <div className="absolute bottom-0 right-0">
          <ChildServer isActive={childStates[3]} onConnect={() => handleConnect(3)} color={colors[3]} position="Server 4" />
        </div>

        {/* Central Server */}
        <CentralServer isActive={!!centralColor} color={centralColor} onMerge={handleMerge} buttons={centralButtons} />

        {/* Light Path - Multiple Lights from Central to All */}
        {lightDirection === "central-to-all" &&
          lightColors.map((color, index) => (
            <LightPath
              key={index}
              direction="central-to-all"
              color={color}
              index={index}
            />
          ))}

        {/* Light Path - Light from Child to Central */}
        {lightDirection === "child1-to-central" && (
          <LightPath direction="child1-to-central" color={colors[0]} index={0} />
        )}
        {lightDirection === "child2-to-central" && (
          <LightPath direction="child2-to-central" color={colors[1]} index={1} />
        )}
        {lightDirection === "child3-to-central" && (
          <LightPath direction="child3-to-central" color={colors[2]} index={2} />
        )}
        {lightDirection === "child4-to-central" && (
          <LightPath direction="child4-to-central" color={colors[3]} index={3} />
        )}
      </div>
    </div>
  );
};

// Central Server Component
const CentralServer = ({ isActive, color, onMerge, buttons }) => (
  <div className={`central-server card w-96 bg-base-100 shadow-xl relative`} style={{ borderColor: color || "transparent" }}>
    <figure className="px-10 pt-10 relative">
      <img
        src="https://assets-global.website-files.com/5fbe376a36d4106214faaf3c/6205a3a7c8390c791df4025d_20220210-Training%20Data%20vs%20Prediction%20Data_Blog%20Thumbnail%20Image.png"
        alt="train image"
        className="rounded-xl"
      />
      <div className="absolute top-2 left-2 flex gap-1">
        {buttons.map((buttonName) => (
          <button key={buttonName} className="btn btn-xs btn-info tooltip tooltip-bottom" data-tip={buttonName}>
            {buttonName}
          </button>
        ))}
      </div>
    </figure>
    <div className="card-body items-center text-center p-4">
      <h2 className="card-title">Central Server</h2>
      <div className="card-actions">
        <button className="btn" onClick={onMerge}>
          Merge
        </button>
      </div>
    </div>
  </div>
);

// Child Server Component
const ChildServer = ({ isActive, onConnect, position, color }) => (
  <div className="card w-72 bg-base-100 shadow-lg" style={{ borderColor: isActive ? color : "transparent" }}>
    <figure className="px-5 pt-5">
      <img
        src="https://assets-global.website-files.com/5fbe376a36d4106214faaf3c/6205a3a7c8390c791df4025d_20220210-Training%20Data%20vs%20Prediction%20Data_Blog%20Thumbnail%20Image.png"
        alt="child server image"
        className="rounded-md"
      />
    </figure>
    <div className="card-body items-center text-center p-4">
      <h2 className="card-title">{position}</h2>
      <div className="card-actions">
        <button className="btn">Train</button>
        <button className="btn" onClick={onConnect}>
          Send
        </button>
      </div>
    </div>
  </div>
);

// Light Path Component
const LightPath = ({ direction, color, index }) => {
  const positions = [
    { top: "10%", left: "10%" },  // Server 1
    { top: "10%", left: "90%" },  // Server 2
    { top: "90%", left: "10%" },  // Server 3
    { top: "90%", left: "90%" },  // Server 4
  ];

  const animationClass = direction.includes("child") ? "child-to-central" : "central-to-all";

  return (
    <div
      className={`light-path ${animationClass}`}
      style={{
        backgroundColor: color,
        top: positions[index]?.top || "50%",
        left: positions[index]?.left || "50%",
        "--start-top": positions[index]?.top,
        "--start-left": positions[index]?.left,
        "--end-top": "50%",
        "--end-left": "50%",
      }}
    ></div>
  );
};

export default Train;
