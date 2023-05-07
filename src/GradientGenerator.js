import React, { useState, useEffect } from "react";

const GradientGenerator = () => {
  const [colors, setColors] = useState(["#00fffb", "#7462b7"]);
  const [angle, setAngle] = useState(50);
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    const prefix = ["-webkit-", "-moz-", ""];
    const gradient = `linear-gradient(${angle}deg, ${colors.join(", ")})`;
    const code = prefix.map((p) => `${p}background: ${gradient};`);

    setCssCode(code);
  }, [colors, angle]);

  const handleChangeColor = (e, index) => {
    const newColors = [...colors];
    newColors[index] = e.target.value;
    setColors(newColors);
  };

  const handleChangeAngle = (e) => {
    setAngle(e.target.value);
  };

  return (
    <div className="gradient-generator">
      <div
        className="gradient-preview"
        style={{
          background: `linear-gradient(${angle}deg, ${colors.join(", ")})`,
        }}
      ></div>
      <div className="gradient-controls">
        <div className="color-inputs">
          <label>Color 1:</label>
          <input
            type="color"
            value={colors[0]}
            onChange={(e) => handleChangeColor(e, 0)}
          />
          <label>Color 2:</label>
          <input
            type="color"
            value={colors[1]}
            onChange={(e) => handleChangeColor(e, 1)}
          />
        </div>
        <div className="angle-input">
          <label>Angle:</label>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={handleChangeAngle}
          />
          <span>{angle}&deg;</span>
        </div>
      </div>
      <textarea readOnly value={cssCode} rows={4} cols={40} />
    </div>
  );
};

export default GradientGenerator;
