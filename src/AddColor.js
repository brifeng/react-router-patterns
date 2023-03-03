import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddColor = ({ colors, setColors }) => {
    const INITIAL_COLOR = { colorCode: "#000000" }
    const [form, setForm] = useState(INITIAL_COLOR);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(data => ({
            ...data,
            [name]: value
        }));
    }

    const addNewColor = (color) => {
        setColors(c => ({ ...c, ...color }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewColor({ [form.colorName]: form.colorCode });
        navigate("/colors");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="colorName"
                placeholder="colorname"
                onChange={handleChange}
            />
            <input type="color"
                name="colorCode"
                onChange={handleChange}
                default="#000000"
            />
            <button>Add this Color</button>
        </form>
    )
}

export default AddColor;