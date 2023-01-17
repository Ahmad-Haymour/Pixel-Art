import { useEffect, useState } from "react";
// Render Context Provider
import { ColorEditorProvider } from "../context/ColorEditorContext";
// Component
import Wrapper from "./Wrapper";
// Icon implementation
import { IoColorPalette } from "react-icons/io5";
// Google Fonts Plugin
import WebFont from "webfontloader";
import "../style/App.scss";

function App() {
  // Font Hooks
  const [globalFont, setGlobalFont] = useState("Righteous");
  const [globalSize, setGlobalSize] = useState(24);
  const [globalColor, setGlobalColor] = useState("#fff");
  // Show / Hide Color Picker 2
  const [colorPickerDisplay, setColorPickerDisplay] = useState(false);

  // Google Fonts Configuration
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Arial",
          "Comic Sans",
          "Pacifico",
          "Chilanka",
          "Righteous",
          "Lobster Two",
          "Rubik Gemstones",
          "Audiowide",
          "Chewy",
        ],
      },
    });
  }, []);

  return (
    // Render Context Provider
    <ColorEditorProvider>
      <div
        id="App"
        style={{
          fontFamily: globalFont,
          fontSize: globalSize + "px",
          color: globalColor + " !important",
        }}
      >
      <header>
        <div className="font-wrapper">
          <div className="font-option">
            <label style={{ color: globalColor, fontSize: globalSize + "px" }}>Font: </label>
            <select
              defaultValue={globalFont}
              onChange={(event) => setGlobalFont(event.target.value)}
            >
              <option value={"Arial"}>Arial</option>
              <option value={"Comic Sans"}>Comic Sans</option>
              <option value={"Pacifico"}>Pacifico</option>

              <option value={"Righteous"}>Righteous</option>
              <option value={"Audiowide"}>Audiowide</option>
              <option value={"Lobster Two"}>Lobster Two</option>
              <option value={"Rubik Gemstones"}>Rubik Gemstones</option>
              <option value={"Chewy"}>Chewy</option>
              <option value={"Chilanka"}>Chilanka</option>
            </select>
          </div>
          <div className="font-option">
            <label style={{ color: globalColor, fontSize: globalSize + "px" }}>Size: </label>
            <input
              type="number"
              id="number"
              defaultValue={globalSize}
              onChange={(event) => setGlobalSize(event.target.value)}
            />
          </div>

          <div className="font-option">
            <label style={{ color: globalColor, fontSize: globalSize + "px" }}>Color: </label>
            <input
              type="text"
              id="text"
              placeholder="Color"
              onChange={(event) => {
                console.log(event.target.value);
                setGlobalColor(event.target.value);
              }}
              />
            <span>
              <IoColorPalette
                style={{ color: globalColor }}
                onClick={() => setColorPickerDisplay(!colorPickerDisplay)}
                title='Show Colors Picker'
              ></IoColorPalette>
            </span>
          </div>
        </div>

        <h1 style={{ color: globalColor }}>Pixel Art </h1>
      </header>

        <Wrapper
          globalColor={globalColor}
          globalSize={globalSize}
          setGlobalColor={setGlobalColor}
          colorPickerDisplay={colorPickerDisplay}
          />
          
      </div>
    </ColorEditorProvider>
  );
}

export default App;
