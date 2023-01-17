import React, { useRef, useState } from "react";
import Row from "./Row";
import "../style/panel.scss";
// Context Usage
import { useColorEditor } from "../context/ColorEditorContext";
// Color Picker
import { SwatchesPicker } from "react-color";
// React Icons
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdSaveAlt } from "react-icons/md";

import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

export default function Panel({ globalColor, globalSize }) {

  // Reference Hook, render element
  const componentRef = useRef();

  // To render some global elements in this component
  const {
    gridHeight,
    gridWidth,
    selectedColor,
    changeColor,
    showDisplay,
    showColorDisplay,
  } = useColorEditor();

  // Show/Hide export image window
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // It will return an array with length of gridHeight Number
  // (How many rows = Default = 16px)
  let rows = Array.from({ length: gridHeight }).fill("");

  return (
    <div id="Panel">
      {!showColorDisplay && (
        <div className={"colors-palette"}>
          <SwatchesPicker
            color={selectedColor}
            onChangeComplete={changeColor}
          />
          <span
            className={
              gridHeight > 16 || gridWidth > 16 ? "span large-mode" : "span"
            }
          >
            <AiOutlineCloseCircle
              style={{ color: selectedColor }}
              onClick={showDisplay}
            ></AiOutlineCloseCircle>
          </span>
        </div>
      )}
      <div
        className="save-button"
        onClick={() => setShowDownloadOptions(!showDownloadOptions)}
      >
        {gridHeight < 32 && <p style={{ color: globalColor, fontSize: globalSize +"px" }}>Save Options</p>}
        <span style={{ color: globalColor }}>
          <MdSaveAlt />
        </span>
      </div>
      <div className={"drawing-panel slide-in-top"} ref={componentRef}>
        {rows.map((_, i) => (
          <Row key={i} />
        ))}
      </div>
      {showDownloadOptions && (
        <div className="import-image-wrapper">
          <span>
            <AiOutlineCloseCircle onClick={() => setShowDownloadOptions(false)}>
              X
            </AiOutlineCloseCircle>
          </span>
          <h3>Download Image As:</h3>
          <div className="import-options">
            <span onClick={() => exportComponentAsJPEG(componentRef)}>
              JPEG
            </span>
            <span onClick={() => alert("(Export GIF) Not implemented!")}>
              GIF
            </span>
            <span onClick={() => exportComponentAsPNG(componentRef)}>PNG</span>
          </div>
        </div>
      )}
    </div>
  );
}
