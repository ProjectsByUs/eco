import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Eco-Friendly Travel App</h1>
            <p>Make sustainable travel choices and reduce your carbon footprint!</p>
            <Link to="/carbon-footprint" className="text-blue-500">
                Compare Carbon Footprints
            </Link>
        </div>
    );
};

export default Home;
