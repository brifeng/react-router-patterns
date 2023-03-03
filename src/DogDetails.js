import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const currentDog = dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return (
        <>
            <h1>Name: {currentDog.name}</h1>
            <h5>Age:{currentDog.age}</h5>
            <p>Facts: {currentDog.facts}</p>
            <img src={currentDog.src} alt="pic of {name}" />
        </>
    )
}

export default DogDetails;