// Context Component
// To render some global hooks and functions 
import React, { createContext, useContext, useState } from 'react'

const ColorEditorContext = createContext()

export function useColorEditor(){
    return useContext(ColorEditorContext)
}

export function ColorEditorProvider({children}){

    const [selectedColor, setSelectedColor] = useState('#a32fb2')
    // default grid Dimensions 16px
    const [gridWidth, setGridWidth] = useState(16)
    const [gridHeight, setGridHeight] = useState(16)
  
    // Erase Single Pixel 
    const [eraseMood, setEraseMood] = useState(false)
    // Erase Entire Canvas
    const [eraseGridPanel, setEraseGridPanel] = useState(false)
    // Show / Hide Color Picker 1
    const [ showColorDisplay , setShowColorDisplay] = useState(false)
    // Select Paint Color
    function changeColor(color) {
        setSelectedColor(color.hex);
    }
    // Show / Hide Color Picker 1
    const showDisplay =() =>{
        setShowColorDisplay(!showColorDisplay)
      }

    return (
        <ColorEditorContext.Provider
            value={{
                    selectedColor, 
                    setSelectedColor, 
                    eraseMood,
                    setEraseMood,
                    gridWidth,
                    setGridWidth,
                    gridHeight,
                    setGridHeight,
                    eraseGridPanel,
                    setEraseGridPanel,
                    showColorDisplay,
                    setShowColorDisplay,
                    changeColor,
                    showDisplay
                }}>
            {children}
        </ColorEditorContext.Provider>
    )
}
