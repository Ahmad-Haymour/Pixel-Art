import React from "react";
// Context Usage
import { useColorEditor } from "../context/ColorEditorContext";
// Components
import Editor from "./Editor";
import Panel from "./Panel";
// Color picker
import { SketchPicker } from "react-color";
// Styling
import "../style/wrapper.scss";

export default function Wrapper({
  globalColor,
  setGlobalColor,
  colorPickerDisplay,
  globalSize
}) {

  const { gridWidth } = useColorEditor();

  return (
    <div className={gridWidth > 16 ? "wrapper large-palette" : "wrapper"}>
      <section className="editor-section">
        {colorPickerDisplay && (
          <SketchPicker
            color={globalColor}
            onChangeComplete={(color) => setGlobalColor(color.hex)}
          />
        )}
        <Editor globalColor={globalColor}  globalSize={globalSize}/>
      </section>
      <section className="panel-section">
        <Panel globalColor={globalColor} globalSize={globalSize} />
      </section>
    </div>
  );
}
