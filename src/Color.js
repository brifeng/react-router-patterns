import React from "react";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Color = ({ colors }) => {
    const { color } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!(color in colors)) {
            console.log('runs');
            navigate("/colors");
            console.log('also runs');
        }
    }
    )
    return (
        <div style={{ backgroundColor: color }}>
            <h1> THIS IS {color}</h1>
            <p>ISN'T IT BEAUTIFUL?</p>
            <Link to="/colors">GO BACK</Link>
        </div >
    )
}

export default Color;