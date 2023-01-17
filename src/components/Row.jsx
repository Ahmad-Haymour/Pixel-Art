import React from "react";
import Pixel from "./Pixel";
import { useColorEditor } from "../context/ColorEditorContext";
import "../style/row.scss";

export default function Row() {
  const { gridWidth } = useColorEditor();

  // (How many colum = Default = 16)
  // Create 16 Rows 
  // Loop every single row 
  let pixels = Array.from({ length: gridWidth }).fill("");

  return (
    <div className="Row">
      {pixels.map((_, i) => (
        <Pixel key={i} />
      ))}
    </div>
  );
}
