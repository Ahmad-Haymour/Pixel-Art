import React from "react";
import Pixel from "./Pixel";
import { useColorEditor } from "../context/ColorEditorContext";
import "../style/row.scss";

export default function Row() {
  const { gridWidth } = useColorEditor();

  // It will return an array with length of gridWidth Number
  // (How many rows = Default = 16px)
  let pixels = Array.from({ length: gridWidth }).fill("");

  return (
    <div className="Row">
      {pixels.map((_, i) => (
        <Pixel key={i} />
      ))}
    </div>
  );
}
