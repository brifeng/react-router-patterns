import React from "react";
import { Link } from "react-router-dom";

const ColorHome = ({ colors }) => {
    const colorLinks = Object.keys(colors).map(color => (
        <li>
            <Link to={`/colors/${color}`}>
                {color}
            </Link>
        </li >
    ))

    return (
        <>
            <h1>Welcome to the color factory.</h1>
            <Link to="/colors/new">Add a Color</Link>
            <div>
                <p>Please select a color.</p>
                <ul>
                    {colorLinks}
                </ul>
            </div>
        </>
    )
}

export default ColorHome;