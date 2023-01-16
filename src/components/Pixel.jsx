import React, { useEffect, useState } from "react";
import { useColorEditor } from "../context/ColorEditorContext";
import "../style/pixel.scss";

export default function Pixel() {

  const { selectedColor, eraseMood, gridHeight, gridWidth, eraseGridPanel } =
    useColorEditor();

  // Pixel Colors Hooks
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  // Pixel color approval
  const applyColor = () => {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  };

  // Change color on hover (onMoueEnter)
  const changeColorOnHover = () => {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  };

  // Reset pixel color after hover (onMouseLeave)
  const resetColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  };

  // Erase pixel color approval
  const erasePixel = () => {
    setPixelColor("#fff");
    setCanChangeColor(false);
  };

  // Change color to white on hover (onMoueEnter)
  const eraseColorHover = () => {
    setOldColor(pixelColor);
    setPixelColor("#fff");
  };

  // Reset pixel color after hover (onMouseLeave)
  const resetEraseColor = () => {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  };

  // This Effect run when we creating a new grid panel or when we erase the grid panel
  // To Clear The Grid Panel(set pixel color to white) every time, one of these values changed
  useEffect(() => {
    setPixelColor("#fff");
  }, [gridWidth, gridHeight, eraseGridPanel]);

  return (
    <div
      className={"Pixel"}
      style={{ backgroundColor: pixelColor }}
      onMouseEnter={!eraseMood ? changeColorOnHover : eraseColorHover}
      onMouseLeave={!eraseMood ? resetColor : resetEraseColor}
      onClick={!eraseMood ? applyColor : erasePixel}
    ></div>
  );
}
