import React, { useState } from "react";
import "./Train.css";

const Train = () => {
  const [childStates, setChildStates] = useState([false, false, false, false]);
  const [centralColor, setCentralColor] = useState(null);
  const [lightDirection, setLightDirection] = useState(null);
  const [lightPosition, setLightPosition] = useState(null);
  const [centralButtons, setCentralButtons] = useState([]);
  const [lightColor, setLightColor] = useState(null);  // Track color for the light path

  const colors = ["#4f46e5", "#e74c3c", "#2ecc71", "#FFD700"];

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
    setLightColor(colors[index]);  // Set light color based on server

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
    setLightColor(null);  // Reset light color for the merge
    setChildStates([true, true, true, true]);
    setTimeout(() => {
      setChildStates([false, false, false, false]);
      setLightDirection(null);
      setCentralButtons([]);
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

        {/* Light Path */}
        {lightDirection && <LightPath direction={lightDirection} position={lightPosition} color={lightColor || "#fff"} />}
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
  <div className={`card w-72 bg-base-100 shadow-lg`} style={{ borderColor: isActive ? color : "transparent" }}>
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
const LightPath = ({ direction, position, color }) => (
  <div
    className={`light-path ${direction}`}
    style={{
      backgroundColor: color,
      top: position?.top || "50%",
      left: position?.left || "50%",
      "--start-top": position?.top,
      "--start-left": position?.left,
      "--end-top": "50%",
      "--end-left": "50%",
      animation: direction === "central-to-all" ? "shooting-star-reverse 4s forwards" : "shooting-star 4s forwards", // Reverse animation for central-to-all
    }}
  ></div>
);

export default Train;
