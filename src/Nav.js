import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <Link to="/dogs/whiskey">Whiskey</Link>
            <Link to="/dogs/duke">Duke</Link>
            <Link to="/dogs/perry">Perry</Link>
            <Link to="/dogs/tubby">Tubby</Link>
        </>
    )
}

export default Nav;