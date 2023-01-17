import React from "react";
import { useState } from "react";
import "../style/editor.scss";

import { useColorEditor } from "../context/ColorEditorContext";

// NEW IMPORT STYLE
import { GrPaint } from "react-icons/gr";
import { FaEraser } from "react-icons/fa";

export default function Editor({ globalColor, globalSize }) {
  const {
    selectedColor,
    eraseMood,
    setEraseMood,
    gridWidth,
    setGridWidth,
    gridHeight,
    setGridHeight,
    eraseGridPanel,
    setEraseGridPanel,
    showColorDisplay,
    showDisplay,
  } = useColorEditor();

  // Virtual width to memorize the grid dimension before creating a new panel or erase panel.
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(16);

  // Width Memorize 
  const changeWidth = (e) => {
    setWidth(e.target.value);
  };

  // Height Memorize 
  const changeHeight = (e) => {
    setHeight(e.target.value);
  };

  // Apply virtual grid dimensions
  const createGridPanel = () => {
    setGridWidth(width);
    setGridHeight(height);
  };

  return (
    <div id="Editor">
      <h2 style={{ color: globalColor, fontSize: globalSize + "px" }}>Choose Grid Dimensions</h2>
      <div className="grid-dimensions">
        <section>
          <label htmlFor="width" style={{ color: globalColor, fontSize: globalSize + "px" }}>
            Grid Width:{" "}
          </label>
          <select
            name="pixels-width"
            id="width-selector"
            defaultValue={gridWidth}
            onChange={changeWidth}
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </section>
        <section>
          <label htmlFor="height" style={{ color: globalColor, fontSize: globalSize +"px"}}>
            Grid Height:{" "}
          </label>
          <select
            name="pixels-height"
            id="height-selector"
            defaultValue={gridHeight}
            onChange={changeHeight}
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </section>
      </div>

      <div className="grid-options">
        <button onClick={createGridPanel} style={{ color: globalColor, fontSize: globalSize +"px" }}>
          Create Grid
        </button>
        <button
          onClick={() => setEraseGridPanel(!eraseGridPanel)}
          style={{ color: globalColor, fontSize: globalSize +"px" }}
        >
          Clear
        </button>
      </div>

      <div className="colors-container">
        <h3 style={{ color: globalColor, fontSize: globalSize +"px" }}>Pick a Color: </h3>

        <div className="colors-palette" onClick={showDisplay}>
          {!showColorDisplay ? (
            <div
              className="selected-color"
              style={{ backgroundColor: selectedColor }}
            ></div>
          ) : (
            <div
              className="selected-color"
              style={{ backgroundColor: selectedColor }}
            ></div>
          )}
        </div>
      </div>

      <div className="mode">
        <h3 style={{ color: globalColor }}>
          Mode: <span>{eraseMood ? "Erase" : "Paint"}</span>
        </h3>
        <div className="options">
          <span onClick={() => setEraseMood(false)}>
            <GrPaint />
          </span>
          <span onClick={() => setEraseMood(true)}>
            <FaEraser
              style={{ backgroundColor: "transparent", color: globalColor }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
