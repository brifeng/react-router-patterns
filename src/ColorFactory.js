import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorHome from "./ColorHome";
import AddColor from "./AddColor";
import Color from "./Color";


const ColorFactory = () => {
    const DEFAULT_COLORS = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };
    const [colors, setColors] = useState(DEFAULT_COLORS);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/colors"
                        element={<ColorHome colors={colors} />} />
                    <Route path="/colors/new"
                        element={<AddColor colors={colors} setColors={setColors} />} />
                    <Route path="/colors/:color"
                        element={<Color colors={colors} />} />
                    <Route path="*"
                        element={<Navigate to="/colors" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ColorFactory;